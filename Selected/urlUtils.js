const getAbsoluteUrl = (baseUrl, relativeUrl) => {
  return new URL(relativeUrl, baseUrl).href;
};

module.exports = {
  getAbsoluteUrl,
};
