/*
 * Copyright 2019 Oleg I.
 * Licensed under the ISC license
 */
const rssUrl = "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en";

const FnLoadRssToHtml = async rssUrl => {
  let Parser = require("rss-parser");
  let RSSparser = new Parser();
  let HeadTitle = "";
  let Title = "";
  let OutHtml = "<ul>";
  try {
    let feed = await RSSparser.parseURL(rssUrl);

    HeadTitle += "<h1>" + feed.title + "</h1>";
    Title += "<title>" + feed.title + "</title>";

    feed.items.forEach(item => {
      OutHtml += "<li>";
      OutHtml += "<a href=";
      OutHtml += item.link + ">";
      OutHtml += item.title;
      OutHtml += "</a></li>";
    });
  } catch (e) {
    HeadTitle += `<h1 style="color:red;">Parsing ERROR!</h1>`;
  }
//----------------------------------
  OutHtml += "</ul>";

  let OutDataRSS = [];
  OutDataRSS.HeadTitle = HeadTitle;
  OutDataRSS.Title = Title;
  OutDataRSS.OutHtml = OutHtml;
  return OutDataRSS;
};

module.exports = { FnLoadRssToHtml, rssUrl };
