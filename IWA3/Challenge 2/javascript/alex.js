const firstname = "Alex";
const surname = "Smith";
export const role = "Head of Marketing";

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display;