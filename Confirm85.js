const form = document.getElementById('form')
const fullname = localStorage.getItem('fullName')
const email = localStorage.getItem('email')
const otp = localStorage.getItem('otp')
//
console.log(otp)
let count = 0;


const otpinput = document.getElementById('OTP')
const firstName =  fullname.split(' ')
let ver = 0;

//adding event
form.addEventListener('submit', (e)=>{
    
    if(ver===otp){
        alert('Application Submited')
        e.preventDefault();
   })


otpinput.addEventListener('input',validate)
function validate(e){
    console.log(count)
    // console.log(e.target.value )
    }
 

//
function OTP(){
    let a = Math.floor(Math.random()*10000)
    localStorage.setItem('otp',a)} 


            `;