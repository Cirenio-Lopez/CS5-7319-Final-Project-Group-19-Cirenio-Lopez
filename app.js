const parseArguments = require("./argsParser");
const { startSpinner, stopSpinner } = require("./spinner");
const { crawlDomain } = require("./crawler");

const main = async () => {
  const domain = parseArguments();
  const accessiblePages = [];
  const inaccessiblePages = [];
  const notFoundPages = [];
  const gatewayTimeoutPages = [];
  const visitedPages = new Set();

  const crawlStartTime = Date.now();
  const crawlTimeout = 120000; // 2 minutes in milliseconds

  // Start the spinner for user feedback
  const spinnerInterval = startSpinner();

  try {
    await crawlDomain(
      domain,
      domain,
      visitedPages,
      accessiblePages,
      inaccessiblePages,
      notFoundPages,
      gatewayTimeoutPages,
      crawlStartTime,
      crawlTimeout
    );

    // Stop the spinner once crawling is complete
    stopSpinner(spinnerInterval);

    const elapsedTime = Date.now() - crawlStartTime;
    if (elapsedTime < crawlTimeout) {
      console.log("Crawling complete.");
    } else {
      console.log("Crawling stopped due to timeout.");
    }

    // Output the results
    console.log("Accessible pages:", accessiblePages);
    console.log("Inaccessible pages:", inaccessiblePages);
    console.log("Not found pages (404):", notFoundPages);
    console.log("Gateway Timeout pages (504):", gatewayTimeoutPages);
  } catch (error) {
    // Stop the spinner if an error occurs
    stopSpinner(spinnerInterval);
    console.error("An error occurred during crawling:", error);
  }
};

main();
