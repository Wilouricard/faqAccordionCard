console.log("Yo");

const dropOne = document.getElementById("drop-one");
const questionOne = document.querySelector("#question-one");
const answerOne = document.querySelector("#answer-one");
const dropTwo = document.getElementById("drop-two");
const questionTwo = document.querySelector("#question-two");
const answerTwo = document.querySelector("#answer-two");
const dropThree = document.getElementById("drop-three");
const questionThree = document.querySelector("#question-three");
const answerThree = document.querySelector("#answer-three");
const dropFour = document.getElementById("drop-four");
const questionFour = document.querySelector("#question-four");
const answerFour = document.querySelector("#answer-four");
const dropFive = document.getElementById("drop-five");
const questionFive = document.querySelector("#question-five");
const answerFive = document.querySelector("#answer-five");

dropOne.addEventListener("click", () => {
  questionOne.classList.add("font-bold");
  answerOne.classList.remove("hidden");
  dropOne.classList.add("rotate-90");
  questionTwo.classList.remove("font-bold");
  answerTwo.classList.add("hidden");
  dropTwo.classList.remove("rotate-90");
  questionThree.classList.remove("font-bold");
  answerThree.classList.add("hidden");
  dropThree.classList.remove("rotate-90");
  questionFour.classList.remove("font-bold");
  answerFour.classList.add("hidden");
  dropFour.classList.remove("rotate-90");
  questionFive.classList.remove("font-bold");
  answerFive.classList.add("hidden");
  dropFive.classList.remove("rotate-90");
});

dropTwo.addEventListener("click", () => {
  questionTwo.classList.add("font-bold");
  answerTwo.classList.remove("hidden");
  dropTwo.classList.add("rotate-90");
  questionOne.classList.remove("font-bold");
  answerOne.classList.add("hidden");
  dropOne.classList.remove("rotate-90");
  questionThree.classList.remove("font-bold");
  answerThree.classList.add("hidden");
  dropThree.classList.remove("rotate-90");
  questionFour.classList.remove("font-bold");
  answerFour.classList.add("hidden");
  dropFour.classList.remove("rotate-90");
  questionFive.classList.remove("font-bold");
  answerFive.classList.add("hidden");
  dropFive.classList.remove("rotate-90");
});

dropThree.addEventListener("click", () => {
  questionThree.classList.add("font-bold");
  answerThree.classList.remove("hidden");
  dropThree.classList.add("rotate-90");
  questionOne.classList.remove("font-bold");
  answerOne.classList.add("hidden");
  dropOne.classList.remove("rotate-90");
  questionTwo.classList.remove("font-bold");
  answerTwo.classList.add("hidden");
  dropTwo.classList.remove("rotate-90");
  questionFour.classList.remove("font-bold");
  answerFour.classList.add("hidden");
  dropFour.classList.remove("rotate-90");
  questionFive.classList.remove("font-bold");
  answerFive.classList.add("hidden");
  dropFive.classList.remove("rotate-90");
});

dropFour.addEventListener("click", () => {
  questionFour.classList.add("font-bold");
  answerFour.classList.remove("hidden");
  dropFour.classList.add("rotate-90");
  questionFive.classList.remove("font-bold");
  answerFive.classList.add("hidden");
  dropFive.classList.remove("rotate-90");
  questionOne.classList.remove("font-bold");
  answerOne.classList.add("hidden");
  dropOne.classList.remove("rotate-90");
  questionTwo.classList.remove("font-bold");
  answerTwo.classList.add("hidden");
  dropTwo.classList.remove("rotate-90");
  questionThree.classList.remove("font-bold");
  answerThree.classList.add("hidden");
  dropThree.classList.remove("rotate-90");
});

dropFive.addEventListener("click", () => {
  questionFive.classList.add("font-bold");
  answerFive.classList.remove("hidden");
  dropFive.classList.add("rotate-90");
  questionFour.classList.remove("font-bold");
  answerFour.classList.add("hidden");
  dropFour.classList.remove("rotate-90");
  questionOne.classList.remove("font-bold");
  answerOne.classList.add("hidden");
  dropOne.classList.remove("rotate-90");
  questionTwo.classList.remove("font-bold");
  answerTwo.classList.add("hidden");
  dropTwo.classList.remove("rotate-90");
  questionThree.classList.remove("font-bold");
  answerThree.classList.add("hidden");
  dropThree.classList.remove("rotate-90");
});
