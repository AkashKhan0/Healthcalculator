
function getbmivalue(){
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    height = height * 12;
    height = height * 0.025;

    var newbmivalue = weight / (height * height);
    newbmivalue = Math.round(newbmivalue);

    document.getElementById('bmi_value').value = newbmivalue;


    if(newbmivalue < 19){
        document.getElementById('footerValue').innerHTML = "Your Health is low. You Need to improve yourself.";
    }
    else if(newbmivalue >= 19 && newbmivalue <=25 ){
        document.getElementById('footerValue').innerHTML = "Your Health is Perfect";
    }
    else{
        document.getElementById('footerValue').innerHTML = "Your Health is High. You Need to loss yourself.";
    }
}

