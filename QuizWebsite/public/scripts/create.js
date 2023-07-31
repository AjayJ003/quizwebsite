const displayBox = document.getElementById("display-box");
const inputsBox = document.getElementById("input");
const inputForm = document.getElementById("quiz_form");
const inputNumberOfQuestions = document.querySelectorAll(".number-of-questions");
const submitButton = document.querySelector("button");

async function postJSON(data) {
    try {
      var response = await fetch("/buffer", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      
    } catch (error) {
      console.error("Error:", error);
    }
}

console.log(numberOfQuestions);
console.log(inputNumberOfQuestions[0]);

inputNumberOfQuestions.forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        numberOfQuestions = e.target.innerText;
        submitButton.click();
    });
});
  
const data = "hello";
