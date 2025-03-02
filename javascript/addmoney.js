  
  document.getElementById("btnAdd").addEventListener('click',function(event){

    event.preventDefault;
        const amount=document.getElementById("amount").value;
        const Pin=document.getElementById("PinNUM").value;
        const number=document.getElementById("Number").value;
        const value= document.getElementById("updateValue").innerText;
        const convertValue=parseInt(value);
        const convertPin= parseInt(Pin);
         const convertAmount =parseInt(amount);
          
          if(convertAmount && convertPin){
             if(convertPin === 1234)
             {
                 const sum=convertValue+convertAmount;
                 document.getElementById("updateValue").innerText=sum;
             }
             else{
              alert('Enter valid pin');
             }
          }
          else{
            alert('Enter amount');
          }
  })

