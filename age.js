let magicDate = prompt("Please give a valid date in the format DDMMYYYY:");

let year = Number(magicDate.substr(4, 4));
let month = Number(magicDate.substr(2, 2)) - 1;
let day = Number(magicDate.substr(0, 2));
let today = new Date();
let age = today.getFullYear() - year;
if (
  today.getMonth() < month ||
  (today.getMonth() == month && today.getDate() < day)
) {
  age--;
}
alert(age);
