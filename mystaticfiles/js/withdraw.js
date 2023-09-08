// var thisElement = document.getElementById('withdrawScript');
// var secToken=thisElement.getAttribute('data-sectoken'); //

// function withdraw(t){
//     preLoader('on');
// var selc=document.getElementById('withdrawSelect');
// var selcFolio=selc.value.replace(/[^0-9.]/gi, ''); //portfolio id form
// var btcAmt=document.getElementById('btcAmountWithdraw').value.replace(/[^0-9.]/gi, ''); //btc amount from form
// var wallet =document.getElementById('wallet').value.replace(/[^a-zA-Z0-9]/gi, '');

// wallet=t=="bank"?document.getElementById('bankRecipient').value:wallet;
// btcAmt=t=="bank"?document.getElementById('btcAmountWithdraw2').value.replace(/[^0-9.]/gi, ''):btcAmt;

// if((t=="wallet") && wallet.length<25 || !selcFolio || btcAmt<0.00000001){
//     document.getElementById('errorBoxWithdraw').style.display="block";
//     document.getElementById('warningBoxWithdraw').style.display="none";
//     let msg=btcAmt<0.00000001?'Please enter a valid withdrawal amount':'Please double-check that you entered all fields correctly';
//     document.getElementById('errorBoxWithdraw').innerHTML=msg;
//     window.location.href="#";
//     preLoader('off');
//     return;
// }

// if((t=="bank") && wallet.length<11 || !selcFolio || btcAmt<0.00000001){
//   document.getElementById('errorBoxWithdraw').style.display="block";
//   document.getElementById('warningBoxWithdraw').style.display="none";
//   let msg=btcAmt<0.00000001?'Please enter a valid withdrawal amount':'Please double-check that you entered all fields correctly';
//   document.getElementById('errorBoxWithdraw').innerHTML=msg;
//   window.location.href="#";
//   preLoader('off');
//   return;
// }

  
//   // WAValidator is exposed as a global (window.WAValidator)
//   if(t=="wallet"){
//   var valid = WAValidator.validate(wallet, 'bitcoin');
//   if(valid){
//   //is valid, so do nothing
//   }
//   else{
//     document.getElementById('errorBoxWithdraw').style.display="block";
//     document.getElementById('warningBoxWithdraw').style.display="none";
//     let msg="Please enter a valid bitcoin(BTC) wallet address";
//     document.getElementById('errorBoxWithdraw').innerHTML=msg;
//     window.location.href="#";
//     preLoader('off');
//     return;
//   }
// }
// //btcAmt=parseFloat(btcAmt.toFixed(8));
//    //MAKE AJAX CALL
//   $.ajax({
       
//        type:"post",
//        url:"{% url 'withdraw_summary' %}",
//        datatype:"json",
//        data: {btcAmt: btcAmt, folioId:selcFolio, wallet: wallet, type: 'withdraw', t: t},
//        success:function(respnx)
//        {try{
//        response = JSON.parse(respnx);
       
//        if(response['error']=="yes"){
//            document.getElementById('errorBoxWithdraw').style.display="block";
//            document.getElementById('warningBoxWithdraw').style.display="none";
//            document.getElementById('errorBoxDeposit').style.display="none";

//            document.getElementById('errorBoxWithdraw').innerHTML=response['errorMsg'];
//            window.location.href="#";
//            preLoader("off");
//            return;
//          }
//          if(response['warning']=="yes"){
//             document.getElementById('warningBoxWithdraw').style.display="block";
//            document.getElementById('errorBoxWithdraw').style.display="none";
//            document.getElementById('errorBoxDeposit').style.display="none";
//             document.getElementById('warningBoxWithdraw').innerHTML=response['errorMsg'];
//             window.location.href="#";
//             preLoader("off");
//             return;
//           }
   
//        if(response['success']=="yes"){

//         console.log("Works")


//         document.getElementById('warningBoxWithdraw').style.display="none";
//         document.getElementById('errorBoxWithdraw').style.display="none";
//         document.getElementById('withdraw1').style.display="none";
//         document.getElementById('walletWithdraw').style.display="none";
//         document.getElementById('bankWithdraw').style.display="none";
//         document.getElementById('withdraw2').style.display="block";
//         window.location.href="#";
//           // window.location.href=response['goto'];
//            preLoader("off");
           
//            return;
//        }

//        if(response['auth']=="yes"){
//         document.getElementById('warningBoxWithdraw').style.display="none";
//        document.getElementById('errorBoxWithdraw').style.display="none";
//        document.getElementById('errorBoxDeposit').style.display="none";
//        document.getElementById('authModal').style.display="block";
//        console.log(response);
//        for(i=0;i<response['qTrans'].length;i++){
//          let qq=response['qTrans'][i].split(",");
//          let amt=qq[1];
//          let tm=parseInt(qq[0])*1000;
//         let dat=new Date(tm);
//        document.getElementById('tranx').innerHTML+=`<b>DATE:</b> ${dat.toDateString().substring(4)} <b>AMOUNT:</b> ${amt} BTC            
//                     <input type="text" onkeyup="walletType(this);" onchange="walletType(this);"  name="authWallet" placeholder="invoice wallet" class="form-control"><br/>`;
//                   }
//       document.getElementById('altText').innerHTML=`<p><strong>STEPS.</strong></p>
//                     <p>The security algorithm has calculated and capped your list of qualified transactions to any deposits equal or above&nbsp;<strong>${response['holdAmt']} BTC</strong></p>
//                     <p>Only 2 transactions in Portfolio-2 are equal/above this capped amount at the moment.</p>
//                     <p>The capped amount was auto-generated as a mean average percent of all your deposits.</p>
//                     <p>You should simply make a new deposit(<strong>single transaction</strong>) equal or above ${response['holdAmt']} BTC into Portfolio-2.</p>
//                     <p>The new deposit must be equal or above the capped amount of ${response['holdAmt']} BTC for the system to accept it for security authorization.</p>
//                     <p>After successful deposit, the new deposit will be added to the list of qualified deposits.</p>
//                     <p>Simply input the invoice wallet of the new deposit to complete the verification</p>`             
//         window.location.href="#";
//         preLoader("off");
//         return;
//       }
            
//        }catch(err) {
//   console.log(err.message);
//   window.location.href="#";
//   preLoader("off");
// }   
       
//       },
//           error: function(badx)
//           {
//            document.getElementById('errorBoxWithdraw').style.display='block';
//            document.getElementById('warningBoxWithdraw').style.display="none";
//            document.getElementById('errorBoxDeposit').style.display="none";
//        document.getElementById('errorBoxWithdraw').innerHTML="An unexpected error occurred, please check your internet connection and try again.";
//        window.location.href="#";
//        preLoader("off"); 
//           }
         
//      });



// }//ENDS ENTIRE FUNCTION (withdraw)

// function withdraw2(){ //finalizing
//     preLoader('on');
//     const sendType=document.querySelector('input[name="type"]:checked').value; 

//     //MAKE AJAX CALL
//   $.ajax({
       
//        type:"post",
//        url:"script/withdraw.php",
//        datatype:"json",
//        data: {sendType: sendType, secToken: secToken},
//        success:function(respnx)
//        {try{
//        response = JSON.parse(respnx);
       
//        if(response['error']=="yes"){
//            document.getElementById('errorBoxWithdraw').style.display="block";
//            document.getElementById('warningBoxWithdraw').style.display="none";
//            document.getElementById('errorBoxDeposit').style.display="none";

//            document.getElementById('errorBoxWithdraw').innerHTML=response['errorMsg'];
//            window.location.href="#";
//            preLoader("off");
//            return;
//          }
//          if(response['warning']=="yes"){
//             document.getElementById('warningBoxWithdraw').style.display="block";
//            document.getElementById('errorBoxWithdraw').style.display="none";
//            document.getElementById('errorBoxDeposit').style.display="none";
//             document.getElementById('warningBoxWithdraw').innerHTML=response['errorMsg'];
//             window.location.href="#";
//             preLoader("off");
//             return;
//           }
   
//        if(response['success']=="yes"){
//         document.getElementById('warningBoxWithdraw').style.display="none";
//         document.getElementById('errorBoxWithdraw').style.display="none";
//         document.getElementById('withdraw1').style.display="none";
//         document.getElementById('withdraw2').style.display="none";
//         document.getElementById('withdraw3').style.display="block";
//         window.location.href="#";  
//           // window.location.href=response['goto'];
//            preLoader("off");
           
//            return;
//        }
            
//        }catch(err) {
//   console.log(err.message);
//   window.location.href="#";
//   preLoader("off");
// }   
       
//       },
//           error: function(badx)
//           {
//            document.getElementById('errorBoxWithdraw').style.display='block';
//            document.getElementById('warningBoxWithdraw').style.display="none";
//            document.getElementById('errorBoxDeposit').style.display="none";
//        document.getElementById('errorBoxWithdraw').innerHTML="An unexpected error occurred, please check your internet connection and try again.";
//        window.location.href="#";
//        preLoader("off"); 
//           }
         
//      });
// }//ENDS ENTIRE FUNCTION




// function withdraw3(){ //otp code
//     preLoader('on');
//     const code=document.getElementById('code').value; 

//     //MAKE AJAX CALL
//   $.ajax({
       
//        type:"post",
//        url:"script/withdraw.php",
//        datatype:"json",
//        data: {type: 'otp', code: code, secToken: secToken},
//        success:function(respnx)
//        {try{
//        response = JSON.parse(respnx);
       
//        if(response['error']=="yes"){
//            document.getElementById('errorBoxWithdraw').style.display="block";
//            document.getElementById('warningBoxWithdraw').style.display="none";
//            document.getElementById('errorBoxDeposit').style.display="none";

//            document.getElementById('errorBoxWithdraw').innerHTML=response['errorMsg'];
//            window.location.href="#";
//            preLoader("off");
//            return;
//          }
//          if(response['warning']=="yes"){
//             document.getElementById('warningBoxWithdraw').style.display="block";
//            document.getElementById('errorBoxWithdraw').style.display="none";
//            document.getElementById('errorBoxDeposit').style.display="none";
//             document.getElementById('warningBoxWithdraw').innerHTML=response['errorMsg'];
//             window.location.href="#";
//             preLoader("off");
//             return;
//           }
   
//        if(response['success']=="yes"){
//         document.getElementById('warningBoxWithdraw').style.display="none";
//         document.getElementById('errorBoxWithdraw').style.display="none";
//         document.getElementById('withdraw1').style.display="none";
//         document.getElementById('withdraw2').style.display="none";
//         document.getElementById('withdraw3').style.display="none";
        
//         document.getElementById('success').style.display="block";
//         window.location.href="#";  
//           // window.location.href=response['goto'];
//            preLoader("off");
           
//            return;
//        }
            
//        }catch(err) {
//   console.log(err.message);
//   window.location.href="#";
//   preLoader("off");
// }   
       
//       },
//           error: function(badx)
//           {
//            document.getElementById('errorBoxWithdraw').style.display='block';
//            document.getElementById('warningBoxWithdraw').style.display="none";
//            document.getElementById('errorBoxDeposit').style.display="none";
//        document.getElementById('errorBoxWithdraw').innerHTML="An unexpected error occurred, please check your internet connection and try again.";
//        window.location.href="#";
//        preLoader("off"); 
//           }
         
//      });
// }//ENDS ENTIRE FUNCTION