var globalVariable = 1;
var bool;
var city;
var todelete;
var userId=[];
function validate() {
	
	if(globalVariable===1){
		document.getElementById('usercreate').innerText='Please create new users';
	}
	var inputEmail = document.myform.email.value;//picking the email field value   
	var phone = document.myform.contact.value;
	var firstname = document.myform.firstName.value;
	var lastname = document.myform.lastName.value;
	var password = document.myform.password.value;
	var allValue = true;
	var regexEmailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10}).([a-z]{2,10}?)$/;
	var regexPhonePattern = /^([0-9]{10,11})$/;
	var checkEmail = regexEmailPattern.test(inputEmail);
	var checkPhone = regexPhonePattern.test(phone);

	if (firstname === "") {
		// alert("hi js tested");
		document.getElementById('firstName').innerHTML = "  Please fill the firstName field";
		document.getElementById('firstName').style.color = "red";
		allValue = false;
	}
	if (lastname === "") {
		document.getElementById('lastName').innerHTML = "  Please fill the lastName field";
		document.getElementById('lastName').style.color = "red";
		allValue = false;
	}
	if (inputEmail === "") {
		document.getElementById('Email').innerHTML = "  Please fill the inputEmail field";
		document.getElementById('Email').style.color = "red";
		allValue = false;
	}
	if (phone === "") {
		document.getElementById('Contact').innerHTML = "  Please fill the phone field";
		document.getElementById('Contact').style.color = "red";
		allValue = false;
	}
	if (password === "") {
		document.getElementById('Password').innerHTML = "  Please fill the password field";
		document.getElementById('Password').style.color = "red";
		allValue = false;
	}
	if (allValue === false) {
		return false;
	}
	if (checkPhone && allValue) {
		if (checkEmail) {
			document.getElementById("Password").innerText = "";
			document.getElementById("Email").innerText = "";
			document.getElementById("lastName").innerText = "";
			document.getElementById("firstName").innerText = "";
			document.getElementById("Contact").innerText = "";
			createTable(firstname, lastname, inputEmail, phone);
			resetForm();
			return false;
		}
	}
	if (checkEmail === false && checkPhone === false) {
		document.getElementById('Contact').innerHTML = "  Entered Contact no is wrong ";
		document.getElementById('Email').innerHTML = "  Entered Email id is wrong ";
		document.getElementById('Contact').style.color = "red";
		document.getElementById('Email').style.color = "red";
		return false;
	} else if (checkEmail === true && checkPhone === false) {
		document.getElementById('Contact').innerHTML = "  Entered contact no is wrong";
		document.getElementById('Contact').style.color = "red";
		return false;
	} else if (checkEmail === false && checkPhone === true) {
		document.getElementById('Email').innerHTML = "  Entered email is incorrect";
		document.getElementById('Email').style.color = "red";
		return false;
	}
}

document.getElementById("colorpick").addEventListener('change', function () {
	document.body.style.backgroundColor = document.getElementById("colorpick").value;
});

function resetForm() {
	document.getElementById('firstname').value = "";
	document.getElementById('lastname').value = "";
	document.getElementById('emailId').value = "";
	document.getElementById('contactno').value = "";
	document.getElementById('pwd').value = "";
	document.getElementById('dropdown').value = "";
	document.getElementById('states').remove();
	document.getElementById('cityname').remove();

	document.getElementById('fnamemessage').innerText = "";
	document.getElementById('lnamemessage').innerText = "";
	document.getElementById('emailmessage').innerText = "";
	document.getElementById('contactmessage').innerText = "";
}

function createTable(firstname, lastname, inputEmail, phone) {

	var mytable = document.getElementById('table');
	if(bool===true && todelete!==undefined){
		var mytable=document.getElementById('table');
		mytable.deleteRow(todelete);
		bool=false;
		todelete=undefined;
	}
	var row = mytable.insertRow(globalVariable++);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	cell1.innerHTML = globalVariable - 1;
	cell2.innerHTML = firstname;
	cell3.innerHTML = lastname;
	cell4.innerHTML = inputEmail;
	cell5.innerHTML = phone;
	cell6.innerHTML = '<button onclick="deleteUser(this);">&#10005</button> <button onclick="editUser(this);">Edit</button>';
	// cell6.setAttribute("onclick", "deleteUser(this);");//setattribute worked here for delete one
	// cell7.innerHTML = '<button>Edit</button>';
	// cell7.setAttribute("onclick", "editUser(this);");
	cell7.innerText = city;
	document.getElementById('submit').value="Submit";
	document.getElementById('usercreate').innerText='';
}

function deleteUser(element) {
	var val = confirm("Are you sure you want to delete the user ?");
	if (val === true) {
		// alert('deleting the user'+element.parentNode.rowIndex);
		document.getElementById("table").deleteRow(element.parentNode.parentNode.rowIndex);
		globalVariable--;
		if(globalVariable===1){
			document.getElementById('usercreate').innerText='Please create new users';
		}
	}
	else {
		alert('User not deleted');
	}
}

function editUser(user) {

	if(document.myform.firstName.value!=='' && document.myform.lastName.value!==''){
		var clear=confirm('Your entered will be cleared. Do you want to continue');
		if(clear===false){//scenario when form is dirty, so if it doesn't want to override values we simply return
			// document.getElementById('dropdown').value = "";
			// document.getElementById('states').remove();
			// document.getElementById('cityname').remove();
			return ;
		}
		if(clear==true){//if user wants to override and edit the values then there must be dropdowns so we remove it
			//reason to put here  as if the below code is put in the code then there will be a problem for select tag as select
			//tags and options are not yet created for the user and hence it wouldn't work. 
			document.getElementById('dropdown').value = "";
			// document.getElementById('states').value = "";
			// document.getElementById('cityname').value = "";
			document.getElementById('states').remove();
			document.getElementById('cityname').remove();
		}
	}


	var mytable = document.getElementById('table');
	var id = mytable.rows[user.parentNode.parentNode.rowIndex].cells[0].innerText;
	// alert(id);
	// alert(user.parentNode.parentNode.rowIndex);
	globalVariable = id;//retaining the same id of the user and initialized to the first cell
	// alert(globalVariable);
	document.getElementById('submit').value="Edit";
	document.getElementById('firstname').value = mytable.rows[user.parentNode.parentNode.rowIndex].cells[1].innerText;
	document.getElementById('lastname').value = mytable.rows[user.parentNode.parentNode.rowIndex].cells[2].innerText;
	document.getElementById('emailId').value = mytable.rows[user.parentNode.parentNode.rowIndex].cells[3].innerText;
	document.getElementById('contactno').value = mytable.rows[user.parentNode.parentNode.rowIndex].cells[4].innerText;
	document.getElementById('pwd').value = "**********";
	document.getElementById('dropdown').value = "";
	// document.getElementById('states').value = "";
	// document.getElementById('cityname').value = "";

	// document.getElementById('states').remove();
	// document.getElementById('cityname').remove();
	todelete = user.parentNode.parentNode.rowIndex;
	// alert(todelete);
	// document.getElementById('submit').value="Edit";
	bool=true;
	scrollToTop();
}
function scrollToTop() {
	window.scrollTo(0, 0);
}
function editHtmlTbleSelectedRow(rIndex, id) {

	table.deleteRow(rIndex);
}


function validateFirstName(element) {

	if (element.value === "" && element.value.length <= 2) {
		document.getElementById('firstname').style.backgroundColor = "red";
		document.getElementById('fnamemessage').innerText = "Not a valid first name";
	} else {
		document.getElementById('fnamemessage').innerText = "Valid name";
		document.getElementById('firstname').style.backgroundColor = "skyblue";
	}
}

function validateLastName(element) {
	if (element.value === "" && element.value.length <= 2) {
		document.getElementById('lastname').style.backgroundColor = "red";
		document.getElementById('lnamemessage').innerText = "Not a valid last name";
	} else {
		// document.getElementById('firstname').style.backgroundColor="green";
		document.getElementById('lnamemessage').innerText = "Valid lastname";
		document.getElementById('lastname').style.backgroundColor = "skyblue";
	}
}

function validateEmail(element) {
	var regexEmailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10}).([a-z]{2,10}?)$/;
	var checkEmail = regexEmailPattern.test(element.value);
	if (!checkEmail) {
		document.getElementById('emailId').style.backgroundColor = "red";
		document.getElementById('emailmessage').innerText = "Not a valid EmailId";
	} else {
		document.getElementById('emailmessage').innerText = "Valid Email";
		document.getElementById('emailId').style.backgroundColor = "skyblue";
	}
}

function validateContact(element) {
	var regexPhonePattern = /^([0-9]{10,11})$/;
	var value = regexPhonePattern.test(element.value);
	if (!value) {
		document.getElementById('contactno').style.backgroundColor = "red";
		document.getElementById('contactmessage').innerText = "Not a valid Phone number";
	} else {
		document.getElementById('contactmessage').innerText = "Valid number";
		document.getElementById('contactno').style.backgroundColor = "skyblue";
	}
}

function validatePassword(element) {
	// document.getElementById('firstname').style.backgroundColor="red";
	// if(element.value==="" && element.value.length<=8 &&element.includes){
	// 	document.getElementById('fnamemessage').innerText="Not a valid password";
	// }else{
	// 	// document.getElementById('firstname').style.backgroundColor="green";
	// 	document.getElementById('fnamemessage').innerText="Valid name";
	// 	document.getElementById('firstname').style.backgroundColor="skyblue";
	// }	
}

function dropdownfunction() {
	var country = document.getElementById('dropdown');
	if (country.value === 'India') {
		var array = ["Maharashtra", "Delhi"];
	} else if (country.value === 'Australia') {
		var array = ["South Australia", "Victoria"];
	} else if (country.value === 'Canada') {
		var array = ["Alberta", "Columbia"];
	}
	var concatString = "<option value=\"\">Select</option>";
	for (var i = 0; i < array.length; i++) {
		concatString += "<option>" + array[i] + "</option>";
	}
	concatString = "<select required=\"required\" id=\"states\" onchange=\"thirdDropdown(this)\">" + concatString + "</select>";
	document.getElementById('output').innerHTML = concatString;
}

function thirdDropdown(element) {
	if (element.value === 'Maharashtra') {
		var cities = ["pawai", "thane"];
	} else if (element.value === 'Delhi') {
		var cities = ["Noida", "South-Delhi"];
	} else if (element.value === 'South Australia') {
		var cities = ["Dunstan", "Mitchell"];
	} else if (element.value === 'Victoria') {
		var cities = ["Altona", "Euroa"];
	} else if (element.value === 'Alberta') {
		var cities = ["Acadia", "Bighorn"];
	} else if (element.value === 'Columbia') {
		var cities = ["Washington"];
	}
	var concatString = "<option value=\"\">Select</option>";
	for (var i = 0; i < cities.length; i++) {
		concatString += "<option>" + cities[i] + "</option>";
	}
	concatString = "<select required=\"required\" id=\"cityname\" onchange=\"cityvalue(this)\">" + concatString + "</select>";
	document.getElementById('output2').innerHTML = concatString;
}
function cityvalue(element) {
	// alert(element.value);
	city = element.value;
}
function loadDefaultUserData(){

	const xhr=new XMLHttpRequest();

	xhr.open('GET','users.json',true);

	xhr.onload=function(){
		if(this.status===200){
			// console.log(this.responseText);
			const userDetails=JSON.parse(this.responseText);
			var randomUserIndex=Math.floor(Math.random()*3);
			document.getElementById('firstname').value =userDetails[randomUserIndex].FirstName;
			document.getElementById('lastname').value = userDetails[randomUserIndex].LastName;
			document.getElementById('emailId').value = userDetails[randomUserIndex].Email;
			document.getElementById('contactno').value =userDetails[randomUserIndex].ContactNo;
			document.getElementById('pwd').value = userDetails[randomUserIndex].Pwd;
			//can't keep dropdown values explitcitly as on selection of one other generates so can't be kept
			//as first only is not there 
		}
	}
	xhr.send();
}



function reloadPage() {
	window.location.reload();
}

