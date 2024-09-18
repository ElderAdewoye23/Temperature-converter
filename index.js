

submit.addEventListener("click", function () {

    let optionUnits1 = document.getElementById("select1").value;
    let optionUnits2 = document.getElementById("select2").value;
let temperature = document.getElementById("temperature").value;
let submit = document.getElementById("submit");
let display1 = document.getElementById('result');
let display2 = document.getElementById('result2');
let convertedValue;
   
    switch(optionUnits1) {
        case 'celsius':
             //celsius to fahrenheit
  if (optionUnits2 == "fahrenheit") {
    convertedValue = (temperature * 9/5 )  + 32;
    // console.log(convertedValue)
   display1.textContent = `${convertedValue} Fahrenheits`;
  }
   //celsius to kelvin
  else if(optionUnits2 == 'kelvin'){
      convertedValue = temperature + 273.15;
      display2.textContent = `${convertedValue} kelvin `   }
      //celsius
      else{
     convertedValue = temperature;
  display1.textContent ='select to either fahrenheits or kelvin';
 }
 break;
//fahrenheit to celsius
case 'fahrenheit':
        if( optionUnits2 == "celsius"){
            convertedValue = (temperature - 32) * 5 /9;
            display1.textContent = `${convertedValue} celsius `
        }
        // fahrenheit to kelvin
        else if (optionUnits2 == "kelvin"){
            convertedValue = (temperature - 32) * 5/9 + 273.15;
            display2.textContent = `${convertedValue} kelvin `
        }
        //fahrenheit
        else{
            convertedValue = temperature;
            display1.textContent ='select to either celsius or kelvin';
        }
        break;

        case 'kelvin':
            //kelvin to celsius
            if(optionUnits2 == "celsius"){
                convertedValue = temperature - 273.15;
                display1.textContent = `${convertedValue} celsius `
            }
            // kelvin to fahrenheit
            else if (optionUnits2 == "fahrenheit" ){
                convertedValue = (temperature - 273.15 ) * 9/5 + 32;
                display2.textContent = `${convertedValue} fahrenheit `
            }
            //kelvin
            else{
                convertedValue = temperature;
                display1.textContent = `select to either celsius or fahrenheit`;
            }
}

});

