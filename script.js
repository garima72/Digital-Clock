function showTime() { 
    let time = new Date(); // built in function used to work with date and time in js

    let hours = time.getHours();
    let minutes = String(time.getMinutes()).padStart(2, "0"); // for add extra zero in beginning
    let seconds = String(time.getSeconds()).padStart(2, "0");

    let clock = document.getElementById("clock");

    clock.innerHTML = hours + " : " + minutes + " : " + seconds;

    let day = time.getDate();
    let month = time.getMonth() + 1; // because month starts from zero in js
    let year = time.getFullYear();

    let date = document.getElementById("date");

    date.innerHTML = day + " / " + month + " / " + year;
}

setInterval(showTime, 1000);