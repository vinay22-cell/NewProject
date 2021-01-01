console.log("Local DataBase Storage is Ready...");
var take_input_key=document.getElementById("take_input_key")// take the input from here
var take_input=document.getElementById("take_input_value")
var save_value=document.getElementById("save_value")

save_value.onclick=function(){
    var key=localStorage.getItem(take_input_key.value) // store the key here 
    if(!(key!=null)){ // checking the condition
        var val=localStorage.getItem(take_input_value.value)
        if(!(val!=null)){ // checking the condition
            localStorage.setItem(take_input_key.value,take_input_value.value);
            console.log("Data Successfully inserted in Your Database...")//show message
        }else{
            console.log("Please Provide a valid not null Value...")// show the error the message
        }
    }else{
        console.log("PLease Provide the Valid Key...")//show the error message
    }
}
