const API_URL =
  process.env.REACT_APP_API_URL ||
  (window.location.hostname === "localhost"
    ? "http://localhost:8080/api/signs"
    : "http://backend:8080/api/signs");
const AUTH = "Basic " + btoa("admin:secret");

export async function getAllSigns() {
  const res = await fetch(API_URL, {
    headers: { "Authorization": AUTH }
  });
  return res.json();
}

export async function addSign(sign) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": AUTH
    },
    body: JSON.stringify(sign)
  });
  if (!res.ok) {
    const text = await res.text();
    console.error("Backend error:", res.status, text);
    throw new Error("Backend returned " + res.status);
  }
  return res.json();
}