let birthday = new Date('Aug 18, 2024 00:00:00').getTime();
const app = document.querySelector('#app div');
const SEC = 1000, MIN = SEC * 60, HOUR = MIN * 60, DAY = HOUR * 24;
setInterval(() => {
    const today = new Date().getTime();
    const time = birthday - today;
    const day = Math.floor(time / DAY);
    const hour = Math.floor(time % DAY / HOUR).toString().padStart(2, '0');
    const minute = Math.floor(time % HOUR / MIN).toString().padStart(2, '0');
    const second = Math.floor(time % MIN / SEC).toString().padStart(2, '0');
    app.innerHTML = `${day}d : ${hour}h : ${minute}m : ${second}s`
    if (time < 0) {
        birthday = new Date(`Aug 18, ${new Date().getFullYear() + 1} 00:00:00`).getTime();
    }
}, 1000);