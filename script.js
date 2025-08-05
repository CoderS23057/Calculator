function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;

    addToHistory(expression, result);
  } catch (error) {
    alert("Invalid expression");
  }
}

function addToHistory(expression, result) {
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = `${expression} = ${result}`;
  historyList.prepend(li);

  // Save to localStorage
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.unshift(`${expression} = ${result}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}

window.onload = function () {
  const savedHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
  const historyList = document.getElementById("historyList");

  savedHistory.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
  });
};
function clearHistory() {
  localStorage.removeItem("calcHistory");
  document.getElementById("historyList").innerHTML = "";
}

