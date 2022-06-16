const departureTime = `2020-10-10T12:30+01:00`;

/**
 * Modify this function to return proper arrival for Larry
 */
function calculateArrival(departure) {
  const instance = new Date(departure)
  
  instance.setHours(instance.getHours() + 20)
  instance.setMinutes(instance.getMinutes() + 40)
  return instance.toLocaleString("pl-PL", {timeZone: "Australia/Sydney"})
}

const arrivalTime = calculateArrival(departureTime);

console.assert(arrivalTime === '11.10.2020, 19:10:00', 'Wrong arrival time: ', arrivalTime);
