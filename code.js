function validateForm() {
  let x = document.getElementById("fName").value;
  let y = document.getElementById("lName").value;
  
  if (x == "") {
    alert("Enter a first Name");
    return;
  }

  if (y == "") {
    alert("Enter a last Name");
    return;
  }

  var results = x + " " + y;
   
  document.getElementById("yourOutputDiv").innerHTML = results;

  
} 