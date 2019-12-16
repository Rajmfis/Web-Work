
function validate()  {  
		
	var inputEmail=document.myform.email.value;//picking the email field value 
	var name=document.myform.name.value;  
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
		var para = document.createElement("P");
  		para.innerHTML = "Please enter firstname";
  		para.style.color="red";
  		document.getElementById("first-name").appendChild(para);
	}
	if(lastname===""){
		var para = document.createElement("P");
  		para.innerHTML = "Please enter lastname";
  		para.style.color="red";
  		document.getElementById("last-name").appendChild(para);
	}
	if(inputEmail===""){
		var para = document.createElement("P");
  		para.innerHTML = "Please enter email";
  		para.style.color="red";
  		document.getElementById("email").appendChild(para);
	}
	if(phone===""){
		var para = document.createElement("P");
  		para.innerHTML = "Please enter phone";
  		para.style.color="red";
  		document.getElementById("contact").appendChild(para);
	}
	if(password===""){
		var para = document.createElement("P");
  		para.innerHTML = "Please enter password";
  		para.style.color="red";
  		document.getElementById("password").appendChild(para);
	}
	if(password2===""){
		var para = document.createElement("P");
  		para.innerHTML = "Please enter confirm password";
  		para.style.color="red";
  		document.getElementById("password2").appendChild(para);
  		return false;
	}
	if(checkPhone){  
  		if(checkEmail){ 
			alert("Thanks "+name+".You will be contacted soon."); 
			return true;
  		 }
 	}
  	if(checkEmail===false && checkPhone===false){
 		alert("You have entered wrong email id and phone number");
  		return false;
  	}else if(checkEmail===true && checkPhone===false){
  		alert("You have entered wrong phone number");
  		return false;
  	}else if(checkEmail===false && checkPhone===true){
  		alert("You have entered wrong email id");
  		return false;
  	}
}

document.querySelector("#colorpick").addEventListener("click",function(){
	document.body.style.backgroundColor=document.getElementById("colorpick").value;
});
// document.body.style.backgroundColor=document.getElementById("colorpick").value;
// 	document.getElementById("colorpick").addEventListener('click',function(){
// 		document.body.style.backgroundColor=document.getElementById("colorpick").value;
// 	});


function reloadPage(){
	window.location.reload();
}
