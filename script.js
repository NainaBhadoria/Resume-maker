window.onload  = function(){
var resumeForm =  document.getElementById("Resumeform");
resumeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("form submitted");
    var name = event.target.querySelector("#fname").value;
    var phone = event.target.querySelector("#phone").value;
    var email= event.target.querySelector("#email").value;
    var address = event.target.querySelector("#Address").value;
    var objective = event.target.querySelector("#objective").value;
    var education = event.target.querySelector("#Education").value;
    var ex = event.target.querySelector("#JExperience").value;
    console.log();

     });

}