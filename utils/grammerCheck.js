const axios = require("axios");

async function check(text, language = "en-US") {
  try {
    const response = await axios.post(
      "https://api.languagetool.org/v2/check",
      new URLSearchParams({
        text: text,
        language: language,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error checking text:", error.message);
    throw error;
  }
}

module.exports = check;
