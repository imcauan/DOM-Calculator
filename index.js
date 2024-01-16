const resultInput = document.getElementById("resultInput"); 
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

const addKeys = (charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    resultInput.value += value;
  });
};
document.querySelectorAll(".charKey").forEach(addKeys);

const remove = (ev) => {
  ev.preventDefault();
  resultInput.value = "";
};
clear.addEventListener("click", remove);

const calculate = () => {
  const result = eval(resultInput.value);
  resultInput.value = result;
};

equal.addEventListener("click", calculate);
