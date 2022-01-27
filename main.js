const btnEl = document.getElementById("btn-el")

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []

btnEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
})



function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + " " + "</li>"
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}