function validateForm() {
    let username = document.getElementById("username").value;
    if (username === "") {
        document.getElementById("error").innerText = "Username is required";
        return false;
    }
    return true;
}

document.getElementById("myForm").addEventListener("submit", validateForm)