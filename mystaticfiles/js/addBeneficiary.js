
function myFunction(country_name,country_iso,currency_name,currency_code,flag,ibancheck){
// ctl00_BodyPlaceHolder_cpnlBankDetails for bank details
// ctl00_BodyPlaceHolder_cpnlPersonalDetails   for address details.
// ctl00_BodyPlaceHolder_pnlStepUp Netcode
// ButtonPanelBlack BottomButtonPanel submit buttons
document.getElementById("country_name").value=country_name;
document.getElementById("country_iso").value=country_iso;
document.getElementById("currency_name").value=currency_name;
document.getElementById("currency_code").value=currency_code;
document.getElementById("flag").value=flag;
document.getElementById("ibancheck").value=ibancheck;

//BLOCK incase upper is changes
//document.getElementById("ctl00_BodyPlaceHolder_cpnlBankDetails").style.display="none";
//end script refreshing

if(ibancheck=="yes"){
document.getElementById("step_1a").style.display="block";
document.getElementById("step_1b").style.display="block";
}
if(ibancheck=="no"){
document.getElementById("step_1a").style.display="block";
document.getElementById("step_1b").style.display="block";
}

}


function togo(ph1,lb1,ph2,lb2,ph3,lb3,lb4){ //
var step2go="step2generic";
var accur2=document.getElementById("currency_code").value;

document.getElementById("addHeader").style.display="none";
document.getElementById("infomsg").style.display="none";
document.getElementById("step2generic").style.display="block";
document.getElementById("step_1b").style.display="none";
document.getElementById("step_2gb").style.display="block";

if(lb1){
if(ph1){
var th1="'"+"EXAMPLE: "+ph1+"'";
var doo1="document.getElementById('field1name').placeholder="+th1;
document.getElementById("field1name").setAttribute("onfocus",doo1);
}
document.getElementById("field1").style.display="block";
document.getElementById("field1label").innerHTML=lb1;
if(accur2!="CNY"){
document.getElementById("field1name").setAttribute("req","yes");
}
}

if(lb2){
if(ph2){
var th2="'"+"EXAMPLE: "+ph2+"'";
var doo2="document.getElementById('field2name').placeholder="+th2;
document.getElementById("field2name").setAttribute("onfocus",doo2);
}
document.getElementById("field2").style.display="block";
document.getElementById("field2label").innerHTML=lb2;
document.getElementById("field2name").setAttribute("req","yes");
}
if(lb3){
if(ph3){
var th3="'"+"EXAMPLE: "+ph3+"'";
var doo3="document.getElementById('field3name').placeholder="+th3;
document.getElementById("field3name").setAttribute("onfocus",doo3);
}
document.getElementById("field3").style.display="block";
document.getElementById("field3label").innerHTML=lb3;
document.getElementById("field3name").setAttribute("req","yes");
document.getElementById("field3name").name="accnumber";
}
if(lb4){
document.getElementById("field4").style.display="block";
document.getElementById("field4name").name="acctype";
document.getElementById("field4name").setAttribute("req","yes");
document.getElementById('field4name').options.add(new Option("Savings", "Savings"));
document.getElementById('field4name').options.add(new Option("Checking", "Checking"));
}


document.getElementById("genericbutton").setAttribute("onclick","non_ajax('submit');")

document.getElementById("ibanresults2").style.display="block";
document.getElementById("bank_name_field2").innerHTML=valk['bank'];
	  document.getElementById("bank_address_field2").innerHTML=valk['address'];
	  document.getElementById("bank_country_field2").innerHTML=valk['country'];
	   var flags="flags/"+document.getElementById('flag').value;
	  document.getElementById("bnkflag2").setAttribute("src",flags);
return;
}


function checker(cur){
var accur=document.getElementById("currency_code").value;
var ibann=document.getElementById("ibancheck").value;

if(accur=="AUD"){
var step2go="step2generic";

document.getElementById("step2generic").style.display="block";
document.getElementById("step_1b").style.display="none";
document.getElementById("step_2gb").style.display="block";

document.getElementById("field1").style.display="block";
document.getElementById("field2").style.display="block";

document.getElementById("field1label").innerHTML="BSB*";
document.getElementById("field1name").name="bsb";
document.getElementById("field1name").setAttribute("onfocus","document.getElementById('field1name').placeholder='EXAMPLE:  082-936';");

document.getElementById("field2label").innerHTML="Account number*";
document.getElementById("field2name").name="accnumber";
document.getElementById("field2name").setAttribute("onfocus","document.getElementById('field2name').placeholder='EXAMPLE:  138651586';")

document.getElementById("genericbutton").setAttribute("onclick","iban_ajax('bsb',document.getElementById('field1name').value);")

document.getElementById("ibanresults2").style.display="block";
document.getElementById("bank_name_field2").innerHTML=valk['bank'];
	  document.getElementById("bank_address_field2").innerHTML=valk['address'];
	  document.getElementById("bank_country_field2").innerHTML=valk['country'];
	  var flags="flags/"+document.getElementById('flag').value;
	  document.getElementById("bnkflag2").setAttribute("src",flags);

//found="yes";
//document.getElementById('field4name').options.add(new Option("Account", "Savings"));
return;
}

if(accur=="INR"){
var step2go="step2generic";

document.getElementById("step2generic").style.display="block";
document.getElementById("step_1b").style.display="none";
document.getElementById("step_2gb").style.display="block";

document.getElementById("field1").style.display="block";
document.getElementById("field2").style.display="block";

document.getElementById("field1label").innerHTML="IFSC code*";
document.getElementById("field1name").name="ifsc";
document.getElementById("field1name").setAttribute("onfocus","document.getElementById('field1name').placeholder='EXAMPLE:  YESB0236041';");

document.getElementById("field2label").innerHTML="Account number*";
document.getElementById("field2name").name="accnumber";
document.getElementById("field2name").setAttribute("onfocus","document.getElementById('field2name').placeholder='EXAMPLE:  678911234567891';");

document.getElementById("genericbutton").setAttribute("onclick","iban_ajax('ifsc',document.getElementById('field1name').value);")

document.getElementById("ibanresults2").style.display="block";
document.getElementById("bank_name_field2").innerHTML=valk['bank'];
	  document.getElementById("bank_address_field2").innerHTML=valk['address'];
	  document.getElementById("bank_country_field2").innerHTML=valk['country'];
	   var flags="flags/"+document.getElementById('flag').value;
	  document.getElementById("bnkflag2").setAttribute("src",flags);

//found="yes";
//document.getElementById('field4name').options.add(new Option("Account", "Savings"));
return;
}
if(accur=="USD"){
var step2go="step2generic";

document.getElementById("step2generic").style.display="block";
document.getElementById("step_1b").style.display="none";
document.getElementById("step_2gb").style.display="block";

document.getElementById("field1").style.display="block";
document.getElementById("field2").style.display="block";
document.getElementById("field4").style.display="block";

document.getElementById("field1label").innerHTML="Routing number*";
document.getElementById("field1name").name="routing";
document.getElementById("field1name").setAttribute("onfocus","document.getElementById('field1name').placeholder='EXAMPLE:  111000025';");


document.getElementById("field2label").innerHTML="Account number*";
document.getElementById("field2name").name="accnumber";
document.getElementById("field2name").setAttribute("onfocus","document.getElementById('field2name').placeholder='EXAMPLE:  12345678';");


document.getElementById("field4name").name="acctype";
document.getElementById('field4name').options.add(new Option("Savings", "Savings"));
document.getElementById('field4name').options.add(new Option("Checking", "Checking"));

document.getElementById("genericbutton").setAttribute("onclick","iban_ajax('routing',document.getElementById('field1name').value);")

document.getElementById("ibanresults2").style.display="block";
document.getElementById("bank_name_field2").innerHTML=valk['bank'];
	  document.getElementById("bank_address_field2").innerHTML=valk['address'];
	  document.getElementById("bank_country_field2").innerHTML=valk['country'];
	   var flags="flags/"+document.getElementById('flag').value;
	  document.getElementById("bnkflag2").setAttribute("src",flags);

//found="yes";
//document.getElementById('field4name').options.add(new Option("Account", "Savings"));
return;
}
//ph1,lb1,ph2,lb2,ph3,lb3,lb4
if(accur=="EGP"){
togo('','','','','123456789','Account number*','');
return;
}
if(accur=="HKD"){
togo('','','','','005-231289-112','Account number*','');
return;
}
if(accur=="IDR"){
togo('','','','','6789112345678','Account number*','');
return;
}
if(accur=="JPY"){
togo('','','','','123456789012','Account number*','');
return;
}
if(accur=="KES"){
togo('','','','','0023183991919','Account number*','');
return;
}
if(accur=="KRW"){
togo('','','','','1254693521232','Account number*','');
return;
}
if(accur=="MAD"){
togo('','','','','123456789012345678901234','Account number*','');
return;
}
if(accur=="MYR"){
togo('','','','','159012938613','Account number*','');
return;
}
if(accur=="NPR"){
togo('','','','','123456789','Account number*','');
return;
}
if(accur=="PHP"){
togo('','','','','0044XXXXXXXX','Account number*','');
return;
}
if(accur=="SGD"){
togo('','','','','0011XXXXX','Account number*','');
return;
}
if(accur=="THB"){
togo('','','','','9517384260','Account number*','');
return;
}
if(accur=="ZAR"){
togo('','','','','0000000052312891','Account number*','');
return;
}
if(accur=="ARS"){
togo('20-34149938-1','Tax Id: CUIL / CUIT*','','','0110482420048200036238','Account number (CBU)*','');
return;
}
if(accur=="BDT"){
togo('','Branch name*','','','5060011118','Account number*','');
return;
}
if(accur=="BRL"){
togo('1234','Branch code*','123.456.789-12','Tax Registration Number (CPF)*','12345678-9','Account number*','yes');
return;
}
if(accur=="CAD"){
togo('006','Institution No.*','04841','Transit No.*','1234567','Account number*','yes');
return;
}
if(accur=="CLP"){
togo('760864285','RUT number (Rol �nico Tributario)*','','','12345678901234567890','Account number*','yes');
return;
}
if(accur=="CNY"){
togo('6240008631401148','UnionPay card [Optional]','','','','Account number*','');
return;
}
if(accur=="RUB"){
togo('041234567','BIK (Bank Code)*','Kaliningrad Oblast','Region*','40820810999999999999','Account number*','');
return;
}
if(accur=="NZD"){
togo('','','','','031587-0050000-011','Account number*','');
return;
}
if(accur=="MXN"){
togo('','','','','032180000118359719','CLABE*','');
return;
}
if(accur=="GBP"){
togo('18-00-02','Sort code*','','','10150491','Account number*','');
return;
}

if(ibann=="yes"){
var step2go="step2span";
document.getElementById("addHeader").style.display="none";
document.getElementById("infomsg").style.display="none";
document.getElementById("step2span").style.display="block";
document.getElementById("step_1b").style.display="none";
document.getElementById("step_2b").style.display="block";
document.getElementById("ibanresults").style.display="block";
document.getElementById("bank_name_field").innerHTML=valk['bank'];
	  document.getElementById("bank_address_field").innerHTML=valk['address'];
	  document.getElementById("bank_country_field").innerHTML=valk['country'];
	  var flags="flags/"+document.getElementById('flag').value;
	  document.getElementById("bnkflag").setAttribute("src",flags);
//found="yes";
return;
}
//ALL OTHERS NOT ON THE LIST, JUST REQUEST ACCOUNT NUMBER, SINCE WE ALREADY GOT SWIFT
togo('','','','','','Account number*','');
return;
}


function non_ajax(){

function error_check(fname,flabel,xtra){
document.getElementById("errors").value="";
if(document.getElementById(fname).getAttribute('req')=="yes" && !document.getElementById(fname).value){
var namer=document.getElementById(flabel).innerHTML;
var namerr=namer.replace('*', '');

document.getElementById("step_2gc").style.display="none";
document.getElementById("step_2gb").style.display="block"; 
document.getElementById(fname).style.borderBottomColor="red";
	  document.getElementById("infomsg").style.display="block";;  
      document.getElementById("infomsg").innerHTML="<p>"+namerr+" is compulsory.</p>";
	 document.getElementById("errors").value="yes";
	  return;
}
if(document.getElementById(fname).value){
document.getElementById(fname).style.borderBottomColor="";
document.getElementById("infomsg").innerHTML="";

var namerx=document.getElementById(flabel).innerHTML;
var namerrx=namerx.replace('*', '');
var custnm=namerrx+": "+document.getElementById(fname).value;

if(fname!="field3name"){
document.getElementById(xtra).value=custnm;
}
if(fname=="field1name" && document.getElementById("currency_code").value=="GBP"){
document.getElementById("sortcode_field").value=document.getElementById(fname).value;
}
if(fname=="field3name"){
document.getElementById("account_number_field").value=document.getElementById(fname).value;
}
}
}//error_check ends
error_check('field1name','field1label','extra1');
if(document.getElementById("errors").value=="yes"){return;}
error_check('field2name','field2label','extra2');
if(document.getElementById("errors").value=="yes"){return;}
error_check('field3name','field3label','extra3');
if(document.getElementById("errors").value=="yes"){return;}

if(document.getElementById("field4name").getAttribute('req')=="yes"){
var egf = document.getElementById("field4name");
var selector = egf.options[egf.selectedIndex].value;
if(!selector){

document.getElementById("step_2gc").style.display="none";
document.getElementById("step_2gb").style.display="block"; 
document.getElementById("field4name").style.borderBottomColor="red";
document.getElementById("field4name").style.color="red";
	  document.getElementById("infomsg").style.display="block";;  
      document.getElementById("infomsg").innerHTML="<p>Please select an option.</p>";
	  return;
}
if(selector){
document.getElementById("infomsg").innerHTML="";
document.getElementById("field4name").style.borderBottomColor="";
document.getElementById("field4name").style.color="";
document.getElementById("extra3").value=selector;
}
}

document.getElementById("step_2gb").style.display="none"; 
document.getElementById("step2generic").style.display="none";
	 document.getElementById("step3span").style.display="block";
	 document.getElementById("step_3b").style.display="block";
	  return;
}//ends non_ajax function


function submitter(){

function error_check2(fname2,flabel2){
document.getElementById("errors").value="";
if(document.getElementById(fname2).getAttribute('req')=="yes" && !document.getElementById(fname2).value){
var namer2=document.getElementById(flabel2).innerHTML;
var namerr2=namer2.replace('*', '');

document.getElementById("step_3c").style.display="none";
document.getElementById("step_3b").style.display="block"; 
document.getElementById(fname2).style.borderBottomColor="red";
	  document.getElementById("infomsg").style.display="block";;  
      document.getElementById("infomsg").innerHTML="<p>"+namerr2+" is compulsory.</p>";
	 document.getElementById("errors").value="yes";
	  return;
}
if(document.getElementById(fname2).value){
document.getElementById(fname2).style.borderBottomColor="";
document.getElementById("infomsg").innerHTML="";

if(fname2=="recipient_name"){
document.getElementById("account_name_field").value=document.getElementById(fname2).value;
}
if(fname2=="recipient_phone"){
document.getElementById("phone_field").value=document.getElementById(fname2).value;
}
if(fname2=="recipient_address"){
document.getElementById("address_field").value=document.getElementById(fname2).value;
}
if(fname2=="recipient_city"){
document.getElementById("city_field").value=document.getElementById(fname2).value;
}
if(fname2=="recipient_email"){
document.getElementById("email_field").value=document.getElementById(fname2).value;
}
}
}//error_check ends
error_check2('recipient_name','recipient_name1');
if(document.getElementById("errors").value=="yes"){return;}
error_check2('recipient_email','recipient_email1');
if(document.getElementById("errors").value=="yes"){return;}
//error_check2('recipient_phone','recipient_phone1');
//if(document.getElementById("errors").value=="yes"){return;}
error_check2('recipient_address','recipient_address1');
if(document.getElementById("errors").value=="yes"){return;}
error_check2('recipient_city','recipient_city1');
if(document.getElementById("errors").value=="yes"){return;}


//document.getElementById("addform").submit(); //Submits form to addressbook.php
submitForm();
return;
}


function iban_ajax(ftype,fvalue){
//alert(ftype);
//alert(fvalue);

var req_typex=ftype;
var req_valuey=fvalue;
var req_valuex=req_valuey.replace(/[^0-9a-z]/gi, '');
document.getElementById("infomsg").style.display="none"; 
if(req_typex=="swift"){
    
      document.getElementById("step_1b").style.display="none";
      
document.getElementById("step_1c").style.display="block"; 
}
if(req_typex=="iban"){
	  document.getElementById("step_2b").style.display="none";
document.getElementById("step_2c").style.display="block"; 
}
if(req_typex=="bsb" || req_typex=="ifsc" || req_typex=="routing"){
	  document.getElementById("step_2gb").style.display="none";
document.getElementById("step_2gc").style.display="block"; 
}
if(req_typex=="bsb" || req_typex=="ifsc" || req_typex=="routing"){
document.getElementById("field2name").style.borderBottomColor="";
if(document.getElementById("field2name").value.length<6){
	  document.getElementById("step_2gb").style.display="block";
document.getElementById("step_2gc").style.display="none";
document.getElementById("field2name").style.borderBottomColor="red";
  
	  document.getElementById("infomsg").style.display="block";;
      document.getElementById("infomsg").innerHTML="Please provide a valid account number.";
	  return;
	  	  }
		  }
		  if(req_typex=="routing"){
		  var egx = document.getElementById("field4name");
var selectorx = egx.options[egx.selectedIndex].value;
document.getElementById("field4name").style.borderBottomColor="";
if(!selectorx){
		  document.getElementById("step_2gb").style.display="block";
document.getElementById("step_2gc").style.display="none";
document.getElementById("field4name").style.borderBottomColor="red";

	  document.getElementById("infomsg").style.display="block"; 
      document.getElementById("infomsg").innerHTML="<p>Please select an account type.</p>";
	  return;
	  }
}


 if(req_typex=="swift" && req_valuex.length!=8 && req_valuex.length!=11 ){
	  document.getElementById("step_1c").style.display="none";
document.getElementById("step_1b").style.display="block"; 
document.getElementById("swiftfm").style.borderBottomColor="red";
	  document.getElementById("infomsg").style.display="block";;
	 
	    
	  

      document.getElementById("infomsg").innerHTML="<p>Invalid swift code supplied. SWIFT is either 8 or 11 characters long.</p>";
	  return;
	  	  
              }
              
              if(req_typex=="swift" && req_valuex.toLowerCase()=="loydgb2x"){
                document.getElementById("step_1c").style.display="none";
          document.getElementById("step_1b").style.display="block"; 
          document.getElementById("swiftfm").style.borderBottomColor="red";
                document.getElementById("infomsg").style.display="block";
               
                  
                
          
                document.getElementById("infomsg").innerHTML="<p>Please contact your beneficiary bank for your correct SWIFT code.</p>";
                return;
                      
                        }

			 if(req_typex=="bsb" && req_valuex.length<6){
	  document.getElementById("step_2gc").style.display="none";
document.getElementById("step_2gb").style.display="block"; 
document.getElementById("field1name").style.borderBottomColor="red";
	  document.getElementById("infomsg").style.display="block";;
	 
	    
	  

      document.getElementById("infomsg").innerHTML="<p>Invalid BSB provided.</p>";
	  return;
	  	  
	  	    }


if(req_typex=="iban" && document.getElementById("iban_field").value.length>14){
return;
}

if(req_typex=="iban" && req_valuex.length<15){
//document.getElementById("iban_loader").style.display="none";
document.getElementById("ibanfm").style.color="red";
  
	  document.getElementById("infomsg").style.display="block";;
      document.getElementById("infomsg").innerHTML="<p>Please supply a valid IBAN to continue.</p>";
	  
	  document.getElementById("step_2b").style.display="block";
document.getElementById("step_2c").style.display="none";
			return;
			}



 $.ajax({
	
      type:"post",
      url:"../script/ajaxIban.php",
      datatype:"json",
	  data: {req_value: req_valuex, req_type: req_typex},
      success:function(restx)
      {
	  
	  valk = JSON.parse(restx);
	  
	  if(req_typex=="swift"){
	 valk['valid']=valk['valid'] || null;
	  }
	
	  if(req_typex=="swift" && valk['valid']=="true"){
	  
	  if(valk['countrycode']!=document.getElementById("country_iso").value){ //starts if valid but different countries
	  document.getElementById("step_1c").style.display="none";
document.getElementById("step_1b").style.display="block";

	  document.getElementById("infomsg").style.display="block";;
      document.getElementById("infomsg").innerHTML="The swift code must originate from your beneficiary country.";
	  return;
	  } //Ends if valid but different countries
	  
	  document.getElementById("infomsg").innerHTML="";
//document.getElementById("iban_button").style.display="block";

document.getElementById("step1span").style.display="none";
	 document.getElementById("bank_field").value=valk['bank'];
	 document.getElementById("swift_field").value=valk['swift'];
	 //document.getElementById("swift_field").value=document.getElementById("swiftfm").value;
	 checker("he");
	  
	  return;
	  	  
	  	    }
            if(req_typex=="swift" && valk['valid']!="true"){
	  document.getElementById("step_1c").style.display="none";
document.getElementById("step_1b").style.display="block";

	  document.getElementById("infomsg").style.display="block";;
      document.getElementById("infomsg").innerHTML="Invalid swift supplied, please contact your beneficiary for the correct swift code.";
	  return;
	  	  
	  	    }
					
			if(req_typex=="iban" && valk['result']['validation']['iban_validity']!="Valid"){
	  document.getElementById("step_2b").style.display="block";
document.getElementById("step_2c").style.display="none";
document.getElementById("ibanfm").style.color="red";
  
	  document.getElementById("infomsg").style.display="block";;
      document.getElementById("infomsg").innerHTML="Invalid IBAN supplied. Check with your beneficiary and try again.";
	  return;
	  	  }
			
			
			if(req_typex=="iban" && valk['result']['validation']['iban_validity']=="Valid"){
			
			if(valk['result']['data']['countrycode']!=document.getElementById("country_iso").value){ //starts if valid but different countries
	 document.getElementById("step_2b").style.display="block";
document.getElementById("step_2c").style.display="none";
document.getElementById("ibanfm").style.color="red";
  
	  document.getElementById("infomsg").style.display="block";;
      document.getElementById("infomsg").innerHTML="The IBAN must originate from recipient country.";
	  return;
	  	  } //Ends if valid but different countries
			
			
	  document.getElementById("infomsg").innerHTML="";
	  
document.getElementById("iban_field").value=valk['result']['data']['iban'];
document.getElementById("account_number_field").value=valk['result']['data']['account_number'];
document.getElementById("currency_code").value=valk['result']['data']['currency'];
document.getElementById("ibanfm").value=req_valuex;

	 
	  document.getElementById("step2span").style.display="none";
	 document.getElementById("step3span").style.display="block";
	 document.getElementById("step_3b").style.display="block";
	  return;
	  	    }
		
		//BSB START	
			if(req_typex=="bsb" && valk['valid']!="true"){
	  document.getElementById("step_2gb").style.display="block";
document.getElementById("step_2gc").style.display="none";
document.getElementById("field1name").style.borderBottomColor="red";

  
	  document.getElementById("infomsg").style.display="block";;
      document.getElementById("infomsg").innerHTML=valk['message'];
	  return;
	  	  }
			
			
			if(req_typex=="bsb" && valk['valid']=="true"){
	  document.getElementById("infomsg").innerHTML="";
	  document.getElementById("field1name").style.borderBottomColor="";
	  
document.getElementById("bsb_field").value=valk['bsb'];
document.getElementById("account_number_field").value=document.getElementById("field2name").value;
document.getElementById("field1name").value=req_valuex;

	 
	  document.getElementById("step2generic").style.display="none";
	 document.getElementById("step3span").style.display="block";
	 document.getElementById("step_3b").style.display="block";
	  return;
	  	    }
			
			//ROUTING START	
			if(req_typex=="routing" && valk['result_info']['valid']!="true"){
	  document.getElementById("step_2gb").style.display="block";
document.getElementById("step_2gc").style.display="none";
document.getElementById("field1name").style.borderBottomColor="red";

  
	  document.getElementById("infomsg").style.display="block";;
      document.getElementById("infomsg").innerHTML=valk['result_info']['message'];
	  return;
	  	  }
			
			
			if(req_typex=="routing" && valk['result_info']['valid']=="true"){
	  document.getElementById("infomsg").innerHTML="";
	  document.getElementById("field1name").style.borderBottomColor="";
	  
document.getElementById("routing_field").value=valk['result'][0]['routing'];
document.getElementById("account_number_field").value=document.getElementById("field2name").value;
document.getElementById("extra3").value=selectorx;
document.getElementById("field1name").value=req_valuex;

	 
	  document.getElementById("step2generic").style.display="none";
	 document.getElementById("step3span").style.display="block";
	 document.getElementById("step_3b").style.display="block";
	  return;
	  	    }

			
			//IFSC START
			if(req_typex=="ifsc" && valk['valid']!="true"){
	  document.getElementById("step_2gb").style.display="block";
document.getElementById("step_2gc").style.display="none";
document.getElementById("field1name").style.borderBottomColor="red";

  
	  document.getElementById("infomsg").style.display="block";;
      document.getElementById("infomsg").innerHTML=valk['message'];
	  return;
	  	  }
			
			
			if(req_typex=="ifsc" && valk['valid']=="true"){
	  document.getElementById("infomsg").innerHTML="";
	  document.getElementById("field1name").style.borderBottomColor="";
//document.getElementById("iban_button").style.display="block";
var ifscvar="IFSC: ";
document.getElementById("extra1").value=ifscvar+valk['ifsc'];
document.getElementById("account_number_field").value=document.getElementById("field2name").value;
document.getElementById("field1name").value=req_valuex;

	 
	  document.getElementById("step2generic").style.display="none";
	 document.getElementById("step3span").style.display="block";
	 document.getElementById("step_3b").style.display="block";
	  return;
	  	    }
 if(valk['nothing']=="yes"){
 document.getElementById("infomsg").style.display="block";
document.getElementById("infomsg").style.display="block";;
document.getElementById("infomsg").innerHTML="There seems to be a problem with your internet connection. Please <a href='"+window.location.href+"'>refresh</a> to continue.";
return;
 }           
},//syccwess
error: function(badx)
		 { 
document.getElementById("infomsg").style.display="block";
document.getElementById("infomsg").style.display="block";;
document.getElementById("infomsg").innerHTML="There seems to be a problem with your internet connection. Please <a href='"+window.location.href+"'>refresh</a> to continue.";
return;
		 }//end network error
});//ajax

}//function


//SUBMIT FUNCTION
function submitForm(){

var country_iso = document.getElementById('country_iso').value;
var country_name = document.getElementById('country_name').value;
var currency_name = document.getElementById('currency_name').value;
var currency_code = document.getElementById('currency_code').value;
var flag = document.getElementById('flag').value;
var ibancheck = document.getElementById('ibancheck').value;
var iban_field = document.getElementById('iban_field').value;
var bank_field = document.getElementById('bank_field').value;
var account_number_field = document.getElementById('account_number_field').value;
var bsb_field = document.getElementById('bsb_field').value;
var routing_field = document.getElementById('routing_field').value;
var sortcode_field = document.getElementById('sortcode_field').value;
var swift_field = document.getElementById('swift_field').value;
var hide_swift_field = document.getElementById('hide_swift_field').value;

var extra1 = document.getElementById('extra1').value;
var extra2 = document.getElementById('extra2').value;
var extra3 = document.getElementById('extra3').value;

var account_name_field = document.getElementById('account_name_field').value;
var address_field = document.getElementById('address_field').value;
var email_field = document.getElementById('email_field').value;
var phone_field = document.getElementById('phone_field').value;
var city_field = document.getElementById('city_field').value;
//btcAmt=parseFloat(btcAmt.toFixed(8));
   //MAKE AJAX CALL
   document.getElementById('infomsg').style.display="none";
   document.getElementById("step_3c").style.display="block";
document.getElementById("step_3b").style.display="none"; 
   $.ajax({
       
       type:"post",
       url:"script/ajaxIban.php",
       datatype:"json",
       data: {country_iso: country_iso, 
        country_name: country_name, 
        currency_name: currency_name, 
        currency_code: currency_code, 
        flag: flag, 
        ibancheck: ibancheck, 
        iban_field: iban_field, 
        bank_field: bank_field, 
        account_number_field: account_number_field, 
        bsb_field: bsb_field, 
        routing_field: routing_field, 
        sortcode_field: sortcode_field, 
        swift_field: swift_field, 
        hide_swift_field: hide_swift_field, 
        extra1: extra1, 
        extra2: extra2, 
        extra3: extra3,  
        account_name_field: account_name_field, 
        address_field: address_field, 
        email_field: email_field, 
        phone_field: phone_field, 
        city_field: city_field
    },
       success:function(respnx)
       {try{
       response = JSON.parse(respnx);
       
       if(response['error']=="yes"){
           document.getElementById('infomsg').style.display="block";
           document.getElementById('infomsg').innerHTML=response['errorMsg'];
           document.getElementById("step_3c").style.display="none";
document.getElementById("step_3b").style.display="block"; 
           window.location.href="#";
           return;
         }
   
       if(response['success']=="yes"){
       document.getElementById('step3span').style.display="none";
        document.getElementById('infomsg').style.display="none";
        document.getElementById('infomsg').innerHTML="";
        document.getElementById('successInfo').style.display="block";
        document.getElementById('successInfo').innerHTML=response['successMsg'];
        document.getElementById('noBene').style.display="none";
        document.getElementById('yesBene').style.display="block";
        document.getElementById('completeForm').style.display="block";
        
        document.getElementById('bankRecipient').value=response['bankAccount'];  
        document.getElementById('bankRate').value=response['bankRate']; 
        document.getElementById('bankCurrency').value=response['bankCurrency'];
        document.getElementById('bankName').innerHTML=response['bankName'];
        document.getElementById('bankBeneficiary').innerHTML=response['bankBeneficiary'];
        document.getElementById('bankAccount').innerHTML=response['bankAccount'];
        var bankCountry=response['bankCountry'];
        document.getElementById('bankCountry').innerHTML="<img src='flags/"+bankCountry+".png'/>";
        
        

           window.location.href="#";
           
           return;
       }
            
       }catch(err) {
  console.log(err.message);
 
}   
       
      },
          error: function(badx)
          {
           document.getElementById('infomsg').style.display='block';
          
       document.getElementById('infomsg').innerHTML="An unexpected error occurred, please check your internet connection and try again.";
       preLoader("off"); 
          }
         
     });



}//ENDS submit form

