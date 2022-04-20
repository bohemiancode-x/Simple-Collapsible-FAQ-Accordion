const coll = document.getElementsByClassName('collapsible');
const content = document.getElementsByClassName('answer');

console.log(coll[0], content[3]);

let i;
for (let i=0; i < coll.length; i++){
    coll[i].addEventListener('click', () => {
        
        if (content[i].style.display === "none") {
            coll[i].classList.add("active");
            content[i].style.display = "flex";
        } else {
            content[i].style.display = "none";
            coll[i].classList.remove("active");
        }
    })
}

