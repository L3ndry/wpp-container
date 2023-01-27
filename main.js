let req = await fetch("https://ee2a-168-195-213-54.sa.ngrok.io/generate", {
    method: "POST",
    headers: {
        "Content-Type": "image/png"
    },
})
let res = await req.blob();

const qr = document.querySelector("#qr")
const timeSpan = document.querySelector("#timeSpan")

const imgURL = URL.createObjectURL(res)
const img = document.createElement("img")
img.setAttribute("src", imgURL)

let time = 59
const interval = setInterval(counter, 1000)

function counter() {
    time--
    timeSpan.innerHTML = time
    if (time == 0) {
        clearInterval(interval)
        qr.style.display = "none"
        location.reload()
    }
}

qr.innerHTML = ``
qr.appendChild(img)