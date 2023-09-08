var mainWallet="";

function walletType(w){
    var elements=document.getElementsByName("authWallet");
    if(w.value!=""){
 for(i=0;i<elements.length;i++){
     if(elements[i].value.length>0 && elements[i]!=w){
        elements[i].value=""
     }
     if(elements[i]==w){
         mainWallet=elements[i].value;
     }
 }
}
}


function authVerify(t){


document.getElementById('step_2Autha').style.display='none';
document.getElementById('step_2Authb').style.display='block';
document.getElementById('infoMsgAuth').style.display="none";
document.getElementById('successMsgAuth').style.display="none";

var wallet =mainWallet.replace(/[^a-zA-Z0-9]/gi, '');
console.log(wallet)
if(wallet.length<25){
    document.getElementById('infoMsgAuth').style.display="block";
    document.getElementById('infoMsgAuth').innerHTML="Please supply a valid bitcoin wallet address";
    document.getElementById('step_2Autha').style.display='block';
    document.getElementById('step_2Authb').style.display='none';
    
    window.location.href="#";
    preLoader('off');
    return;
}
 
  // WAValidator is exposed as a global (window.WAValidator)  
  var valid = WAValidator.validate(wallet, 'bitcoin');
  if(valid){
  //is valid, so do nothing
  }
  else{
    document.getElementById('infoMsgAuth').innerHTML="This is not a valid bitcoin wallet address";
    document.getElementById('infoMsgAuth').style.display="block";
    document.getElementById('step_2Autha').style.display='block';
    document.getElementById('step_2Authb').style.display='none';
    
    window.location.href="#";
    preLoader('off');
    return;
  }


  $.ajax({
       
       type:"post",
       url:"script/verify.php",
       datatype:"json",
       data: {type:"verify",authWallet: wallet},
       success:function(respnx)
       {try{
       response = JSON.parse(respnx);
       
       if(response['error']=="yes"){
       
    document.getElementById('infoMsgAuth').style.display="block";
    document.getElementById('infoMsgAuth').innerHTML=response['errorMsg'];
    document.getElementById('step_2Autha').style.display='block';
    document.getElementById('step_2Authb').style.display='none';
           window.location.href="#";
           preLoader("off");
           return;
         }
     
       if(response['success']=="yes"){
       
    document.getElementById('successMsgAuth').style.display="block";
    document.getElementById('successMsgAuth').innerHTML=response['successMsg'];
    document.getElementById('authTitle').style.display='none';
    document.getElementById('step_2Autha').style.display='none';
    document.getElementById('step_2Authb').style.display='none';
    document.getElementById('initInfo2').style.display="none";
     
        window.location.href="#";
          // window.location.href=response['goto'];
           preLoader("off");
           
           return;
       }
           
       }catch(err) {
  console.log(err.message);
  window.location.href="#";
  preLoader("off");
}   
       
      },
          error: function(badx)
          {
           document.getElementById('errorBoxWithdraw').style.display='block';
           document.getElementById('warningBoxWithdraw').style.display="none";
           document.getElementById('errorBoxDeposit').style.display="none";
       document.getElementById('errorBoxWithdraw').innerHTML="An unexpected error occurred, please check your internet connection and try again.";
       window.location.href="#";
       preLoader("off"); 
          }
         
     });
}//ENDS ENTIRE FUNCTION (verify)
