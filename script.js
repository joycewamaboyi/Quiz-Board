
$(document).ready(function (){
    $('#blanksform').submit(function(event){
        var q1=document.forms["myform"]["question1"].value;
        var q2=document.forms["myform"]["question2"].value;
        var q3=document.forms["myform"]["question3"].value;
        var q4=document.forms["myform"]["question4"].value;
        var q5=document.forms["myform"]["question5"].value;
        var marks=0;
        if(q1=="js")
        {
           marks=marks+20;
           }
        if(q2=="search()")
        {
           marks=marks+20;
           }
        if(q3=="Cookies")
        {
           marks=marks+20;
        }
        if(q4=="Camelcase")
        {
           marks=marks+20;
        }
        if(q5=="Coding")
        {
           marks=marks+20;
        }
        $(".output").show();
        $("#display").text("Your score is: " + result);
  
 event.preventDefault();
        
       
 })
 });
 
 

