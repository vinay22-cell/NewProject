console.log("Local Storage Database is Ready...")
var Read_All_Data=document.getElementById("Read_All_Data")

Read_All_Data.onclick=function(){
    var keys=Object.keys(localStorage)// get the keys from local storage
    console.log("Key"+"    :   "+"Value")
   
    for(var key of keys){ // using the for loop
        console.log(key+":  "+localStorage.getItem(key));
    }
}
