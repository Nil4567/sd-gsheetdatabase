// valet.js
// Store your Web App URL here
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzkZFQxLchA8H95QRAbIlEhKjJ2iD-mgrTAJfayRaSLhI0oQAXWRJ3hJQkVI6LG2qIbdw/exec";

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
