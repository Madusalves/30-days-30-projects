function show_clock(){
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date(); // "Date" é uma função incorporada em JavaScript que cria um objeto que representa uma data e hora específicas

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${hours}deg)`;
}

setInterval(show_clock, 1000)