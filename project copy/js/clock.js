const time = document.getElementById('clock');
function getClock(){
    const now = new Date();
    const hour = String(now.getHours()).padStart(2,'0');
    const minute = String(now.getMinutes()).padStart(2,'0');
    const second = String(now.getSeconds()).padStart(2,'0');
    time.innerHTML=`${hour}:${minute}:${second}`;
}
setInterval(getClock, 1000);
