const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

inputs.forEach((input, key)=>{
    if (key !== 0) {
        input.addEventListener("click", function(){
            inputs[0].focus();
        });
    }

    input.addEventListener('keyup', function () {
        if (input.value) {
          if (key === 4) {
            userCode = [...inputs].map((input) => input.value).join('');
          } else {
            inputs[key + 1].focus();
          }
        }
      });
});

function validate(){
    const pincode = 53874;
    //alert(userCode);
    if (userCode == pincode) {
      //alert("pincode is correct");
      event.preventDefault();
      window.location = "solution.html";
      
    } else {
      event.preventDefault();
      window.location = "incorrect.html";
      //alert("pincode wrong");
    }
}
