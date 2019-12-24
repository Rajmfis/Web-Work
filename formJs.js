var globalVariable=1;
var bool=false;
var city;
function validate()  {  
	//remove previously required** elements
	var inputEmail=document.myform.email.value;//picking the email field value   
	var phone=document.myform.contact.value;
	var firstname=document.myform.firstName.value;
	var lastname=document.myform.lastName.value;
	var password=document.myform.password.value;
	var allValue=true;
	var regexEmailPattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10}).([a-z]{2,10}?)$/;
	var regexPhonePattern=/^([0-9]{10,11})$/;
	var checkEmail=regexEmailPattern.test(inputEmail); 
	var checkPhone=regexPhonePattern.test(phone);

	if(firstname===""){
		// alert("hi js tested");
		document.getElementById('firstName').innerHTML ="  Please fill the firstName field";
		document.getElementById('firstName').style.color="red";
		allValue=false;
		
	}
	if(lastname===""){
		document.getElementById('lastName').innerHTML ="  Please fill the lastName field";
		document.getElementById('lastName').style.color="red";
		allValue=false;
		
	}
	if(inputEmail===""){
		document.getElementById('Email').innerHTML ="  Please fill the inputEmail field";
		document.getElementById('Email').style.color="red";
		allValue=false;
		
	}
	if(phone===""){
		document.getElementById('Contact').innerHTML ="  Please fill the phone field";
		document.getElementById('Contact').style.color="red";
		allValue=false;
		
	}
	if(password===""){
		document.getElementById('Password').innerHTML ="  Please fill the password field";
		document.getElementById('Password').style.color="red";
		allValue=false;
		
	}
	if(allValue===false){
		return false;
	}
	if(checkPhone&&allValue){  
  		if(checkEmail){ 
			document.getElementById("Password").innerText="";
			document.getElementById("Email").innerText="";
			document.getElementById("lastName").innerText="";
			document.getElementById("firstName").innerText="";
			document.getElementById("Contact").innerText="";
			createTable(firstname,lastname,inputEmail,phone);
			resetForm();  			
  			return false;		
 		}
 	}
  	if(checkEmail===false && checkPhone===false){
  		document.getElementById('Contact').innerHTML ="  Entered Contact no is wrong ";
  		document.getElementById('Email').innerHTML ="  Entered Email id is wrong ";
		document.getElementById('Contact').style.color="red";
		document.getElementById('Email').style.color="red";
  		return false;
  	}else if(checkEmail===true && checkPhone===false){
  		document.getElementById('Contact').innerHTML ="  Entered contact no is wrong";
		document.getElementById('Contact').style.color="red";
  		return false;
  	}else if(checkEmail===false && checkPhone===true){
  		document.getElementById('Email').innerHTML ="  Entered email is incorrect";
		document.getElementById('Email').style.color="red";
  		return false;
  	}
}
    
document.getElementById("colorpick").addEventListener('change',function(){
 	document.body.style.backgroundColor=document.getElementById("colorpick").value;
});


function resetForm(){
	document.getElementById('firstname').value = "";
  	document.getElementById('lastname').value = "";
  	document.getElementById('emailId').value = "";
  	document.getElementById('contactno').value = "";
  	document.getElementById('pwd').value = "";	

  	document.getElementById('fnamemessage').innerText="";
  	document.getElementById('lnamemessage').innerText="";
  	document.getElementById('emailmessage').innerText="";
  	document.getElementById('contactmessage').innerText="";
  	
}

function createTable(firstname,lastname,inputEmail,phone){
	var mytable = document.getElementById('table');
	// idSet.push(globalVariable+1);
	var row = mytable.insertRow(globalVariable++);
  	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	var cell3 = row.insertCell(2);
  	var cell4 = row.insertCell(3);
  	var cell5 = row.insertCell(4);
  	var cell6 = row.insertCell(5);
  	var cell7 = row.insertCell(6);
  	var cell8 = row.insertCell(7);
	cell1.innerHTML = globalVariable-1;
  	cell2.innerHTML = firstname;
  	cell3.innerHTML=lastname;
  	cell4.innerHTML=inputEmail;
  	cell5.innerHTML=phone;
  	cell6.innerHTML='<button>&#10005</button>';
  	cell6.setAttribute("onclick","deleteUser(this);");//setattribute worked here for delete one
  	cell7.innerHTML='<button>Edit</button>';
  	cell7.setAttribute("onclick","editUser(this);");
  	// cell8.innerHTML=city;
  	// document.getElementById('cityname').innerHTML="Select";
}

function editUser(user){
	var mytable = document.getElementById('table');
	var id=mytable.rows[user.parentNode.rowIndex].cells[0].innerText;
	globalVariable=id;//retaining the same id of the user and initialized to the first cell
	document.getElementById('firstname').value=mytable.rows[user.parentNode.rowIndex].cells[1].innerText;
	document.getElementById('lastname').value=mytable.rows[user.parentNode.rowIndex].cells[2].innerText;
	document.getElementById('emailId').value=mytable.rows[user.parentNode.rowIndex].cells[3].innerText;
	document.getElementById('contactno').value=mytable.rows[user.parentNode.rowIndex].cells[4].innerText;
	document.getElementById('pwd').value="**********";
	scrollToTop();
	editHtmlTbleSelectedRow(user.parentNode.rowIndex,id);
}
function scrollToTop() { 
    window.scrollTo(0, 0); 
} 
function editHtmlTbleSelectedRow(rIndex,id) {	
    	removeSelectedRow(rIndex);
}

function removeSelectedRow(rIndex) {
    table.deleteRow(rIndex);
}

function deleteUser(element){
  	document.getElementById("table").deleteRow(element.parentNode.rowIndex);
}

// function valueCity(element){
// 	city=element.value;
// 	document.getElementById('cityname').innerHTML=city;
// }

function validateFirstName(element){
	
	if(element.value==="" && element.value.length<=2){
		document.getElementById('firstname').style.backgroundColor="red";
		document.getElementById('fnamemessage').innerText="Not a valid first name";
	}else{
		document.getElementById('fnamemessage').innerText="Valid name";
		document.getElementById('firstname').style.backgroundColor="skyblue";
	}
}

function validateLastName(element){
	if(element.value==="" && element.value.length<=2){
		document.getElementById('lastname').style.backgroundColor="red";
		document.getElementById('lnamemessage').innerText="Not a valid last name";
	}else{
		// document.getElementById('firstname').style.backgroundColor="green";
		document.getElementById('lnamemessage').innerText="Valid lastname";
		document.getElementById('lastname').style.backgroundColor="skyblue";
	}
}

function validateEmail(element){
	var regexEmailPattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10}).([a-z]{2,10}?)$/;
	var checkEmail=regexEmailPattern.test(element.value); 
	if(!checkEmail){
		document.getElementById('emailId').style.backgroundColor="red";
		document.getElementById('emailmessage').innerText="Not a valid EmailId";
	}else{
		document.getElementById('emailmessage').innerText="Valid Email";
		document.getElementById('emailId').style.backgroundColor="skyblue";
	}
}

function validateContact(element){
	var regexPhonePattern=/^([0-9]{10,11})$/;
	var value=regexPhonePattern.test(element.value);
	if(!value){
		document.getElementById('contactno').style.backgroundColor="red";
		document.getElementById('contactmessage').innerText="Not a valid Phone number";
	}else{
		document.getElementById('contactmessage').innerText="Valid number";
		document.getElementById('contactno').style.backgroundColor="skyblue";
	}
}

function validatePassword(element){
	// document.getElementById('firstname').style.backgroundColor="red";
	// if(element.value==="" && element.value.length<=8 &&element.includes){
	// 	document.getElementById('fnamemessage').innerText="Not a valid password";
	// }else{
	// 	// document.getElementById('firstname').style.backgroundColor="green";
	// 	document.getElementById('fnamemessage').innerText="Valid name";
	// 	document.getElementById('firstname').style.backgroundColor="skyblue";
	// }	
}

function reloadPage(){
	window.location.reload();
}

