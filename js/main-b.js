// Put code of task B here
const main = document.querySelector('main');

const article =
    `<article>
        <header>
                <h2>Article header</h2>
        </header>
        <figure>
                <img src="http://placekitten.com/320/160" alt="title">
                <figcaption>Caption</figcaption>
        </figure>
        <p>Here is some text. Here is some text. Here is some text. Here is some text.</p>
     </article>`;

main.innerHTML += article;