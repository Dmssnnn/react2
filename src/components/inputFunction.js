export default function chatDiv () {
    const firstInput = document.getElementById("firstInput").value
    const firstButton = document.getElementById("firstButton")
    const container = document.getElementById("container")
    firstButton.addEventListener("click" , () => {
        
        const firstChatDiv = document.createElement("div")
        firstChatDiv.classList.add("firstChatDiv")
        firstChatDiv.innerHTML = `
            <span>${firstInput}</span>
        `
        container.appendChild(firstChatDiv)
        
    })

}
 

