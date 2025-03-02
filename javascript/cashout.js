document.getElementById('CashSection').style.display="none";
 document.getElementById('addMoney').addEventListener('click',function(event){

    event.preventDefault;
    document.getElementById('CashSection').style.display="none";
    document.getElementById('AddMoneySection').style.display="block";
 })

  
 document.getElementById('cashout').addEventListener('click',function(event){

   event.preventDefault;
   document.getElementById('CashSection').style.display="block";
   document.getElementById('AddMoneySection').style.display="none";
})