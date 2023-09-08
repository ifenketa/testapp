// function deposit(){
//     preLoader('on');
//     var selc=document.getElementById('depositSelect');
//     var selcFolio=selc.value.replace(/[^0-9.]/gi, ''); //portfolio id form
//     var btcAmt=document.getElementById('btcAmountDeposit').value.replace(/[^0-9.]/gi, ''); //btc amount from form
//     if(!selcFolio || btcAmt<0.0005){
//         document.getElementById('errorBoxDeposit').style.display="block";
//         let msg=btcAmt<0.0005?'The minimum deposit amount is 0.0005 BTC':'Please enter your desired deposit amount';
//         document.getElementById('errorBoxDeposit').innerHTML=msg;
//         preLoader('off');
//         return;
//     }
// //btcAmt=parseFloat(btcAmt.toFixed(8));
//    //MAKE AJAX CALL
//   $.ajax({
       
//        type:"post",
//        url:"script/deposit.php",
//        datatype:"json",
//        data: {btcAmt: btcAmt, folioId:selcFolio, type: 'deposit'},
//        success:function(respnx)
//        {try{
//        response = JSON.parse(respnx);
       
//        if(response['error']=="yes"){
//            document.getElementById('errorBoxDeposit').style.display="block";
//            document.getElementById('errorBoxWithdraw').style.display="none";
//            document.getElementById('warningBoxWithdraw').style.display="none";
          
//            document.getElementById('errorBoxDeposit').innerHTML=response['errorMsg'];
//            preLoader("off");
//            return;
//          }
   
//        if(response['success']=="yes"){
//            console.log(response['msg']);
//            window.location.href=response['goto'];
//            //preLoader("off");
//            return;
//        }
            
//        }catch(err) {
//   console.log(err.message);
//   preLoader("off");
// }   
       
//       },
//           error: function(badx)
//           {
//            document.getElementById('errorBoxDeposit').style.display='block';
//            document.getElementById('errorBoxWithdraw').style.display="none";
//            document.getElementById('warningBoxWithdraw').style.display="none";
          
//        document.getElementById('errorBoxDeposit').innerHTML="An unexpected error occurred, please check your internet connection and try again.";
//        preLoader("off"); 
//           }
         
//      });



// }//ENDS ENTIRE FUNCTION 