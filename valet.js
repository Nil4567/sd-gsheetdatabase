// valet.js
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyi1s7BsUd78_wHktHRwZWptF37F2UNQVYqw1a6Ktvi/dev";

async function login(credentials) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"   // ✅ Required
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }

    return response.text();
  } catch (err) {
    console.error("Login error:", err);
    return "Fail";
  }
}
