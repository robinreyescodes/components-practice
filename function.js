const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = prompt(
      `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n`
    );
    if (answer > 3) console.log("try again");
    else this.answers[answer]++;

    return this.displayResults("string");
  },
  displayResults(type) {
    if (type == "string") console.log(`Poll results are ${this.answers}`);
    else console.log(this.answers);
  },
};

//binding of functions
const register = poll.registerNewAnswer;
const regFun = register.bind(poll);

//
const pollButton = document.querySelector(".poll");
// pollButton.addEventListener("click", regFun);
pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
