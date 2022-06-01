let mainText = document.querySelector("h1");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);

    if(value > 300) {
        mainText.style.animation = 'disappear 2s ease-out forwards';
    } else {
        mainText.style.animation = 'slide 2s ease-out';
    }
})