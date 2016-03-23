import Placeholder from './Placeholder.js';

let placeholder = new Placeholder('placeholder', 'entryjs');

console.log(placeholder.date);

document.getElementById('date').innerHTML = placeholder.date;
