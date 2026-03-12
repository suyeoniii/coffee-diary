import { CreateBrewLogPayload } from "../../types/log";

const API_BASE_URL = "http://localhost:3000"; // TODO: Move to env variable

export async function createCoffeeLog(payload: CreateBrewLogPayload) {
  const res = await fetch(`${API_BASE_URL}/brew-logs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to create coffee log");
  }

  return res.json();
}
