const btnEl = document.getElementById("btn-el")

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []

btnEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
        //clear out the input field
    inputEl.value = ""
    renderLeads()
})

// const recipient = "james"
// const email = `hey,${recipient}! how it's going?`
// console.log(email)

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
          <a target="_blank" href="${myLeads[i]}">
            ${myLeads[i]}
          </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}