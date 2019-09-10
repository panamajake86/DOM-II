// Your code goes here
const btnBtn = document.querySelectorAll(".btn");
btnBtn.forEach((event) =>{
    event.addEventListener('click', (e) =>{
        event.textContent = 'That tickles!';
    });
});

const grow = document.querySelectorAll('h4');
grow.forEach((event) =>{
    event.addEventListener('mouseover', (e) =>{
        event.style.transform = 'scale(1.5)';
    });

    event.addEventListener('mouseout', (e) =>{
        event.style.transform = 'scale(1)';
    });
});

const intro = document.querySelector('.intro');
intro.addEventListener('dblclick', (e) =>{
    intro.textContent = "You done screwed up!";
});

const image = document.querySelectorAll('img');
image[0].addEventListener('dblclick', (e) =>{
    image[0].src = "img/bus-fire.jpg";
    e.stopPropagation();
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

image[1].addEventListener('click', (e) =>{
    image[1].src = 'img/adventure.jpg';
    image[2].src = 'img/sad.jpg';
});

image[3].addEventListener('drag', (e) =>{
    image[2].src = 'img/fun.jpg';
});

