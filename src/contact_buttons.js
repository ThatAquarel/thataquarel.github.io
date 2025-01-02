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


const engineering_button = document.getElementById('engineering');
const engineering_section = document.getElementById('engineering-section');

engineering_button.addEventListener('click', function() {
  window.scrollTo({
    top: engineering_section.offsetTop,
    behavior: 'smooth' 
  });
});



const photography_button = document.getElementById('photography');
const photography_section = document.getElementById('photography-section');

photography_button.addEventListener('click', function() {
  window.scrollTo({
    top: photography_section.offsetTop,
    behavior: 'smooth' 
  });
});



const comedy_button = document.getElementById('comedy');
const comedy_section = document.getElementById('comedy-section');

comedy_button.addEventListener('click', function() {
  window.scrollTo({
    top: comedy_section.offsetTop,
    behavior: 'smooth' 
  });
});
