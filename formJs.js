var globalVariable=1;

function validate()  {  
	//remove previously required** elements
	// document.getElementById("Contact").remove();
	// document.getElementById("Password").remove();
	// document.getElementById("Email").remove();
	// document.getElementById("lastName").remove();
	// document.getElementById("firstName").remove();

	var inputEmail=document.myform.email.value;//picking the email field value   
	var phone=document.myform.contact.value;
	var firstname=document.myform.firstName.value;
	var lastname=document.myform.lastName.value;
	var password=document.myform.password.value;
	// var regionvalue=document.getElementById('region').value;
	var allValue=true;
	var regexEmailPattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10}).([a-z]{2,10}?)$/;
	var regexPhonePattern=/^([0-9]{10,11})$/;
	var checkEmail=regexEmailPattern.test(inputEmail); 
	var checkPhone=regexPhonePattern.test(phone);

	if(firstname===""){
		// alert("hi js tested");
		document.getElementById('firstName').innerHTML =" ** Please fill the firstName field";
		document.getElementById('firstName').style.color="red";
		allValue=false;
	}
	if(lastname===""){
		document.getElementById('lastName').innerHTML =" ** Please fill the lastName field";
		document.getElementById('lastName').style.color="red";
		allValue=false;
	}
	if(inputEmail===""){
		document.getElementById('Email').innerHTML =" ** Please fill the inputEmail field";
		document.getElementById('Email').style.color="red";
		allValue=false;
	}
	if(phone===""){
		document.getElementById('Contact').innerHTML =" ** Please fill the phone field";
		document.getElementById('Contact').style.color="red";
		allValue=false;
	}
	if(password===""){
		document.getElementById('Password').innerHTML =" ** Please fill the password field";
		document.getElementById('Password').style.color="red";
		allValue=false;
	}
	// if(regionvalue==='India'){

	// }else if(regionvalue==='Pakistan'){

	// }else{

	// }
	if(checkPhone&&allValue){  
  		if(checkEmail){ 
  			var mytable = document.getElementById('table');
			var row = table.insertRow(globalVariable++);
  			var cell1 = row.insertCell(0);
  			var cell2 = row.insertCell(1);
  			var cell3 = row.insertCell(2);
  			var cell4 = row.insertCell(3);
  			cell1.innerHTML = firstname;
  			cell2.innerHTML = lastname;
  			cell3.innerHTML=inputEmail;
  			cell4.innerHTML=phone;
  			// document.getElementById("myForm").reset();
  			return false;
  					// alert(table.rows.length);			  					
     				//rIndex = this.rowIndex;
    	   			// table.rows[1].cells[0].innerHTML = firstname;
    	   			// alert(document.getElementById("lname"));
    	   			// myTable.rows[1].cells[0].value = firstname;
        			// document.getElementById("lname").value = lastname;
        			// document.getElementById("mailid").value = inputEmail;
        			// document.getElementById("phoneno").value = phone;    		
					// alert("Thanks "+firstname+".You will be contacted soon."); 
  					// alert("Thanks "+firstname+".You will be contacted soon.");
 		}
 	}
  	if(checkEmail===false && checkPhone===false){
  		document.getElementById('Contact').innerHTML =" ** Entered Contact no is wrong ";
  		document.getElementById('Email').innerHTML =" ** Entered Email id is wrong ";
		document.getElementById('Contact').style.color="red";
		document.getElementById('Email').style.color="red";
  		return false;
  	}else if(checkEmail===true && checkPhone===false){
  		document.getElementById('Contact').innerHTML =" ** Entered contact no is wrong";
		document.getElementById('Contact').style.color="red";
  		return false;
  	}else if(checkEmail===false && checkPhone===true){
  		document.getElementById('Email').innerHTML =" ** Entered email is incorrect";
		document.getElementById('Email').style.color="red";
  		return false;
  	}
}
    

// var colorpick=document.getElementById("colorpick");
// colorpick.addEventListener('onclick',function(){
// 	document.body.style.backgroundColor=colorpick.value;
// });
// document.getElementById("colorpick").addEventListener("click", myFunction);

// function myFunction() {
//   document.body.style.backgroundColor=document.getElementById("colorpick").value;
// }

// var colorpick=document.getElementById('colorpick');
// alert(colorpick.value);
// function changeColor(color){
// 	document.body.style.backgroundColor=color;
// }
// document.body.style.backgroundColor=document.getElementById("colorpick").value;
document.getElementById("colorpick").addEventListener('change',function(){
 		document.body.style.backgroundColor=document.getElementById("colorpick").value;
 	});

function reloadPage(){
	window.location.reload();
}
