$(document).ready(function(){

    var upval, downval, leftval, rightval, txt, bVal;

    $("button").click(function(){
        txt = $(this).text();
        bVal = $(this).val();

        if(txt != ""){

            if((bVal != 1) && (bVal != 2) &&(bVal != 3)){
                upval = eval(eval(bVal) - eval(3));
                var upTxt = $("#"+upval).text();
                if(upTxt == ""){
                    $("#"+upval).text(txt);
                    $(this).text("");
                }
            }

            if((bVal != 7) && (bVal != 8) &&(bVal != 9)){
                downval = eval(eval(bVal) + eval(3));
                var downTxt = $("#"+downval).text();
                if(downTxt == ""){
                    $("#"+downval).text(txt);
                    $(this).text("");
                }
            }

            if((bVal != 1) && (bVal != 4) &&(bVal != 7)){
                leftval = eval(eval(bVal) - eval(1));
                var leftTxt = $("#"+leftval).text();
                if(leftTxt == ""){
                    $("#"+leftval).text(txt);
                    $(this).text("");
                }
            }

            if((bVal != 3) && (bVal != 6) &&(bVal != 9)){
                rightval = eval(eval(bVal) + eval(1));
                var rightTxt = $("#"+rightval).text();
                if(rightTxt == ""){
                    $("#"+rightval).text(txt);
                    $(this).text("");
                }
            }

            var one = $("#1").text();
            var two = $("#2").text();
            var three = $("#3").text();
            var four = $("#4").text();
            var five = $("#5").text();
            var six = $("#6").text();
            var seven = $("#7").text();
            var eight = $("#8").text();
            var nine = $("#9").text();

            if((one == "1")&&(two == "2")&&(three == "3")&&
                (four == "4")&&(five == "5")&&(six == "6")&&
                (seven == "7")&&(eight == "8")&&(nine == "")){           
                alert("Congratulations You Won The Game...");
            $("button").attr("disabled", "disabled");
        }
    }
});

});