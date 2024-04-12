function check1() {

    let i_1 = document.getElementById("name_input").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;
    if (regex.test(i_1)) {
        document.getElementById("name_input").style.color = "green";
        return true;
    }
    
    else {
        document.getElementById("name_input").style.color = "red"
        return false;
    }
    
}

function check2() {

    let i_2 = document.getElementById("email_input").value;
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regex.test(i_2)) {
        document.getElementById("email_input").style.color = "green";
        return true;
    }
    
    else {
        document.getElementById("email_input").style.color = "red"
        return false;
    }
    
}

function check4() {

    let i_4 = document.getElementById("o_input").value;
    if (i_4 != null) {
        document.getElementById("o_input").style.color = "green";
        return true;
    }
    
    else {
        document.getElementById("o_input").style.color = "red"
        return false;
    }
    
}