// Weight variables
let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");

// Height variables
let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");

// Display slider value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

// Update slider in real time while dragging it
weightSlider.oninput = function(){
    weightOutput.innerHTML = this.value;
};

heightSlider.oninput = function(){
    heightOutput.innerHTML = this.value;
};

// Change weight-slider value on weight-number input
function showValWeight(newVal){
    weightSlider.value = newVal;
}

// Change height-slider valie on height-number input
function showValHeight(newVal){
    heightSlider.value(newVal);
}

weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);

function updateValueWeight(e){
    weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e){
    heightOutput.value = e.srcElement.value;
}

// Calculate BMI
function calculateBmi(){
let weight = document.bmiForm.realweight.value;
let height = (document.bmiForm.realheight.value) / 100;
let realbmi = (weight) / Math.pow(height, 2);
let realbmiOutput = document.getElementById("yourbmi");
let messageOutput = document.getElementById("evaluationMessage");
let roundedBmi = realbmi.toFixed(1);

messageOutput.innerHTML = " " // Clear message before calculating new BMI
realbmiOutput.innerHTML = " " // Print BMI

realbmiOutput.innerHTML = roundedBmi;

// Apropiate message for your BMI rating
if(roundedBmi < 18){
    messageOutput.innerHTML = "Underweight (Low body weight)";
}else if (roundedBmi >= 18 && roundedBmi < 29){
    messageOutput.innerHTML = "Normal weight (Healthy range)"
}else if (roundedBmi >= 29 && roundedBmi < 38){
    messageOutput.innerHTML = "Overweight"
}else{
    messageOutput.innerHTML = "Obesity"
}
}