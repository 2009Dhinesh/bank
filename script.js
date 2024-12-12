function withdraw_click(){
    const withdraw = document.getElementById('withdraw').value;
    const withdraw_password = document.getElementById('withdraw_password').value;
    var withdraw_amount = document.getElementById('withdraw_amount').value;
    
    const withdraws = "7010382383";
    const withdraw_passwords = "0143";
    
    if(withdraw == withdraws && withdraw_password == withdraw_passwords){
        if(withdraw_amount <= 9000){
            alert(`Your Account is ${withdraw}  
                    You have successfully Withdraw $ ${withdraw_amount}`);
        }
        else{
            alert("Limited amount is only 9000")
        }
    }
    else{
        alert("Invalid Account Number or Password");
    }
}
function withdraw_cancel(){
    location.reload();
}


// deposit

function deposit_click(){
    const deposite = document.getElementById('deposite').value;
    const deposite_password = document.getElementById('deposite_password').value;
    var deposite_amount = document.getElementById('deposite_amount').value;

    const deposites = "7010382383";
    const deposite_passwords = "0143";

    if(deposite == deposites && deposite_password == deposite_passwords){
        if(deposite_amount <= 10000){
            alert(`Your Account is ${deposite}  
                    You have successfully Deposite $ ${deposite_amount}`);
        }
        else{
            alert("Limited amount is only 10000 deposited")
        }
    }
    else{
        alert("Invalid Account Number or Password");
    }
}

// create

function create(){
    var create_name = document.getElementById('create_name').value;
    var create_email = document.getElementById('create_email').value;
    var create_pass = document.getElementById('create_pass').value;

    var details = document.getElementById('data_details');
    details.style.display = "block";
    
    var name =document.getElementById("name").innerHTML = `Name : ${create_name};`
    var name =document.getElementById("email").innerHTML = `email : ${create_email};`
    var name =document.getElementById("password").innerHTML = `password : ${create_pass};`
    
    alert("Create Account Successfully !!!")
    
    
    
}

function another(){
    document.getElementById('create_name').value = "";
    document.getElementById('create_email').value = "";
    document.getElementById('create_pass').value = "";
}


// balance 

function balance_click(){
    const balance = document.getElementById('balance').value;
    const balance_password = document.getElementById('balance_password').value;

    const balances = "7010382383";
    const balance_passwords = "0143";
    let total = 20000;
    if(balance == balances && balance_password == balance_passwords){
            alert(`Bank balance ${total}`);
    }
    else{
        alert("Invalid Account Number or Password");
    }

}


// details

function del_details(){
    var details_profile = document.getElementById('details_profile');
    details_profile.style.display = "none";
}
function del_details1(){
    var details_profile1 = document.getElementById('details_profile1');
    details_profile1.style.display = "none";
}
function del_details2(){
    var details_profile2 = document.getElementById('details_profile2');
    details_profile2.style.display = "none";
}
function del_details3(){
    var details_profile3 = document.getElementById('details_profile3');
    details_profile3.style.display = "none";
}
function del_details4(){
    var details_profile4 = document.getElementById('details_profile4');
    details_profile4.style.display = "none";
}
function del_details5(){
    var details_profile = document.getElementById('details_profile5');
    details_profile.style.display = "none";
}
function del_details6(){
    var details_profile = document.getElementById('details_profile6');
    details_profile.style.display = "none";
}
function del_details7(){
    var details_profile = document.getElementById('details_profile7');
    details_profile.style.display = "none";
}
function del_details7(){
    var details_profile = document.getElementById('details_profile7');
    details_profile.style.display = "none";
}