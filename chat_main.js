const body = document.querySelector(".container")
var text = document.getElementById("entry")
const sendBtn = document.querySelector(".send")
const backBtn = document.querySelector(".go-back")
var texts = ''
const addTheText = document.querySelector('.texts')


function getText() {
    return text.value
}

function displayText() {
    const text = getText()
    if (text[0] === "A") {
        texts += `<p class="user1 text">${text.substring(1)}</p>`
        addTheText.innerHTML = texts
    } else if (text[0] === "B")
    {
        texts += `<p class="user2 text">${text.substring(1)}</p>`
        addTheText.innerHTML = texts
    }
}

sendBtn.addEventListener('click', displayText)
sendBtn.addEventListener('keyup', function(event){
    if (event.key == "Enter") {
        displayText
      }
})


backBtn.addEventListener('click', function () {
    body.classList.add('hidden')
})
