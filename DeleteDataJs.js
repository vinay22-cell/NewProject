console.log("Local Storage Databse is ready...")

var delete_data=document.getElementById("delete_data")
var delete_input_key=document.getElementById("delete_input_key")


delete_data.onclick=function(){
    var key=localStorage.getItem(delete_input_key.value) //store the input value from the user
    if(!(key===null)){ // check the condition
    localStorage.removeItem(delete_input_key.value);
    console.log("Deletion is Succesfull\nPlease Check Your Local DataBase Storage...") //perform the operation
    }else{
        console.log("Data is not found in Local DataBase Storage.\n Please Given the Valid Input") //otherwise show error message
    }
}
