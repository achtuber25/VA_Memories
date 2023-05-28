function myFunction() {
    let name = document.forms["myForm"]["name"].value
    let key = document.forms["myForm"]["password"].value
    let verified = 0
    console.log(name, key)

    if (name.toLowerCase() == "lovemark" && key.toLowerCase() == "vanaya") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("here is your collection")
        window.location.href = "Memories.html"

    } else if (name.toLowerCase() == "lovemark" && key.toLowerCase() == "anaya") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("❤️Welcome Baby❤️ and Love You 2 😘")
        window.location.href = "Memories.html"
    } else if (name.toLowerCase() == "lovemark" && key.toLowerCase() == "anaya") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("❤️Welcome Baby❤️ and Love You 2  😘")
        window.location.href = "Memories.html"
    } else if (name.toLowerCase() == "lovemark" && key.toLowerCase() == "anaya") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("❤️Welcome Baby❤️ and Love You 2 😘")
        window.location.href = "Memories.html"
    } else if (name.toLowerCase() == "lovemark" && key.toLowerCase() == "anaya") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("❤️Welcome Baby❤️ and Love You 2 😘")
        window.location.href = "Memories.html"
    } else if (name.toLowerCase() == "guest" && key == "anaya") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("Welcome")
        window.location.href = "Memories.html"
    } else {
        verified = 0
        localStorage.setItem("auth", verified)
        alert("Get Lost 😠")
    }
}