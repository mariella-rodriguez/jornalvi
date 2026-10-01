const verifyButton = document.getElementById("verify-button");
const message = document.getElementById("message");

verifyButton.addEventListener("click", function () {

    const enteredName = document.getElementById("name").value.trim();
    const enteredDate = document.getElementById("anniversary").value;

    const correctName = "Jornalvi Ramirez";
    const correctDate = "2025-07-26";

    if (
        enteredName.toLowerCase() === correctName.toLowerCase() &&
        enteredDate === correctDate
    ) {

        verifyButton.disabled = true;

        message.textContent = "Verifying identity...";

        setTimeout(function () {
            message.textContent = "Searching relationship database...";
        }, 1000);

        setTimeout(function () {
            message.textContent = "Confirming anniversary records...";
        }, 2000);

        setTimeout(function () {
            message.textContent = "Checking girlfriend authorization... ❤️";
        }, 3000);

        setTimeout(function () {
    message.innerHTML =
        "✅ <strong>IDENTITY VERIFIED</strong><br>Boyfriend status: AUTHORIZED ❤️";
        }, 4000);

        setTimeout(function () {

            document.getElementById("verification-screen").style.display = "none";

            document.getElementById("welcome-screen").style.display = "block";

        }, 5500);
    } else {

        message.textContent =
            "❌ ACCESS DENIED. Boyfriend credentials not recognized. 🤨";

    }

});
const openGiftButton = document.getElementById("open-gift-button");

openGiftButton.addEventListener("click", function () {

    document.getElementById("welcome-screen").style.display = "none";

    document.getElementById("gift-screen").style.display = "block";

    document.body.style.backgroundColor = "#fff8f5";

    window.scrollTo(0, 0);

});
const envelopes = document.querySelectorAll(".envelope");
const noteDisplay = document.getElementById("note-display");

envelopes.forEach(function (envelope) {

    envelope.addEventListener("click", function () {

        const loveMessage = envelope.getAttribute("data-message");

        noteDisplay.textContent = loveMessage;

        envelope.querySelector("span").textContent = "❤️";
        envelope.querySelector("small").textContent = "OPENED";

    });

});
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const answerMessage = document.getElementById("answer-message");
const answerButtons = document.getElementById("answer-buttons");


function moveNoButton() {

    const maxX = answerButtons.clientWidth - noButton.offsetWidth;
    const maxY = answerButtons.clientHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}


noButton.addEventListener("mouseenter", moveNoButton);

noButton.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton();

});


yesButton.addEventListener("click", function () {

    answerMessage.innerHTML =
        "✅ <strong>CORRECT.</strong><br>" +
        "Boyfriend privileges have been extended. ❤️";

    noButton.style.display = "none";

});
const openLetterButton = document.getElementById("open-letter-button");
const letterEnvelope = document.getElementById("letter-envelope");
const actualLetter = document.getElementById("actual-letter");

openLetterButton.addEventListener("click", function () {

    letterEnvelope.style.display = "none";

    actualLetter.style.display = "block";

    actualLetter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

const surpriseButton = document.getElementById("surprise-button");
const dateSurprise = document.getElementById("date-surprise");
const loveLetterSection = document.querySelector(".love-letter-section");

surpriseButton.addEventListener("click", function () {

    loveLetterSection.style.display = "none";

    dateSurprise.style.display = "block";

    window.scrollTo(0, dateSurprise.offsetTop);

});

const attendingButton = document.getElementById("attending-button");
const attendanceMessage = document.getElementById("attendance-message");

attendingButton.addEventListener("click", function () {

    attendingButton.textContent = "✓ ATTENDANCE CONFIRMED ♡";

    attendingButton.disabled = true;

    attendanceMessage.textContent =
        "Good choice. You didn't really have one anyway. ❤️";

});