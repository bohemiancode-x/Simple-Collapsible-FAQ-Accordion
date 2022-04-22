const coll = document.getElementsByClassName('collapsible');
const content = document.getElementsByClassName('answer');
const quest = document.getElementsByClassName('quest');

console.log(quest[0].textContent);

let i;
for (let i=0; i < coll.length; i++){
    coll[i].addEventListener('click', () => {
        
        if (content[i].style.display === "none") {
            quest[i].classList.add("opacity");
            coll[i].classList.add("active");
            content[i].style.display = "flex";
        } else {
            content[i].style.display = "none";
            coll[i].classList.remove("active");
            quest[i].classList.remove("opacity");
        }
    })
};

