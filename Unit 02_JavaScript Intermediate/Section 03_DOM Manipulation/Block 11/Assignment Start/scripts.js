const counterElement = document.getElementById("counter");
let count = +counterElement.innerText;
const increment = () => {
    count++;
    counterElement.innerText = count.toString();
};

const incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click", increment);

// TODO: You do for decrement.  