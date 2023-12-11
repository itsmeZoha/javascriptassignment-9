// let userName = prompt("Please Enter your name to visit our website? ") 
// window.onload = function(){
//    let message ="Good Day"
// //    let firstName = prompt("Please Enter Your First Name?")
// //    let lastName = prompt("Please Enter Your Last Name?")
// //    let fullName = firstName +" "+ lastName
//    let banger ="!"
//    document.getElementById("userName").innerHTML = message + " " + userName+ banger
// }
//---------------------if else Statement---------------------//
function fillCity(){
   var cityName;
   var zipEntered = document.getElementById("zip").value;
   switch(zipEntered){
         case "38000":
         cityName = "Faisalabad";
         break;
         case "40000":
         cityName = "Lahore";
         break;
         case "50000":
         cityName = "Karachi";
         break;
         default:
            cityName = "";

   }
   document.getElementById('city').value = cityName
}
