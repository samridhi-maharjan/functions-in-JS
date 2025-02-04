const flight='12HH'
const Mina={
    namee:'mina shahi',
    passport:22312223
}

const checkBooking= function(flightNum,passenger){
    flightNum='13hh',
    passenger.namee="Ms. " + passenger.namee;
}
checkBooking(flight,Mina);
console.log(flight);
console.log(Mina);

// How Passing Arguments Works: Values vs. Reference
const flightt = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flightt, jonas);
// console.log(flightt);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flightt, jonas);