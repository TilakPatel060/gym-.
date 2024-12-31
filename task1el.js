
// function func (){
//     var Email = document.getElementById("Email").value;
//     var Password=document.getElementById("Password_user").value;
    
// if(Email && Password ){
    
//     window.location.href= 'task11.html';
//     alert('successful');
    
// }
// else{
//     alert("invalid");
// }` 
// }
const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
     e.preventDefault()

     const username= form.username.value
     const password= form.password.value
      
     const authenticated = authentication(username,password)
     if(authenticated){
           window.location.href="task11.html"
     } else{
        alert("wrong")
     }
})
  function authentication (username,password){
     if (username==="admin" && password==="password"){
        return true
     }else{
        return false
     }
  }
  
