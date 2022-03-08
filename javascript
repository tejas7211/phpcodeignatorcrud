<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration form</title>
</head>
<body>
    <b><h2><center>Registration form</center></h2></b>
    <center><form name="myform" method="post" action="file:///Users/tagline/Desktop/javascript/login.html"> 
        <!-- onsubmit="return regform()" -->
       
        <!-- Name -->
        <input type="text" placeholder="Name" name="fname" id="name" required><br>
        
        <!-- Number -->
        <input type="text" placeholder="phone number" name="fnumber" id="number" required><br>
    
        <input type="submit">
        
    </form>
   </center>
    

<script>
    function regform() {

        let name = document.myform["fname"].value;
        if (name == null && name ==" " && name.length<5){
            alert("name must be filled out");
            return false;
        }

        let number = document.myform["fnumber"].value;
        // var mob = /^[7-9]\d{9}$/;
        if(number.length>10 && number ==" "){
            alert("Password must be at least 10 characters long");
            return false;
        }


        let gender = document.myform["fgender"].value;
        let bdate = document.myform["fbdate"].value;
        let hobby = document.myform["fhobby"].value;
        let uname = document.myform["funame"].value;

        let email = document.myform["femail"].value;
        if(email.length>15 && email ==" "){
            alert("you must enter a valid email address");
            return false;
        }

        let pass = document.myform["fpass"].value;
        if(pass.length < 8){
            alert("Password must be at least 8 characters long");
            return false;
        }

        // let pass2 = document.myform["pass2"].value;
        
        
        
        
        
         
        //  if (pass1 != pass2) {
        //     alert("Passwords do not match.");
        //     return false;
        // }
        // return true;
    }
</script>
</body>
</html>
