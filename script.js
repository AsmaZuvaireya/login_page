function name_check()
{	

	var str = "anu";
	     x = document.getElementById("usr_name").value;

	if (str==x ){
		 
		 document.getElementById("nam").innerHTML = "valid name";
         document.getElementById("nam").style.color = "green";
         return true;
	}
	else
	{
		
		document.getElementById("nam").innerHTML = "invalid name";
         document.getElementById("nam").style.color = "red";
         return false;
	}
}

function password_check()
{
	var str = "123";
	x = document.getElementById("pwd").value;

	if (str==x ){
		 
		 document.getElementById("pswd").innerHTML = "valid password";
         document.getElementById("pswd").style.color = "green";
         return true;
	}
	else
	{
		
		document.getElementById("pswd").innerHTML = "invalid password";
        document.getElementById("pswd").style.color = "red";
        return false;
	}
}


function newDoc() {
	if(name_check()==true && password_check()==true)
	
    window.location.assign("file:///E:/NFNLabs/javascript/form_validation/index.html");

}

	
