const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHE7OmnYyHFhJqjEgIIr9oDZmx4fQkhbyr47oIkbAH5nWsTW298ZnlkeDFUtXQCDGtkg/exec";

async function login(credentials) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
