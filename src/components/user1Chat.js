export default function user1ChatDiv () {
    const firstInput = document.getElementById("firstInput")
    const firstButton = document.getElementById("firstButton")
    const container = document.getElementById("container")
    firstButton.addEventListener("click" , () => {


        const firstChatDiv = document.createElement("div")

        firstChatDiv.classList.add("firstChatDiv")
        firstChatDiv.innerHTML = `
            <span> ${firstInput.value}</span>
        `
        container.appendChild(firstChatDiv)
        document.getElementById("firstInput").value = ''; 
    })

}
 

