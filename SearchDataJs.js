console.log("Local Stoage Database is Ready...")
var read_localstorage=document.getElementById("read_localstorage")
var search_input=document.getElementById("search_input")

read_localstorage.onclick=function(){
    var key=localStorage.getItem(search_input.value)
    if(!(key==null)){
       console.log("Successfylly fetch from Local DataBase Storage : "+localStorage.getItem(search_input.value))
    }else{
        console.log("Please insert Valid Input...")
    }
}