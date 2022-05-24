var radbtn1=document.getElementById("bright");
var radbtn2=document.getElementById("cool");
var radbtn3=document.getElementById("fiery");

var card=document.getElementsByClassName("card");
var fname=document.getElementById("validationCustom01");
var lname=document.getElementById("validationCustom02");
var city=document.getElementById("validationCustom03");
var id=document.getElementById("validationCustom04");
var zip=document.getElementById("validationCustom05");
var email=document.getElementById("validationCustom06");
var phn=document.getElementById("validationCustom07");

function changeTheme(events)
{
   if(events.target.id=="bright"){
     document.body.style.backgroundColor="white";
     document.body.style.color="black";
     fname.style.backgroundColor="white",lname.style.backgroundColor="white",city.style.backgroundColor="white",zip.backgroundColor="white",email.style.backgroundColor="white",phn.style.backgroundColor="white";
     for(var i=0;i<card.length;i++)
     {
        card[i].style.backgroundColor="white";
        card[i].style.color="black";
        
     }
   }
   else if(events.target.id=="fiery")
    {
        document.body.style.backgroundColor="pink";
        document.body.style.color="blue";
        fname.style.backgroundColor="pink",lname.style.backgroundColor="pink",city.style.backgroundColor="pink",zip.backgroundColor="pink",email.style.backgroundColor="pink",phn.style.backgroundColor="pink";
        for(var i=0;i<card.length;i++){
            card[i].style.backgroundColor="greenyellow";
            card[i].style.color="blue";
            card[i].style.border="2px solid blue";
        }
        
    }
    else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        fname.style.backgroundColor="black",lname.style.backgroundColor="black",city.style.backgroundColor="black",zip.backgroundColor="black",email.style.backgroundColor="black",phn.style.backgroundColor="black";
        for(var i=0;i<card.length;i++){
           card[i].style.backgroundColor="black";
            card[i].style.color="white";
            card[i].style.border="2px solid white";
        }

    }

}
