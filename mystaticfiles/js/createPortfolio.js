function createPortfolio(){
    preLoader('on');
    var tenure=document.getElementById('tenure').value;
    var savePro=document.getElementById('savePro').value;
    var tenureAmount=document.getElementById('linkTenureAmountBtc').value.replace(/[^0-9.]/gi, '');
    var minWithdraw=document.getElementById('minWithdrawBtc').value.replace(/[^0-9.]/gi, '');
    if(!tenure || !tenureAmount){
        document.getElementById('errorBox').style.display="block";
        let msg='Please enter your desired investment amount (Initial Contract)';
        document.getElementById('errorBox').innerHTML=msg;
        window.location.href="#";
        preLoader('off');
        return;
    }
//btcAmt=parseFloat(btcAmt.toFixed(8));
   //MAKE AJAX CALL
  $.ajax({
       
       type:"post",
       url:"script/createPortfolio.php",
       datatype:"json",
       data: {tenureAmount: tenureAmount, tenure:tenure, savePro: savePro, minWithdraw: minWithdraw},
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
        document.getElementById('form').style.display="none";
        document.getElementById('success').style.display="block";
        document.getElementById('folioName').innerHTML=response['folioName'];

       var folioId=response['folioId'];
        document.getElementById('depButton').innerHTML='<button onclick="navigate(\'cashier?action=deposit&pid='+folioId+'\');" type="submit" class="btn btn-success pl-5 pr-5 waves-effect"><i class="fa fa-arrow-down"></i> Deposit</button>';
        console.log(response['msg']);
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
           document.getElementById('errorBoxDeposit').style.display='block';
           document.getElementById('errorBoxWithdraw').style.display="none";
           document.getElementById('warningBoxWithdraw').style.display="none";
          
       document.getElementById('errorBoxDeposit').innerHTML="An unexpected error occurred, please check your internet connection and try again.";
       preLoader("off"); 
          }
         
     });



}//ENDS ENTIRE FUNCTION 