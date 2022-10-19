const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = 'Hey I’m red!';
para.style.color = 'red';
container.appendChild(para);

const heading = document.createElement('h3')
heading.textContent = "I'm a blue h3";
heading.style.color = "blue";
container.appendChild(heading);

const container2 = document.createElement('div');
container2.setAttribute('style', 'background-color: pink; border: 2px solid');

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement('p');
p.textContent = "ME TOO!"

container2.appendChild(h1);
container2.appendChild(p);

container.appendChild(container2);

const btn = document.querySelector('#btn');


btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});