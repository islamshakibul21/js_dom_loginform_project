 
 document.getElementById('login-btn')
 .addEventListener('click',function(event){
    event.preventDefault();
    const accountNum=document.getElementById("input-Num").value;
     const convertAccountNum=parseInt(accountNum);
     const pinNum = document.getElementById("PinNUM").value;
     const convertNum = parseInt(pinNum);
     if(accountNum.length === 11){
        if(convertNum===1234){
           window.location.href="../main.html";
        }
        else{
            console.log('pin not correct');
            
        }
     }
     else{
        console.log('number is not correct');
     }
   
   
 })

