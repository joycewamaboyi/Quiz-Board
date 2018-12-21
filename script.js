
$(document).ready(function (){
    $('#blanks form').submit(function(event){
        var q1 = $("input:radio[name=question1]:checked").val();
        var q2 = $("input:radio[name=question2]:checked").val();
        var q3 = $("input:radio[name=question3]:checked").val();
        var q4 = $("input:radio[name=question4]:checked").val();
        var q5 = $("input:radio[name=question5]:checked").val();

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
        $(".Output").show();
        $("#display").text("Your score is: " + marks);
  
 event.preventDefault();
        
       
 })
 });
 
 

