console.log("Local Storage Databse is ready...")

var delete_data=document.getElementById("delete_data")
var delete_input_key=document.getElementById("delete_input_key")


delete_data.onclick=function(){
    var key=localStorage.getItem(delete_input_key.value)
    if(!(key===null)){
    localStorage.removeItem(delete_input_key.value);
    console.log("Deletion is Succesfull\nPlease Check Your Local DataBase Storage...")
    }else{
        console.log("Data is not found in Local DataBase Storage.\n Please Given the Valid Input")
    }
}
