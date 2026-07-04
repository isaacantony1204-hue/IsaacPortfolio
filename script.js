document.getElementById("contactForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  await fetch("https://script.google.com/macros/s/AKfycbyrEMH9GTj76TYZsSdzOwtjjByYEhTRtCqZvNKpY-83SXgIICIqUUQirgnRJysAsZCI-A/exec", {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("Message sent 🚀");
  this.reset();
});