$(document).ready(function () {
    var myQ;
    var myObject = [[  "איזה מאכילים יוצא הדופן",  "פלפל",  "מלואח",  "שווארמה",  "פיצה",  "4" ],
                    [ "איזה מאכילים יוצא הדופן",  "סוכריות",  "בורקס",  "שווארמה",  "פיצה",  "1" ],
                    [ "איזה מאכילים יוצא הדופן",  "נודלס",  "קארי",  "שווארמה", "סושי",  "3" ]];



    //alert(myObject[0].Qutision);
    

    $("#start").click(function () {
        myQ = $("#slider-1").val();
        $("#myQuition").html(myObject[myQ][0]);
        $("#lbl1").html(myObject[myQ][1]);
        $("#lbl2").html(myObject[myQ][2]);
        $("#lbl3").html(myObject[myQ][3]);
        $("#lbl4").html(myObject[myQ][4]);
    });
    
    $("#bdock").click(function () {
        var myrusalt = $("input[name='radio-choice-h-2']:checked").val();
        if (myrusalt == myObject[myQ][5]) {
            $("#correct").html("כל הכבוד התשובה נכונה")
            $("#myDialog").dialog()
        } else {
            $("#correct").html("התשובה אינה נכונה")
            $("#myDialog").dialog()
        }


    });

    


});