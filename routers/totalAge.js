/**
 *
 * @param {*} year
 * @param {*} month
 * @param {*} date
 * @param {*} name
 * @param {*} res
 */
const totalAgeRoute = (year, month, date, name, res) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const todayDate = today.getDate();
  let age = currentYear - year;
  if (month < currentMonth + 1) {
    age--;
    console.log(`${name} age is ${age}`);
  } else if ((month = currentMonth + 1)) {
    if (todayDate >= date) {
      console.log(`${name} age is ${age}`);
    } else {
      age--;
      console.log(`${name} age is ${age}`);
    }
  } else {
    console.log(`${name} age is ${age}`);
  }

  res.write(`<P>Hello ${name}</P>`);
  res.write(`<p>you are currently ${age} years old</p>`);
  res.end();
};

module.exports.totalAgeRoute = totalAgeRoute;
