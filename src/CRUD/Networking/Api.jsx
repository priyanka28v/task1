import axios from "axios";

const baseURL = "http://74.208.13.142:6051";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZWY3MzdmYmI3MjA5MGMwODVkY2QwZiIsImlhdCI6MTc2MjkyMjAyNCwiZXhwIjoxNzYyOTU4MDI0fQ.MohoG7dMJ16rnDqmwjn-uqNYs9qxcDbPcbe0lNqP1IQ";

export const apiInstance = axios.create({
  baseURL, 
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  params: {
    decrypt: true,
  },
});

export const Api = async (url,values,method) => {
  try {
    let response;
    if (method === "post") {
      response = await apiInstance.post(url, values);
    } else if (method === "get") {
      response = await apiInstance.get(url);
    } else if (method === "delete") {
      response = await apiInstance.delete(url);
    }
    else if(method==="put"){
      response=await apiInstance.put(url,values)
    }
    return response;
  } catch (err) {
    console.log(err)
   
  }
};
