const display = document.querySelector(".input");

function value(value)
{
    display.value+=value;
}

function clearDisplay()
{ 
    display.value = "";
}

const buttons =  document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const val = button.innerText;

        if (val === "C") {
            clearDisplay();
        } else if (val === "=") {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = "Error";
            }
        } else if (val === "del") {
            display.value = display.value.slice(0, -1);
        } else {
            value(val);
        }
    });
});








