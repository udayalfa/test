import apiClient from "./apiClient";

export const createJewellary = async (form) => {
  const { data } = await apiClient.post("/jewellary/", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
export const getJewellaryByCategory = async (category) => {
  const { data } = await apiClient.get("/jewellary/all/" + category);
  return data;
};
export const getHomeJewellery = async () => {
  const { data } = await apiClient.get("/jewellary/home");
  return data;
};
export const getFullJewellaryByCategory = async (category) => {
  const { data } = await apiClient.get("/jewellary/allDetails/" + category);
  return data;
};

export const getJewellaryById = async (id) => {
  const { data } = await apiClient.get("/jewellary/" + id);
  return data;
};

export const updateJewellary = async (id, payload) => {
  const { data } = await apiClient.put("/jewellary/" + id, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const deleteJewellary = async (id) => {
  const { data } = await apiClient.delete("/jewellary/" + id);
  return data;
};
