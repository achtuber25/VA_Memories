function myFunction() {
    let name = document.forms["myForm"]["name"].value
    let key = document.forms["myForm"]["password"].value
    let verified = 0
    console.log(name, key)
    if (name.toLowerCase() == "aditya" && key.toLowerCase() == "loveyou2vandna") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("here is your collection")
        window.location.href = "Memories.html"

    } else if (name.toLowerCase() == "vandna" && key.toLowerCase() == "iloveyouaditya") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("❤️Welcome Baby❤️ and Love You 2 😘")
        window.location.href = "Memories.html"
    } else if (name.toLowerCase() == "vandna" && key.toLowerCase() == "iloveuaditya") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("❤️Welcome Baby❤️ and Love You 2  😘")
        window.location.href = "Memories.html"
    } else if (name.toLowerCase() == "vandna" && key.toLowerCase() == "iloveyouaadi") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("❤️Welcome Baby❤️ and Love You 2 😘")
        window.location.href = "Memories.html"
    } else if (name.toLowerCase() == "vandna" && key.toLowerCase() == "iloveuaadi") {
        verified = 1
        localStorage.setItem("auth", verified)
        alert("❤️Welcome Baby❤️ and Love You 2 😘")
        window.location.href = "Memories.html"
    } else if (name.toLowerCase() == "aditya" && key.toLowerCase() == "Aot@25sep") {
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