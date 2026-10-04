const checkInForm = document.getElementById("checkInForm");
const attendeeNameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greeting = document.getElementById("greeting");
const attendeeCountDisplay = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const attendanceGoal = 50;

let attendeeCount = 0;
let waterCount = 0;
let zeroCount = 0;
let powerCount = 0;

checkInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const attendeeName = attendeeNameInput.value.trim();
  const selectedTeam = teamSelect.value;
  let teamName = "";

  if (attendeeName === "" || selectedTeam === "") {
    return;
  }

  if (selectedTeam === "water") {
    waterCount += 1;
    teamName = "Team Water Wise";
    document.getElementById("waterCount").textContent = waterCount;
  } else if (selectedTeam === "zero") {
    zeroCount += 1;
    teamName = "Team Net Zero";
    document.getElementById("zeroCount").textContent = zeroCount;
  } else if (selectedTeam === "power") {
    powerCount += 1;
    teamName = "Team Renewables";
    document.getElementById("powerCount").textContent = powerCount;
  }

  attendeeCount += 1;
  attendeeCountDisplay.textContent = attendeeCount;
  greeting.textContent = `Welcome, ${attendeeName}! You're checked in with ${teamName}.`;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  const progress = Math.min((attendeeCount / attendanceGoal) * 100, 100);
  progressBar.style.width = `${progress}%`;

  checkInForm.reset();
  attendeeNameInput.focus();
});
