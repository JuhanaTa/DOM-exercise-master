// Put code of task C here
const main = document.querySelector('main');

const article = document.createElement('article');

const header = document.createElement('header');
const h2 = document.createElement('h2');
const h2Text = document.createTextNode('Article header');
h2.appendChild(h2Text);
header.appendChild(h2);

const figure = document.createElement('figure');
const img = document.createElement('img');
img.src = 'http://placekitten.com/320/160';
img.alt = 'title';
const figcap = document.createElement('figcaption');
const FigText = document.createTextNode('Caption');
figcap.appendChild(FigText);

figure.appendChild(img);
figure.appendChild(figcap);

const p = document.createElement('p');
const pText = document.createTextNode('Here is some text. Here is some text. Here is some text. Here is some text.');
p.appendChild(pText);


article.appendChild(header);
article.appendChild(figure);
article.appendChild(p);

main.appendChild(article);
