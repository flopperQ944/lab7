const addInput = document.createElement("input");
addInput.id = "add-input";
addInput.placeholder = "write your question.";

const addsButton = document.createElement("button");
addsButton.id = "add-answer";
addsButton.textContent = "add answer";
const sphereContainer = document.createElement("div");
sphereContainer.className = "sphere-container";
const sphere = document.createElement("div");
sphere.className = "sphere";
addsButton.onclick = function () {
    const question = addInput.value.trim();
    if (question) {
        const randomResult = result[Math.floor(Math.random() * result.length)];
        sphere.textContent = randomResult;
    } else {
        alert("write your question");
    }
};
document.body.appendChild(addInput);
document.body.appendChild(addsButton);
sphereContainer.appendChild(sphere);
document.body.appendChild(sphereContainer);
    const result = [
        "Yes",
        "Ask tomorrow",
        "think for yourself",
        "it seems so",
        "Nope",
        "unlikely",
        "i doubt",
        "try again",
        "big yes",
        "absolutely no",
    ];