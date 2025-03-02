 
 document.getElementById("BTn-Cash").addEventListener('click',function(event){
    event.preventDefault();

   const value= document.getElementById('updateValue').innerText;
    const convertValue=parseInt(value);

     const pin=document.getElementById("APinNUM").value;
       const convertPin=parseInt(pin);

       const amount= document.getElementById("AMount").value;
    const convertAmount=parseInt(amount);

      if(convertPin === 1234){
          const Cashvalue=convertValue-convertAmount;
          document.getElementById('updateValue').innerText=Cashvalue;
      }
      else{
        alert("Enter valid pin number")
      }
 })