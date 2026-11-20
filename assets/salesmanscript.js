function formValidateAdd(){
    let nameSpan=document.getElementById("productnamespan");
    let name=document.getElementById("productname").value;
    if((name.length<5) || (name.length>50)){
        nameSpan.innerText="Product Name should contain atleast 5 and maximum 50 characters.";
        return false;
    }else{
        nameSpan.innerText="";
    }

    let textarea=document.getElementById("addtextarea").value;
    let textareaSpan=document.getElementById("textareaspan");
    if((textarea.length<5) || (textarea.length>200)){
        textareaSpan.innerText="Product description should contain atleast 5 and maximum 200 characters.";
        return false;
    }else{
        textareaSpan.innerText="";
    }

    let warranty=document.getElementById("warranty").value;
    let warrantySpan=document.getElementById("warrantyspan");
    if((warranty<0) || (warranty>60)){
        warrantySpan.innerText="Warranty should be from 0 to 60 months";
        return false;
    }else{
        warrantySpan.innerText="";
    }

    return true;
}

function formValidateManage(){
    let fname=document.getElementById("fname").value;
    let fnameSpan=document.getElementById("fnamespan");
    if((fname.length<5) || (fname.length>50)){
        fnameSpan.innerText="Name should have atleast 5 and maximum 50 characters.";
        return false;
    }else{
        fnameSpan.innerText="";
    }

    let email=document.getElementById("email").value;
    let emailSpan=document.getElementById("emailspan");
    if(!email.endsWith("@gmail.com")){
        emailSpan.innerText="Email should end with '@gmail.com'";
        return false;
    }else{
        emailSpan.innerText="";
    }

    let phone=document.getElementById("phoneno").value;
    let phoneSpan=document.getElementById("phonespan");
    if(!/^\d{11}$/.test(phone)){
        phoneSpan.innerText="Phone number should contain 11 digits.";
        return false;
    }else{
        phoneSpan.innerText="";
    }
    return true;
}

function formValidateLogin(){
    let email=document.getElementById("email").value;
    let emailSpan=document.getElementById("emailspan");
    if(!email.endsWith("@gmail.com")){
        emailSpan.innerText="Email should end with '@gmail.com'";
        return false;
    }else{
        emailSpan.innerText="";
    }

    return true;
}

function formValidateRegister(){
    let fname=document.getElementById("fname").value;
    let fnameSpan=document.getElementById("fnamespan");
    if((fname.length<5) || (fname.length>50)){
        fnameSpan.innerText="Name should have atleast 5 and maximum 50 characters.";
        return false;
    }else{
        fnameSpan.innerText="";
    }

    let email=document.getElementById("email").value;
    let emailSpan=document.getElementById("emailspan");
    if(!email.endsWith("@gmail.com")){
        emailSpan.innerText="Email should end with '@gmail.com'";
        return false;
    }else{
        emailSpan.innerText="";
    }

    let phone=document.getElementById("phone").value;
    let phoneSpan=document.getElementById("phonespan");
    if(!/^\d{11}$/.test(phone)){
        phoneSpan.innerText="Phone number should contain 11 digits.";
        return false;
    }else{
        phoneSpan.innerText="";
    }

    let pass=document.getElementById("password").value;
    let smallaphabet=false, capalphabet=false, number=false, special=false;

    for(let i=0; i<pass.length; i++){
        let c=pass.charAt(i);

        if(c>='a' && c<='z'){
            smallaphabet=true;
        }else if(c>='A' && c<='Z'){
            capalphabet=true;
        }else if(c>='0' && c<='9'){
            number=true;
        }else if(c=='@' || c=='#' || c=='&'){
            special=true;
        }
    }

    let strongpassSpan=document.getElementById("strongpassspan");
    if(!smallaphabet || !capalphabet || !number || !special){
        strongpassSpan.innerText="Password should contain small letters, capital letters, numbers and special characters (@ or # or &)";
        return false;
    }else{
        strongpassSpan.innerText="";
    }


    let conpass=document.getElementById("confirmpass").value;
    let passSpan=document.getElementById("passspan");
    if(pass !== conpass){
        passSpan.innerText="Passwords don't match";
        return false;
    }else{
        passSpan.innerText="";
    }

    return true;
}