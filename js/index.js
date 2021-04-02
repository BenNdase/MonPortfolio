const fullname = document.querySelector("#fullname");
window.onload = function () {
    fetch("http://localhost:3000/fullname")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let name of data) {
                // const span = document.createElement("span");
                // span.setAttribute('class', 'fullname')
                // const content = document.createTextNode(
                //     `${name.prenom} ${name.nom}`
                // );
                // span.appendChild(content);
                // fullname.appendChild(span);
                const row = createChildLi(name);
                fullname.insertAdjacentHTML("afterend", row);
            }
        });
};

function createChildLi(name) {
    return `<span class="fullname">${name.prenom} ${name.nom} </span>`;
}