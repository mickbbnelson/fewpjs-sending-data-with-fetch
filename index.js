// Add your code here
const body = document.querySelector("body")

function submitData(name, email){
    

    const confObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch("http://localhost:3000/users", confObj)
    .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        return DOMId(object);
      })
      .catch(function(error) {
        body.innerHTML += error.message
      })
}

function DOMId(object){
body.innerHTML += `<p>${object.id}</p>`
}
