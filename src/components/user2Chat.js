
 

export default function user2ChatDiv () {
     const secondInput = document.getElementById("secondInput")
     const secondButton = document.getElementById("secondButton")
     const container = document.getElementById("container")

     secondButton.addEventListener("click" , () => {
        const secondChatDiv = document.createElement("div")
        secondChatDiv.classList.add("secondChatDiv")
        secondChatDiv.innerHTML = `
                     <span> ${secondInput.value}</span>  `

        container.appendChild(secondChatDiv)
        document.getElementById("secondInput").value = ''; 
     })
}
