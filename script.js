//your JS code here. If required.

function updateTimer() {
   
    const now = new Date();

  
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

  
    const formattedDate = now.toLocaleDateString('en-US', options);

    document.getElementById('timer').textContent = formattedDate;
}


setInterval(updateTimer, 1000);


updateTimer();
