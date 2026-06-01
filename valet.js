// valet.js
// Store your Web App URL here
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHE7OmnYyHFhJqjEgIIr9oDZmx4fQkhbyr47oIkbAH5nWsTW298ZnlkeDFUtXQCDGtkg/exec";

async function login(credentials) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(credentials)
    });
    return response.text();
  } catch (err) {
    console.error("Login error:", err);
    return "Fail";
  }
}
