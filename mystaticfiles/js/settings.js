function settings(){
    preLoader('on');
var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
var password=document.getElementById('password').value;

var password2=document.getElementById('password2').value;
//btcAmt=parseFloat(btcAmt.toFixed(8));
   //MAKE AJAX CALL
  $.ajax({
       
       type:"post",
       url:"script/settings.php",
       datatype:"json",
       data: {name: name, email:email, password: password, password2: password2, type:'settings'},
       success:function(respnx)
       {try{
       response = JSON.parse(respnx);
       
       if(response['error']=="yes"){
           document.getElementById('errorBox').style.display="block";
           document.getElementById('errorBox').innerHTML=response['errorMsg'];
           window.location.href="#";
           preLoader("off");
           return;
         }
   
       if(response['success']=="yes"){
        document.getElementById('errorBox').style.display="none";
        document.getElementById('errorBox').innerHTML="";
        document.getElementById('successBox').style.display="block";
        document.getElementById('successBox').innerHTML=response['successMsg'];

           window.location.href="#";
           preLoader("off");
           return;
       }
            
       }catch(err) {
  console.log(err.message);
  preLoader("off");
}   
       
      },
          error: function(badx)
          {
           document.getElementById('errorBox').style.display='block';
          
       document.getElementById('errorBox').innerHTML="An unexpected error occurred, please check your internet connection and try again.";
       preLoader("off"); 
          }
         
     });



}//ENDS ENTIRE FUNCTION 