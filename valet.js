const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxHE7OmnYyHFhJqjEgIIr9oDZmx4fQkhbyr47oIkbAH5nWsTW298ZnlkeDFUtXQCDGtkg/exec";

async function login(credentials) {
  try {
    const formData = new URLSearchParams();

    formData.append("email", credentials.email);
    formData.append("password", credentials.password);

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData
    });

    const result = await response.text();

    return result.trim();

  } catch (err) {
    console.error("Login error:", err);
    return "Fail";
  }
}
