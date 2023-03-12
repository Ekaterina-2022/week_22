import dayjs from "dayjs";

const c = dayjs();
const dateCont = document.querySelector("today-date");

//console.log(c.format());
const todayDate = c.startOf("month").format("DD - MMM - YYYY");
console.log(todayDate);

dateCont.textContent = todayDate;
module.exports = todayDate;
