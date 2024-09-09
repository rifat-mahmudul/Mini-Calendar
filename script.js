const date = new Date();
const calendar = document.getElementById('calendar');
const dateAndDay = document.getElementById('dateAndDay');
const monthAndYear = document.getElementById('monthAndYear');
const weekDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMOnthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

dateAndDay.innerHTML = `
    <h1>${date.getDate()}</h1>
    <h2>${weekDays[date.getDay()]}</h2>
`;

monthAndYear.innerHTML = `
<h2>${allMOnthes[date.getMonth()]}</h2>
<h2>${date.getFullYear()}</h2>
`