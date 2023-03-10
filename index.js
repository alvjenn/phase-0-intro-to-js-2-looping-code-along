const names = ["Guadalupe", "Ollie", "Aki"];
const messages = [];
function writeCards(name, eventNames) {
    for (let i = 0; i < name.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`;
        messages.push(message); }
        return messages;
}
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}