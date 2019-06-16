let dateMonaco = new Date(2019, 4, 26, 16, 0)
const dateMonacoHTML = document.getElementById('dateMonaco');
dateMonacoHTML.innerHTML = "26 мая 2019"
timePrint("Monacoleft", dateMonaco)

let dateCanada = new Date(2019, 5, 9, 15, 15)
const dateCanadaHTML = document.getElementById('dateCanada');
dateCanadaHTML.innerHTML = "9 июня 2019"
timePrint("Canadaleft", dateCanada)

let dateFrance = new Date(2019, 5, 23, 15, 0)
const dateFranceHTML = document.getElementById('dateFrance');
dateFranceHTML.innerHTML = "23 июня 2019"
timePrint("Franceleft", dateFrance)

let dateAustria = new Date(2019, 5, 30, 16, 0)
const dateAustriaHTML = document.getElementById('dateAustria');
dateAustriaHTML.innerHTML = "30 июня 2019"
timePrint("Austrialeft", dateAustria)

let dateToday = new Date();
let day = dateToday.getDate();
let mounth = dateToday.getMonth() + 1;
let year = dateToday.getFullYear();
day=checkTime(day)
mounth=checkTime(mounth)
const dateTodayHTML = document.getElementById('dateToday');
dateTodayHTML.innerHTML +=" " + day + '.' + mounth + '.' + year

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

function timeLeft(timeRace) {
    let dateToday = new Date();
    if (dateToday > timeRace) {

        return "Гонка прошла \n" + Math.floor((dateToday.getTime() - timeRace.getTime()) / (1000 * 3600 * 24))+" дней назад"

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

function timePrint(raceleft, timeRace) {
    return setInterval(function() {
        document.getElementById(raceleft).textContent = timeLeft(timeRace);
    }, 500);
}


const button = document.getElementById('input_button_bg_change');
const option = document.getElementsByTagName('select')[0];
const body = document.getElementsByTagName('body')[0];
button.onclick = function() {
    body.style.backgroundColor = option.value  //выбор фона
};


function changeColors(element, colorRule, initialHue, timeout) {
    setInterval(() => element.style[colorRule]=`hsl(${++initialHue%360},100%,50%)`, timeout)
}

let calendar = document.getElementById('calendar');
let button2 = document.getElementById('epilepsia');
changeColors(calendar, "color", 0, 20)     //смена цвета надписи
button2.onclick = function() {
    changeColors(body, "backgroundColor", 180, 70)
};         //смена фона



/*




способ смены цвета, второй способ
let colors = { r:255, g:0, b:0 };
function changeColors() {
    const c = colors;
    if (     c.r == 255 && c.g != 255 && c.b == 0)   c.g += 15;
    else if (c.r != 0   && c.g == 255 && c.b == 0)   c.r -= 15;
    else if (c.r == 0   && c.g == 255 && c.b != 255) c.b += 15;
    else if (c.r == 0   && c.g != 0   && c.b == 255) c.g -= 15;
    else if (c.r != 255 && c.g == 0   && c.b == 255) c.r += 15;
    else if (c.r == 255 && c.g == 0   && c.b != 0)   c.b -= 15;

    return p.style.color = `rgb(${c.r}, ${c.g}, ${c.b})`;
}
  */
