const cheerio = require("cheerio");
const { sendRequest } = require("./httpRequestHandler");
const { getAbsoluteUrl } = require("./urlUtils");

const extractLinks = async (url, domain) => {
  try {
    const response = await sendRequest(url);
    const $ = cheerio.load(response.data);
    const links = [];
    $("a").each((i, link) => {
      const href = $(link).attr("href");
      if (href && href.startsWith("/")) {
        links.push(getAbsoluteUrl(domain, href));
      }
    });
    return links;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  extractLinks,
};
