// src/fetching/Api.js

const fetchApi = async (url,payload,method) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    throw err; 
  }
};

export default fetchApi;