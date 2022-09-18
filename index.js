window.addEventListener("load", function(){
fetch('https://apis.scrimba.com/bored/api/activity')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("activity-name").innerText = data.activity 
    document.getElementById("activity-type").innerText = data.type
    document.getElementById("activity-participants").innerText = data.participants
    document.getElementById("activity-price").innerText = data.price
  })
})

document.getElementById("activity-btn").addEventListener("click", function(){
fetch('https://apis.scrimba.com/bored/api/activity')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("activity-name").innerText = data.activity 
    document.getElementById("activity-type").innerText = data.type
    document.getElementById("activity-participants").innerText = data.participants
    document.getElementById("activity-price").innerText = data.price
  
  })
})