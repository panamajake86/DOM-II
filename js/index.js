// Your code goes here
const btnBtn = document.querySelectorAll(".btn");
for(var i = 0; i < btnBtn.length; i++){
    btnBtn[i].addEventListener('click', (event)=> {
    console.log("That tickles!");
    })
};

const grow = document.querySelectorAll('h4');
grow[0].addEventListener('mouseover', (event) => {
    grow[0].style.transform = 'scale(1.5)';
});
grow[0].addEventListener('mouseout', (event) => {
    grow[0].style.transform = 'scale(1)';
});

grow[1].addEventListener('mouseover', (event) => {
    grow[1].style.transform = 'scale(1.5)';
});
grow[1].addEventListener('mouseout', (event) => {
    grow[1].style.transform = 'scale(1)';
});

grow[2].addEventListener('mouseover', (event) => {
    grow[2].style.transform = 'scale(1.5)';
});
grow[2].addEventListener('mouseout', (event) => {
    grow[2].style.transform = 'scale(1)';
});

const image = document.querySelector('img');
image.addEventListener('dblclick', (e) =>{
    image.src = "img/bus-fire.jpg";
});

