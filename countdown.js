const releaseDate = new Date("January 12, 2027 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = releaseDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        days + " days " +
        hours + " hours " +
        minutes + " minutes " +
        seconds + " seconds";
}

updateCountdown();

setInterval(updateCountdown, 1000);