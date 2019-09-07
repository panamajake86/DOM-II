// Your code goes here
const btnBtn = document.querySelectorAll(".btn");
for(var i = 0; i < btnBtn.length; i++){
    btnBtn[i].addEventListener('click', (event)=> {
    console.log("That tickles!");
    })
};

const grow = document.querySelectorAll('h4');
grow.forEach((event) =>{
    event.addEventListener('mouseover', (e) =>{
        event.style.transform = 'scale(1.5)';
    });

    event.addEventListener('mouseout', (e) =>{
        event.style.transform = 'scale(1)';
    });
});

const image = document.querySelectorAll('img');
image[0].addEventListener('dblclick', (e) =>{
    image[0].src = "img/bus-fire.jpg";
});

const body = document.querySelector('body');
console.log(body);
body.addEventListener('wheel', (e) =>{
    body.style.backgroundColor = 'green';
});

body.addEventListener('keyup', (e) =>{
    body.style.backgroundColor = 'white';
});

body.addEventListener('keydown', (e) =>{
    image[1].src = 'img/smiley.jpg';
});

body.addEventListener('keyup', (e) =>{
    image[1].src = 'img/sad.jpg';
});

