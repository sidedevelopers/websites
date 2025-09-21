function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12; // 0 should be 12

      // Pad with 0 if single digit
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
      document.getElementById('clock').textContent = timeString;
    }

    updateClock();
    setInterval(updateClock, 1000);