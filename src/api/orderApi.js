import apiClient from "./apiClient";

export async function order(payload) {
  const { data } = await apiClient.post("/contact/order", payload);
  return data;
}