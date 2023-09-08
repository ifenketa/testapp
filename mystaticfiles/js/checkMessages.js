// //DEFINE VARIABLES NEEDED
// var menuBadge = document.getElementById('menuBadge');
// var dropdownBadge = document.getElementById('dropdownBadge'); 
// var timing=0;
// var url = window.location.pathname;
// var filename = url.substring(url.lastIndexOf('/')+1);

//     function loop() {

//        $.ajax({
	
//     type:"post",
//     url:"script/checkMessages.php",
//     datatype:"json",
//     data: {type: 'msg',page:'update',filename:filename},
//     success:function(respnx)
//     {try{
//     response = JSON.parse(respnx);

//       if(response['error']=="yes"){
//         preLoader("on");
//         window.location.href=response['goto'];
//     return;
       
//       }


//     if(response['totalMsg']>0){
//         document.getElementById('menuBadge').style.display="block";        
//         document.getElementById('menuBadge').innerHTML=response['totalMsg'];
        
//         document.getElementById('dropdownBadge').style.display="block";
//         document.getElementById('dropdownBadge').innerHTML=response['totalMsg']+" Unread";
//          timing=timing+1000;
//   timing=timing>25000?1000:timing;
         

// window.setTimeout(loop, timing);
       
//       }

//     if(response['totalMsg']<1){
//         document.getElementById('menuBadge').style.display="none";        
//         document.getElementById('menuBadge').innerHTML="";
        
//         document.getElementById('dropdownBadge').style.display="none";
//         document.getElementById('dropdownBadge').innerHTML="";
//          timing=timing+1000;
//   timing=timing>25000?1000:timing;
  
// window.setTimeout(loop, timing);
//       }
          
      
    
//     }catch(err) {
//   console.log(err.message);
//   timing=timing+1000;
//   timing=timing>25000?1000:timing;
//   window.setTimeout(loop, timing);
// }},
//        error: function(badx)
//        {
//        console.log("error occured while checking new incoming messages");
//        loop();

//        }
      
//   }); //end ajax
 
//     }
//     loop();
    
