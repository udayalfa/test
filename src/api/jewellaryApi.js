import apiClient from "./apiClient";

export const createTrophy = async (form) => {
  const { data } = await apiClient.post("/trophy/", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
export const getTrophyByCategory = async (category) => {
  const { data } = await apiClient.get("/trophy/all/" + category);
  return data;
};
export const getHomeTrophy = async () => {
  const { data } = await apiClient.get("/trophy/home");
  return data;
};
export const getFullTrophyByCategory = async (category) => {
  const { data } = await apiClient.get("/trophy/allDetails/" + category);
  return data;
};

export const getTrophyById = async (id) => {
  const { data } = await apiClient.get("/trophy/" + id);
  return data;
};

export const updateTrophy = async (id, payload) => {
  const { data } = await apiClient.put("/trophy/" + id, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const deleteTrophy = async (id) => {
  const { data } = await apiClient.delete("/trophy/" + id);
  return data;
};
