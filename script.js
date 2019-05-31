let dateMonaco = new Date(2019, 4, 26, 16, 0)
const dateMonacoHTML = document.getElementById('dateMonaco');
dateMonacoHTML.innerHTML = "26 May 2019"
setInterval(function() {
  document.getElementById("Monaco left").textContent = timeLeft(dateMonaco);
}, 500);

let dateCanada = new Date(2019, 5, 9, 15, 15)
const dateCanadaHTML = document.getElementById('dateCanada');
dateCanadaHTML.innerHTML = "9 June 2019"
setInterval(function() {
  document.getElementById("Canada left").textContent = timeLeft(dateCanada);
}, 500);

let dateFrance = new Date(2019, 6, 23, 15, 0)
const dateFranceHTML = document.getElementById('dateFrance');
dateFranceHTML.innerHTML = "23 Jule 2019"
setInterval(function() {
  document.getElementById("France left").textContent = timeLeft(dateFrance);
}, 500);


let dateToday = new Date();
let day = dateToday.getDate();
let month = dateToday.getMonth() + 1;
let year = dateToday.getFullYear();
const dateTodayHTML = document.getElementById('dateToday');
dateTodayHTML.innerHTML += day + '.' + month + '.' + year


function timeLeft(timeRace) {
  let dateToday = new Date();
  if (dateToday > timeRace) {
    return "Гонка уже прошла"
  } else {
    let daysLag = Math.floor((timeRace.getTime() - dateToday.getTime()) / (1000 * 3600 * 24));
    let hoursLag = Math.floor((timeRace.getTime() - dateToday.getTime()) / (1000 * 3600) - daysLag * 24);
    let minitesLag = Math.floor((timeRace.getTime() - dateToday.getTime()) / (1000 * 60) - daysLag * 24 * 60 - hoursLag * 60);
    let secondsLag = Math.floor((timeRace.getTime() - dateToday.getTime()) / (1000) - daysLag * 24 * 60 * 60 - hoursLag * 60 * 60 - minitesLag * 60);
    hoursLag = checkTime(hoursLag);
    minitesLag = checkTime(minitesLag);
    secondsLag = checkTime(secondsLag);
    return daysLag + ":" + hoursLag + ":" + minitesLag + ":" + secondsLag;
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i;
}
