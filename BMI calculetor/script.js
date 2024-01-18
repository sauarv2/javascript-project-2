
let form =  document.querySelector('form');


form.addEventListener('submit',function(e){
    e.preventDefault();

//    This event listener prevents the default form submission behavior, allowing you to handle the form data using JavaScript.

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

// Use parseFloat instead of parseInt if you want to handle decimal values for height and weight.
    const results = document.querySelector('#results');

  const cmHeight = height*0.01
  let bmi;
  let review;

if(cmHeight===" " || cmHeight< 0 ||  isNaN(cmHeight) ) {
    results.innerHTML= `please give a valid height  ${cmHeight}`
}
//Instead of checking for an empty string (" "), consider checking for isNaN directly. The isNaN() function determines whether a value is NaN, first converting the value to a number if necessary. 

else if(weight===" " || weight< 0 ||  isNaN(weight) ) {
    results.innerHTML = `please give a valid weight  ${weight}`
}
else{
    bmi = (weight/(cmHeight*cmHeight)).toFixed(2)
    //This calculates BMI and rounds it to two decimal places. Ensure that the formula aligns with your BMI calculation requirements.
}
if(bmi<=18.6){
    review= "Under Weight"
    results.innerHTML= `<span>${bmi}</span> ${review}`
}
else if(bmi>=18.6 &&  bmi<=24.9){
    review= "NORMAL"
    results.innerHTML= `<span>${bmi}</span> ${review}`
}
else if(bmi>=24.9) {
    review= "Over Weight"
    results.innerHTML= `<span>${bmi}</span> ${review}`
}

});
