
function validate()  {  		
	var inputEmail=document.myform.email.value;//picking the email field value 
	var name=document.myform.firstName.value;  
	var phone=document.myform.contact.value;
	var firstname=document.myform.firstName.value;
	var lastname=document.myform.lastName.value;
	var password=document.myform.password.value;
	var password2=document.myform.password2.value;

	var regexEmailPattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10}).([a-z]{2,10}?)$/;
	var regexPhonePattern=/^([0-9]{10,11})$/;
	var checkEmail=regexEmailPattern.test(inputEmail); 
	var checkPhone=regexPhonePattern.test(phone);

	if(firstname===""){
		document.getElementById('firstName').innerHTML =" ** Please fill the firstName field";
		document.getElementById('firstName').style.color="red";
	}
	if(lastname===""){
		document.getElementById('lastName').innerHTML =" ** Please fill the lastName field";
		document.getElementById('lastName').style.color="red";
	}
	if(inputEmail===""){
		document.getElementById('Email').innerHTML =" ** Please fill the inputEmail field";
		document.getElementById('Email').style.color="red";
	}
	if(phone===""){
		document.getElementById('Contact').innerHTML =" ** Please fill the phone field";
		document.getElementById('Contact').style.color="red";
	}
	if(password===""){
		document.getElementById('Password').innerHTML =" ** Please fill the password field";
		document.getElementById('Password').style.color="red";
	}
	if(password2===""){
		document.getElementById('Password2').innerHTML =" ** Please fill the password2 field";
		document.getElementById('Password2').style.color="red";
		return false;
	}
	if(checkPhone){  
  		if(checkEmail){ 
			alert("Thanks "+name+".You will be contacted soon."); 
			return true;
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
document.getElementById("colorpick").addEventListener("click", myFunction);

function myFunction() {
  document.body.style.backgroundColor=document.getElementById("colorpick").value;
}

// var colorpick=document.getElementById('colorpick');
// alert(colorpick.value);
// function changeColor(color){
// 	document.body.style.backgroundColor=color;
// }
// document.body.style.backgroundColor=document.getElementById("colorpick").value;
// 	document.getElementById("colorpick").addEventListener('click',function(){
// 		document.body.style.backgroundColor=document.getElementById("colorpick").value;
// 	});

function reloadPage(){
	window.location.reload();
}
