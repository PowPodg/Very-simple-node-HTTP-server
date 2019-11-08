/*
 * Copyright 2019 Oleg I.
 * Licensed under the ISC license
 */
const FnRss = require("./Rss.js");

it("link verification", async function() {
  let ResOut = "<title>Top stories - Google News</title>";
  let result = await FnRss.FnLoadRssToHtml(FnRss.rssUrl);
  if (result.Title !== ResOut) {
    throw new Error(`Expected ${ResOut}, but got ${result.Title}`);
  }
});
