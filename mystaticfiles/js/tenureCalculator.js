function tenureConvert(){ 
    var btcAmount=  parseFloat(document.getElementById('btcAmount').value);
    var cashAmount=  parseFloat(document.getElementById('cashAmount').value); 
    if(!btcAmount || !cashAmount){
    return;
    }else{btcConvert();}
}
function btcConvert(){  
  var btcAmount=  parseFloat(document.getElementById('btcAmount').value);
  document.getElementById('cashAmount').value=(btcAmount*coinRate).toFixed(2);
  var tenure=document.getElementById('tenure').value;
  calculator(tenure,btcAmount);
}
function cashConvert(){
    var cashAmount=  parseFloat(document.getElementById('cashAmount').value); 
    var btcAmount=parseFloat((cashAmount/coinRate).toFixed(8));    
    document.getElementById('btcAmount').value=btcAmount;
    var tenure=document.getElementById('tenure').value;
    calculator(tenure,btcAmount);
  }

function calculator(tenure,btcAmount){
    
if(tenure=="rate3"){
    rate=rate3;
}
if(tenure=="rate6"){
    rate=rate6;
}
if(tenure=="rate12"){
    rate=rate12;
}
if(tenure=="rate24"){
    rate=rate24;
}

    var profit=parseFloat(((btcAmount*rate)/100).toFixed(8));
    var result=profit+btcAmount;
   // console.log("PROFIT "+profit+"PROFIT TYP "+typeof(profit)+"BTC "+btcAmount+"BTC TYP "+typeof(btcAmount)+"RESULT "+result+"RESULT TYP "+typeof(result));
    var cashResult=result*coinRate;
    document.getElementById('cashResult').innerHTML=parseFloat(cashResult.toFixed(2));
   const trimmed =result.toFixed(8);
   result=parseFloat(trimmed);
    document.getElementById('result').innerHTML=result;


}
