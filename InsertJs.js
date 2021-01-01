console.log("Local DataBase Storage is Ready...");
var take_input_key=document.getElementById("take_input_key")
var take_input=document.getElementById("take_input_value")
var save_value=document.getElementById("save_value")

save_value.onclick=function(){
    var key=localStorage.getItem(take_input_key.value)
    if(!(key!=null)){
        var val=localStorage.getItem(take_input_value.value)
        if(!(val!=null)){
            localStorage.setItem(take_input_key.value,take_input_value.value);
            console.log("Data Successfully inserted in Your Database...")
        }else{
            console.log("Please Provide a valid not null Value...")
        }
    }else{
        console.log("PLease Provide the Valid Key...")
    }
}