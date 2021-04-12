const fullname = document.querySelector("#fullname");

const languages = document.querySelector("#languages");
const frameworks = document.querySelector("#frameworks");
const backend = document.querySelector("#backend__tools");

const sgbd = document.querySelector("#sgbd");
const projects = document.querySelector("#projects__content");
const links_footer = document.querySelector("#link__icons-box");

window.onload = function () {
    fetch("http://localhost:3000/fullname")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let name of data) {
                const paragraphe = document.createElement("p");
                paragraphe.setAttribute("class", "header__title");
                paragraphe.textContent = `${name.lastname} ${name.firstname}`;
                fullname.prepend(paragraphe);
            }
        });
    fetch("http://localhost:3000/contact")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let links of data) {
                const link = document.createElement("a");
                const icon = document.createElement("i");
                link.setAttribute("href", `${links.link}`);
                icon.setAttribute("class", `${links.class}`);
                link.appendChild(icon);
    
                const link_icon = document.createElement("div");
                const link_name = document.createElement("span");
                link_icon.setAttribute("class","link__icon");
                link_name.textContent = `${links.name}`;
                link_icon.appendChild(link);
                link_icon.appendChild(link_name);
                links_footer.appendChild(link_icon);
            }
        });
    fetch("http://localhost:3000/skills")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let skill of data) {
                for(let lang of skill.frontend_languages){
                    const image = document.createElement("img");
                    image.setAttribute("src",`${lang.image__src}`);
                    languages.appendChild(image);
                }
                for(let lang of skill.frontend_frameworks){
                    const image = document.createElement("img");
                    image.setAttribute("src",`${lang.image__src}`);
                    frameworks.appendChild(image);
                }
                for(let lang of skill.backend_tools){
                    const image = document.createElement("img");
                    image.setAttribute("src",`${lang.image__src}`);
                    backend.appendChild(image);
                }
                for(let lang of skill.DBMS){
                    const image = document.createElement("img");
                    image.setAttribute("src",`${lang.image__src}`);
                    sgbd.appendChild(image);
                }
            }
        })

    fetch("http://localhost:3000/projects")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let project of data) {
                const card = document.createElement("div");
                const image_box = document.createElement("div");
                const image = document.createElement("img");

                card.setAttribute("class","card");
                image_box.setAttribute("class","card__image-box");
                image.setAttribute("class","card__image");
                image.setAttribute("src", `${project.image__src}`);
                
                image_box.appendChild(image);
                card.appendChild(image_box);
                projects.appendChild(card);
            }
        })
};