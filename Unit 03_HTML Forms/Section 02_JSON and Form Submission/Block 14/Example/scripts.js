document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => alert("Server Response: " + data.message))
        .catch(error => console.error("Error:", error));
});