 
 
 //alert message on putting value of adult or children greater than 5
function check() {
 var num1 = document.getElementById('adult');
      var num2 = document.getElementById('child');
            if ( num1.value > 5)  {
                alert("The maximum number of Adults can be 5!!");
        }
			else if (num2.value > 5) {
				alert("The maximum number of children can be 5!!");
			}
}