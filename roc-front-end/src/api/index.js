import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:4000/api",
  baseURL: "https://realty-on-chain-backend.onrender.com/api",
});

const ResponseInterceptor = (response) => {
  return response.data;
};

const RequestInterceptor = async (requestConfig) => {
  requestConfig.headers.Authorization = "Bearer ABCD1234";
  return requestConfig;
};

API.interceptors.request.use(RequestInterceptor);

API.interceptors.response.use(ResponseInterceptor, (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      // Unauthorized
      return Promise.reject(error);
    }
    return Promise.reject(error.response.data.message);
  } else if (error.request) {
    return Promise.reject(error);
  } else {
    return Promise.reject(error);
  }
});

const getTokenPrices = async () => {
  const tokenPrices = await API.get("/token-prices");
  return tokenPrices;
};

const getProperties = async () => {
  const properties = await API.get("/properties");
  return properties;
};

export { API, getProperties, getTokenPrices };
