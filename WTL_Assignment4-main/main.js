
   	
   	function myfunction() {
   	    let input_value = document.getElementById("display");
   	    try{
   	        const new_str = eval(input_value.value);
   	        input_value.value = new_str;
   	        }
   	        
   	    catch{
   	        alert("Enter valid value");
   	        input_value.value = "";
   	        }
   	        
   	        }
