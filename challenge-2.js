const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = '00';
const minuteOfDay = '00';

// Only change below this line

if (parseInt(hourOfDay) !== undefined && parseInt(minuteOfDay) !== undefined && parseInt(hourOfDay) === 0 && parseInt(minuteOfDay) === 0) {
    const taxAsDecimal = parseInt(tax) / 100;
    const startingAfterTax = salary * (1 - taxAsDecimal);
    const balance = startingAfterTax - transport - food - rent;
    console.log('R' + balance.toFixed(2));
}


