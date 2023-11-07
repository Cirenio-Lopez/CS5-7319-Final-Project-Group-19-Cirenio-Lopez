const { extractLinks } = require("./linkExtractor");
const { sendRequest } = require("./httpRequestHandler");

const crawlDomain = async (
  url,
  domain,
  visitedPages,
  accessiblePages,
  inaccessiblePages,
  notFoundPages,
  gatewayTimeoutPages,
  crawlStartTime,
  crawlTimeout
) => {
  if (Date.now() - crawlStartTime > crawlTimeout) {
    return;
  }

  if (visitedPages.has(url)) {
    return;
  }
  visitedPages.add(url);

  try {
    await sendRequest(url);
    accessiblePages.push(url);
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 403:
          inaccessiblePages.push(url);
          break;
        case 404:
          notFoundPages.push(url);
          break;
        case 504:
          gatewayTimeoutPages.push(url);
          break;
        default:
          notFoundPages.push(url); // Assuming all other errors are treated as not found for simplicity
          break;
      }
    } else {
      // Log the error if needed
      console.error(`Error accessing ${url}:`, error.message);
    }
    // If there's an error, don't attempt to extract links from this page
    return;
  }

  // If the page is accessible, extract links and crawl them
  const links = await extractLinks(url, domain);
  for (const link of links) {
    await crawlDomain(
      link,
      domain,
      visitedPages,
      accessiblePages,
      inaccessiblePages,
      notFoundPages,
      gatewayTimeoutPages,
      crawlStartTime,
      crawlTimeout
    );
  }
};

module.exports = {
  crawlDomain,
};
