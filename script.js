// Function to convert temperatures
function convertTemperature() {
    // Get input values
    const inputFields = {
        celsius: parseFloat(document.getElementById("celsius").value),
        fahrenheit: parseFloat(document.getElementById("fahrenheit").value),
        kelvin: parseFloat(document.getElementById("kelvin").value),
        rankine: parseFloat(document.getElementById("rankine").value),
        reaumur: parseFloat(document.getElementById("reaumur").value)
    };

    function celsiusToOtherUnits(celsiusValue) {
        return {
            fahrenheit: (celsiusValue * 9/5) + 32,
            kelvin: celsiusValue + 273.15,
            rankine: (celsiusValue + 273.15) * 9/5,
            reaumur: celsiusValue * 4/5
        };
    }

    function fahrenheitToOtherUnits(fahrenheitValue) {
        return {
            celsius: (fahrenheitValue - 32) * 5/9,
            kelvin: (fahrenheitValue + 459.67) * 5/9,
            rankine: fahrenheitValue + 459.67,
            reaumur: (fahrenheitValue - 32) * 4/9
        };
    }

    function kelvinToOtherUnits(kelvinValue) {
        return {
            celsius: kelvinValue - 273.15,
            fahrenheit: (kelvinValue * 9/5) - 459.67,
            rankine: kelvinValue * 9/5,
            reaumur: (kelvinValue - 273.15) * 4/5
        };
    }

    function rankineToOtherUnits(rankineValue) {
        return {
            celsius: (rankineValue - 491.67) * 5/9,
            fahrenheit: rankineValue - 459.67,
            kelvin: rankineValue * 5/9,
            reaumur: (rankineValue - 491.67) * 4/9
        };
    }

    function reaumurToOtherUnits(reaumurValue) {
        return {
            celsius: reaumurValue * 5/4,
            fahrenheit: (reaumurValue * 9/4) + 32,
            kelvin: (reaumurValue * 5/4) + 273.15,
            rankine: (reaumurValue * 9/4) + 491.67
        };
    }

    for (const unit in inputFields) {
        if (!isNaN(inputFields[unit])) {
            const convertedValues = {};
            switch (unit) {
                case "celsius":
                    convertedValues[unit] = inputFields[unit];
                    Object.assign(convertedValues, celsiusToOtherUnits(inputFields[unit]));
                    break;
                case "fahrenheit":
                    convertedValues[unit] = inputFields[unit];
                    Object.assign(convertedValues, fahrenheitToOtherUnits(inputFields[unit]));
                    break;
                case "kelvin":
                    convertedValues[unit] = inputFields[unit];
                    Object.assign(convertedValues, kelvinToOtherUnits(inputFields[unit]));
                    break;
                case "rankine":
                    convertedValues[unit] = inputFields[unit];
                    Object.assign(convertedValues, rankineToOtherUnits(inputFields[unit]));
                    break;
                case "reaumur":
                    convertedValues[unit] = inputFields[unit];
                    Object.assign(convertedValues, reaumurToOtherUnits(inputFields[unit]));
                    break;
            }
            
            for (const targetUnit in convertedValues) {
                if (targetUnit !== unit) {
                    document.getElementById(targetUnit).value = convertedValues[targetUnit];
                }
            }
        }
    }
    // Function to clear input and output fields
function clearFields() {
    const allFields = ["celsius", "fahrenheit", "kelvin", "rankine", "reaumur"];
    for (const field of allFields) {
        document.getElementById(field).value = "";
    }
}

// Attach the clearFields function to a "Clear" button in your HTML
document.getElementById("clearButton").addEventListener("click", clearFields);

}

function isValidKey(e)
{
  var charCode = e.keyCode || e.which;
  if (charCode == 8){

    console.log(e.code);
    return false;
  }
  return true;
}
