const {
  join,
  parse
} = require('path')
const chalk = require('chalk')
const { promisify } = require('util')
const compose = require('lodash/fp/compose')

const fs = require('fs')
const {
  readdirSync,
} = fs;

const [read, write] = ['readFile', 'writeFile'].map(item => promisify(fs[item]));

const rawMarked  = require('marked');
const marked = promisify(rawMarked);

const { getPostTemplate, getTrouble } = require('./template');

const BASE_DIR = join(__dirname, '../');

const getPath = (path) => join(BASE_DIR, path);

const SOURCE   = getPath('./source');
const DEST     = getPath('./posts');
const INDEX    = getPath('./index.html');
const HOST     = 'https://amizi.cc/posts/';

const logError = compose(
  console.log,
  chalk.red,
  chalk.bold,
);

const handleDir = async (files) => Promise.all(
  files.map(async file => {
    const basename = parse(file).name
    console.log('await');
    const fileContent = await read(join(SOURCE, file))
    const html = await marked(fileContent.toString())
    console.log('write')
    await write(join(DEST, basename + '.html'), getPostTemplate({
      title: basename,
      content: html
    }))
    return basename
  })
).then(generateIndexs).catch(logError)

function getIndexes (ary) {
  return ary.map(item => {
    return `<li alt = '${item}' title = '${item}''><a href = "${HOST + item}.html" >${item}</a></li>`;
  }).join('\r\n\t');
}
function generateIndexs (ary) {
  const indexes = getIndexes(ary);
  const html = getTrouble(indexes);
  write(INDEX, html, logError);
}

handleDir(readdirSync(SOURCE));
