import apiClient from "./apiClient";

// export const getJewellaries = async (endpoint) => {
//   const { data } = await apiClient.get(`/tasks?${endpoint}`);
//   return data;
// };
// export const getAllTasks = async () => {
//   const { data } = await apiClient.get("/tasks/all");
//   return data;
// };
// export const getTaskById = async (id) => {
//   const { data } = await apiClient.get(`/tasks/${id}`);
//   return data;
// };

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
// export const updateTask = async (id, updates) => {
//   const { data } = await apiClient.put(`/tasks/${id}`, updates);
//   return data;
// };

// export const deleteTask = async (id) => {
//   const { data } = await apiClient.delete(`/tasks/${id}`);
//   return data;
// };
