const body = document.querySelector(".container")
var textEnt = document.getElementById("entry")
var userNameEnt = document.querySelector(".user_name_ent")
const sendBtn = document.querySelector(".send")
const backBtn = document.querySelector(".go-back")
var texts = ''
const addTheText = document.querySelector('.texts')

function getText(ent) {
    return ent.value
}

function displayText() {
    const text = getText(textEnt)
    const userName = getText(userNameEnt)

    if (text != "") {
        if (userName === "Baris") {
            texts += `<p class="user1 text">${text}</p>`
            addTheText.innerHTML = texts
        } else if (userName === "Gokhan")
        {
            texts += `<p class="user2 text">${text}</p>`
            addTheText.innerHTML = texts
        }
        textEnt.value = ""
    }
}

sendBtn.addEventListener('click', displayText)
body.addEventListener('keyup', function(event){
    if (event.key == "Enter") {
        displayText
      }
})

backBtn.addEventListener('click', function () {
    body.classList.add('hidden')
})

