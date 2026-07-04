document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  // collect form data
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    // send to Google Apps Script
    const response = await fetch("https://script.google.com/macros/s/AKfycbyrEMH9GTj76TYZsSdzOwtjjByYEhTRtCqZvNKpY-83SXgIICIqUUQirgnRJysAsZCI-A/exec", {
      method: "POST",
      body: JSON.stringify(data)
    });

    // success feedback
    if (response.ok) {
      alert("Message sent 🚀");
      this.reset();
    } else {
      alert("Something went wrong 💀");
    }

  } catch (error) {
    console.log(error);
    alert("Network error 💀 check console");
  }
});