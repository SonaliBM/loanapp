<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
*{
    box-sizing: border-box;
 }
   
    .body{
               background-color:grey;
}
  .container{
    background-color: rgb(250, 243, 243);
    border-radius:5px;
    box-shadow: 0 2px 5px rgba(103, 11, 11, 0.3);
    width:400px;
    max-width:100%;
  }
  .header{
    background:#232734;
    border-bottom: 1px solid #f0f0f0;
    padding: 20px 40px;
    border-radius: 4px 4px 0px 0px;
  }
  .header h1{
    margin:0;
    color: silver;
    font-family: roboto;
    
  }
  .form{
    padding: 80px 50px;
  }
  .form-control{
    margin-bottom: 1px;
    padding-bottom:20px;
    position: relative;
  }
  .form-control label{
    display: inline-block;
    margin-bottom:5px; 
    font-size: large;
  }


  .form-control input{
    border: 3px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    width:100%;
    font-size:14px;
    padding: 5px;
  }
  .form-control.success input{
    border-color: #2ecc71;
  }
  
  .form-control.error input{
    border-color: #e74c3c;
  }
  .form-control i{
    visibility: hidden;
    position: absolute;
    top: 26px;
    right: 10px;
  }
  .form-control.success i.check-circle{
        visibility: visible;
        content: '\2705';
  }
  .form-control.error i.emark{
    content: "\0021";
    visibility: visible;
}

  .form-control small{
    visibility: hidden;
    position: absolute;
    bottom: 0;
    left:0;

  }  
  .form-control.error small{
    color: #ca665b;
    visibility: visible;
  }
  .form button{
    background:#232734;
    border: 2px solid #f0f0f0;
    color: #fff;
    display: block;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
  }
  .form button:hover{
    background:#FF5858;
  }
  .captcha-input{
    /* border: 2px solid #FF5858; */
    /* padding: 4px; */
    background: #a9a8a8;
    border-radius: 4px;
    padding: 5px 8px 5px 8px;
  }

  .button-c{
    cursor: default;
    width: 250px;

    /* visibility: visible; */
  }

</style>
    <title>loan app</title>

     
</head>

<body style="background-color:grey;">
<center>
    <div class="container">
        <div class='header'>
            <h1><font style="color:pink;">LOAN APLLICATION</font> </h1>
        </div>
        <form class='form' id='form' method="GET" action="Confirm85.html">
            <div class='form-control'>
                <label for="FullName">Full Name</label>
                <input placeholder="please enter your name" id="FullName" autocomplete="off" type="text" required>
          
                </div>

            <div class='form-control'>
                <label for="Email">Email</label>
                <input placeholder="please enter Email" id="Email" autocomplete="off" type="email" required>
               
                
                
            </div>
            <div class='form-control'>
                <label for="PAN">PAN</label>
                <input placeholder="please enter PAN" id="PAN" autocomplete="off" required>
                
               
                
            </div>
            <div class='form-control'>
                <label for="Amount">Loan Amount</label>
                <input placeholder="please enter Loan amount" id="Amount" autocomplete="off" type="number" required>
               <p id ="amount-string"></p>
            </div>

            <div class='form-control'>
                <label for="Captcha" id="captcha-label" ><span class = "captcha-input" id="captcha-input" >0 + 2 = ?</span> </label>
                <a class="button-c" onclick="getRandom()">&#128472 Refresh</a>
                <input placeholder="enter sum of given numbers" id="Captcha" autocomplete="off" type="number" required>
                <i class="check-circle">&#9989</i>
                
               
            </div>
            
            <button id= "button-s">SUBMIT</button>
        </form>
<script src="Index85.js"></script>
    </div>
</center>

</body>

</html>