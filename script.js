function displayTime(){
    // setting the time period
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let timePeriod = "AM";
    
    //updating the time period
    if (hour >= 12) {
        timePeriod = "PM"
    }

    //ensuring a 12-hour format
    if(hour > 12){
        hour = hour - 12
    }
    
    //preventing single digits
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    
    // adding the elements to the DOM by targeting the div's Id
    document.querySelector(".hours").innerText = hour
    document.querySelector(".minutes").innerText = minute
    document.querySelector(".seconds").innerText = second
    document.querySelector(".TimePeriod"). innerText = timePeriod
    
    
    // Light and dark mode
    const toggle = document.getElementById("switchMode");
    const body = document.querySelector("body");
    const colonOne = document.getElementById("dotOne");
    const colonTwo = document.getElementById("dotTwo");
    const colonThree = document.getElementById("dotThree");
    const speech = document.querySelector(".btn");
    const blueButton = document.getElementById("blue");
    const redButton = document.getElementById("red");
    const dateBtn = document.getElementById("date");
    const inputBtn = document.getElementById("input")

// Event listener for the toggle switch
toggle.addEventListener("click", function() {
  // Toggle the moon and sun icons
    this.classList.toggle("bi-moon");
    this.classList.toggle("bi-brightness-high-fill");

  // Check if the switch is sun or moon
if (this.classList.contains("bi-brightness-high-fill")) {
    // Set the light mode styles
    body.style.background = "url('light.jpg')";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover"
    toggle.style.color = "black";
    dateBtn.style.background = "#1e3e49";
    dateBtn.style.color = "whitesmoke";
    colonOne.style.color = "black";
    colonTwo.style.color = "black";
    colonThree.style.color = "black";
    speech.style.color = "black";
    inputBtn.style.background = "#def2f1"
    blueButton.style.background = "#1e3e49";
    redButton.style.background = "#1e3e49";
} else {
    // Set the dark mode styles
    body.style.backgroundImage = "url('Dark.jpg')";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover"
    toggle.style.color = "white";
    dateBtn.style.background = "#7c7c59";
    dateBtn.style.color = "whitesmoke";
    colonOne.style.color = "white";
    colonTwo.style.color = "white";
    colonThree.style.color = "white";
    speech.style.color = "white";
    inputBtn.style.background = "#c2c4c6"
    blueButton.style.background = "#7c7c59";
    redButton.style.background = "#7c7c59";
}
  // Add a transition effect
    body.style.transition = "1s";
});

    
}

// Date setting
const now = new Date();
const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });
const month = now.toLocaleDateString("en-US", { month: "long" });
const dayOfMonth = now.getDate();
const year = now.getFullYear();

// Update the elements in the HTML document
document.querySelector("#dayname").innerText = dayOfWeek;
document.querySelector("#month").innerText = month;
document.querySelector("#dayNum").innerText = dayOfMonth;
document.querySelector("#year").innerText = year;


//Alarm features
    const audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
    audio.loop = true;
    let alarmSet = null;
    let alarmClear = null;
    
    function setAlarmTime(value) {
        alarmTime = value;
    }
    
    function setAlarm() {
        if(alarmTime) {
            const current = new Date();
            const timeToAlarm = new Date(alarmTime);
    
            if (timeToAlarm > current) {
                const timeout = timeToAlarm.getTime() - current.getTime();
                alarmTimeout = setTimeout(() => audio.play(), timeout);
                alert("Alarm set");
            }
        }
    }
    
    function clearAlarm() {
        audio.pause();
        if (alarmTimeout) {
            clearTimeout(alarmTimeout);
            alert("Alarm Cleared");
        }
    }

    //Adding speech
    speech.addEventListener('click', () => {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        displayTime(); // Call the displayTime function to get the current time
        if(hour > 12){
            hour = hour - 12
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        } else {
            const time = `today's date is ${dayOfWeek}:${month}:${dayOfMonth} ${year} and the time is ${hour} ${minute}`;
            const utterance = new SpeechSynthesisUtterance(time);
            speechSynthesis.speak(utterance);
        }
    });

setInterval(displayTime, 1000)