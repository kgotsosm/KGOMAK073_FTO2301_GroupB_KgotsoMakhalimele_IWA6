const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

let primaryValid = primaryPhone;
let secondaryValid = secondaryPhone;

/* if(isNaN(primaryValid) {
    primaryValid = false;{
 } else {
    primaryValid = true;
}
if(isNaN(secondaryValid) {
    secondaryValid = false;{
 } else {
    secondaryValid = true;
}*/

isNaN(primaryValid) ? primaryValid = false : primaryValid = true;
isNaN(secondaryValid) ? secondaryValid = false : secondaryValid = true;

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )
