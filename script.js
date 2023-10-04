const wrapper = document.querySelector('.wrapper')
const question = document.querySelector('.question')
const gif = document.querySelector('.gif')
const yesbtn = document.querySelector('.yes-btn')
const nobtn = document.querySelector('.no-btn')

yesbtn.addEventListener("click", () => {
    question.innerHTML = " I love You B Sal";
    gif.src = "https://media.tenor.com/images/a888da1d5b88b82bb5ed50205d2b8ab2/tenor.gif"
});

nobtn.addEventListener('mouseover', () => {
    const nobtnrect = nobtn.getBoundingClientRect();
    const maxx = window.innerWidth - nobtnrect.width;
    const maxy = window.innerHeight - nobtnrect.height;

    const randomx = Math.floor(Math.random() * maxx);
    const randomy = Math.floor(Math.random() * maxy);

    nobtn.style.left = randomx + 'px';
    nobtn.style.top = randomy + 'px' 
})