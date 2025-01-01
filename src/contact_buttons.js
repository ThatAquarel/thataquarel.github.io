function getMontrealTime() {
    const options = {
      timeZone: 'America/Toronto',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };

    const date = new Date();
    const time = new Intl.DateTimeFormat('en-US', options).format(date);

    document.getElementById("time").innerHTML = `<i>⏰</i> ${time}, Montréal, Canada`;
}

getMontrealTime();


document.getElementById("email").addEventListener("click", email);

function email() {

}
