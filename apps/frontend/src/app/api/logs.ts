import { CreateBrewLogPayload } from "../../types/log";

const API_BASE_URL = "http://localhost:3000"; // TODO: Move to env variable

/**
 * 커피 기록 추가 API
 * @param payload
 * @returns
 */
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

/**
 * 커피 기록 조회 API
 * @param payload
 * @returns
 */
export async function fetchCoffeeLogs() {
  const res = await fetch(`${API_BASE_URL}/brew-logs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch coffee logs");
  }

  return res.json();
}
