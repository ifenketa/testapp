// //DEFINE VARIABLES NEEDED
// var timings = 0;
// var thisInvoice = document.getElementById("payChecker").getAttribute("invoice");

// function loops() {

//    $.ajax({

//       type: "get",
//       url: "/checkpayment/",
//       datatype: "json",
//       data: {
//          invoice: thisInvoice
//       },
//       success: function (respnx) {
//          try {
//             response = JSON.parse(respnx);

//             if (response['error'] == "yes") {
//                // preLoader("on");
//                alert("error occured, please refresh your brower");
//                return;
//             }

//             if (response[0]) {
//                let x = 0;
//                let tr = "<tr><td>DATE</td><td>AMOUNT</td><td>FEE</td><td>STATUS</td></tr>";
//                for (x = 0; x < response.length; x++) {
//                   let value = response[x]['value'];
//                   let fe = response[x]['fee'];
//                   let status = response[x]['status'] == "Settled" ? "<td style='font-weight:200;color:#00c52c;'>Settled</td>" : "<td style='font-weight:200'>processing...</td>";
//                   let date = "<td style='font-weight:200'>" + response[x]['receivedDate'] + "</td>";
//                   let amount = response[x]['status'] == "Settled" ? "<td style='font-weight:200;'>+" + value + "</td>" : "<td style='font-weight:200'>+" + value + "</td>";
//                   let fee = response[x]['fee'] > 0 ? "<td style='font-weight:200;color:#e82753;'>-" + fe + "</td>" : "<td></td>";
//                   tr += "<tr >" + date + amount + fee + status + "</tr>";
//                }
//                document.getElementById('tableResults').innerHTML = tr;
//                document.getElementById('due').innerHTML = response[0]['due'] + " BTC";
//                document.getElementById('paid').innerHTML = response[0]['totalPaid'] + " BTC";

//                if (response[0]['due'] < 0.000000001) {
//                   clearInterval(thisId);
//                   var elem = document.getElementById("prog");
//                   var expiry = document.getElementById("expiry");
//                   elem.style.width = thisWidth + '%';
//                   expiry.innerHTML = "Invoice paid";
//                   expiry.style.color = "#00c52c";
//                   elem.style.background = "#00c52c";
//                   document.getElementById("invDetails1").style.display = "none";
//                   document.getElementById("invDetails2").style.display = "none";
//                   document.getElementById("invDetails3").style.display = "none";
//                   document.getElementById("totalPaid").style.display = "block";

//                   if (response[0]['paid'] == "yes") {
//                      preLoader("on");
//                      window.location.href = "dashboard";
//                      return;
//                   }

//                   //return; 
//                }
//                timings = timings + 1000;
//                timings = timings > 25000 ? 1000 : timings;

//                window.setTimeout(loops, timings);

//             }

//             if (response['totalMsg'] < 1) {
//                document.getElementById('menuBadge').style.display = "none";
//                document.getElementById('menuBadge').innerHTML = "";

//                document.getElementById('dropdownBadge').style.display = "none";
//                document.getElementById('dropdownBadge').innerHTML = "";
//                timings = timings + 1000;
//                timings = timings > 25000 ? 1000 : timings;

//                window.setTimeout(loops, timings);
//             }


//          } catch (err) {
//             console.log(err.message);
//             timings = timings + 1000;
//             timings = timings > 25000 ? 1000 : timings;
//             window.setTimeout(loops, timings);
//          }
//       },
//       error: function (badx) {
//          console.log("error occured while checking new incoming messages");
//          loops();

//       }

//    }); //end ajax

// }
// loops();