import apiClient from "./apiClient";

export async function contact(payload) {
  const { data } = await apiClient.post("/contact/", payload);
  return data;
}

export async function buildYourOwn(payload) {
  const { data } = await apiClient.post("/contact/build", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}
