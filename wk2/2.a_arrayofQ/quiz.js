const greekMyth = [
    { question: "Who is the Greek Goddess of the moon?", answer: "Selene" },
    { question: "Mars, Jupiter, Venus and Mercury were Gods of which ancient civilization?", answer: "The Roman civilization" },
    { question: "Hypnos was the Greek God of _______", answer: "Sleep" },
    { question: "What season was Persephone the Greek Goddess of?", answer: "Spring" },
    { question: "Who is the Greek Goddess of Dawn?", answer: "Eos" },
];
console.log (greekMyth);
// console.log (Math.floor(Math.random() * greekMyth.length));
const randomIndex = Math.floor(Math.random() * greekMyth.length);
console.log(greekMyth[randomIndex].question);
const response = window.prompt("Answer this question about Greek Mythology: " + greekMyth[randomIndex].question);
const answer = window.alert("You answered " + response + " The correct answer is " + greekMyth[randomIndex].answer);
if(response === greekMyth[randomIndex].answer) {
    console.log("Yes! Nice job.")
} else {
    console.log("Noooo, that's wrong :(, it is " + greekMyth[randomIndex].answer);
}