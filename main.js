function addToDisplay(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    clearInput("display");
}
function clearAll() {
    clearDisplay();
    clearInput("displayResult");
}
function clearInput(id) {
    document.getElementById(id).value = "";
}