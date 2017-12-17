exports.getPostTemplate = function getHtml (data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${data.title}</title>
  <link rel="stylesheet" href="../stylesheets/index.css" />
  <link rel="shortcut icon" href="../images/avatar.jpeg" type="image/x-icon" />
  <meta name='viewport' content = 'width = device-width, initial-scale = 1.0, user-scalable = no'>
  <meta property="wb:webmaster" content="5b98c97d88ede355" />
  <meta name="author" content="歲歲無終🌟" />
  <meta name="keywords" content="歲歲無終🌟" />
  <meta name="description" content="賦落花詩" />
  <style type="text/css">
    body {
      text-align: center;
      padding: 10%;
      box-sizing: border-box;
    }
    hr {
      border-color: #65a;
    }
  </style>
  <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?74b53e5f27776bad072a049eea077d01";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-76738066-1', 'auto');
    ga('send', 'pageview');
  </script>
</head>
<body class = 'my-trouble post'>
  ${data.content}
</body>
</html>
  `
};

exports.getTrouble = function getTroubleIndex (content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>我的心事</title>
  <link rel="stylesheet" href="./stylesheets/index.css" />
  <link rel="shortcut icon" href="./images/avatar.jpeg" type="image/x-icon" />
  <meta name='viewport' content = 'width = device-width, initial-scale = 1.0, user-scalable = no'>
  <meta property="wb:webmaster" content="5b98c97d88ede355" />
  <meta name="author" content="歲歲無終🌟"" />
  <meta name="keywords" content="歲歲無終🌟"" />
  <meta name="description" content="賦落花詩" />
  <style type="text/css">
    body {
      text-align: center;
      padding: 10%;
      box-sizing: border-box;
    }
    hr {
      border-color: #65a;
    }
  </style>
</head>
<body class = 'post my-trouble-index'>
  <ul class = 'post-list'>
    ${content}
  </ul>
</body>
</html>
`
}
