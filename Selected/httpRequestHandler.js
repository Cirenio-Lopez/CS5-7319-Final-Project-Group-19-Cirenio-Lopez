const axios = require("axios");

const sendRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendRequest,
};
