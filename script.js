function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate / 100;
    //var amount = parseInt(principal) + parseInt(interest) //Here I am adding together the interest and the principal to get a total amount

    if (principal == "") //Looking to make sure that something was entered
    {
        alert("Please Enter a Number");
	document.getElementById("principal").focus(); //Setting the focus back to the principle
    }
    else{
        if (principal <= 0) //Looking to make sure that what was entered was a positive number
        {
            alert("Please Enter a Positive Number");
	    document.getElementById("principal").focus(); //Setting the focus back to the principle
       }
    }

    var result = "<br>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    document.getElementById("result").innerHTML=result; //Telling the browser to show the result variable
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function slidderVal(newVal){ //Show the values increasing by the slidder
    document.getElementById("id_val").innerHTML=newVal + '%';
}