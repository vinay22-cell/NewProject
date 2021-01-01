console.log("Local Stoage Database is Ready...")
var read_localstorage=document.getElementById("read_localstorage")// read the input from user
var search_input=document.getElementById("search_input")

read_localstorage.onclick=function(){
    var key=localStorage.getItem(search_input.value)// store the key value from here
    if(!(key==null)){
       console.log("Successfylly fetch from Local DataBase Storage : "+localStorage.getItem(search_input.value))//perform the operation 
    }else{
        console.log("Please insert Valid Input...")// show error message
    }
}
