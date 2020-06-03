var i=0;
var introtxt = "Hello, World! My name is Rachel McCardell. I am a computer science student at Northwestern University in Evanston, IL.";
var speed = 50;

function typeWriter() {
    if (i < introtxt.length) {
        document.getElementById("intro-statement").innerHTML += introtxt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function showTextRunning() {
    document.getElementById("me-info").innerHTML = "I am a student athlete on Northwestern's D1 Women's Cross Country and Track teams. Running has always been a strong passion of mine.";
}

function showTextEducation() {
    document.getElementById("me-info").innerHTML = " I am pursuing a BS in Computer Science at Northwestern University.";
}

function showTextMusic() {
    document.getElementById("me-info").innerHTML = "In my free time, I perform with my collegiate a cappella group, Extreme Measures, in gigs and shows around the Chicago area. Check us out on Spotify or Apple Music!";
}

function showTextHouse() {
    document.getElementById("me-info").innerHTML = "Detroit is where I call home. I was born and raised in SE Michigan.";
}

function showTextCoffee() {
    document.getElementById("me-info").innerHTML = "I am a severe coffee addict!";
}


document.onload = typeWriter();