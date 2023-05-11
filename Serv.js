/*
 * Copyright 2019 Oleg I.
 * Licensed under the ISC license
 */
1
const FnRss = require("./Rss.js");
const http = require("http");
<<<<<<< HEAD
//-------------------------
=======
>>>>>>> 59a86af5c7f2e3d2d22399492ecebaf3ac9a07d0
//--------------------------------------------------
FnRss.FnLoadRssToHtml(FnRss.rssUrl).then(inDataRSS => {
  let port = process.env.PORT || 3000;
  http.createServer(function(req, res) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<!DOCTYPE html>");
      res.write("<html>");
      res.write("<head>");
      res.write(`<meta charset="utf-8" />`);
      res.write(inDataRSS.Title);
      res.write("</head>");
      res.write("<body>");
      res.write(inDataRSS.HeadTitle);
      res.write(inDataRSS.OutHtml);
      res.write("</body>");
      res.write("</html>");
      res.end();
    })
    .listen(port);
});
