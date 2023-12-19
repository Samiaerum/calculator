// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }

//     })
// })
document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('inputBox');
    var buttons = document.querySelectorAll('.button');

    var string = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleButtonClick(e.target.innerHTML);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case 'AC':
                string = "";
                break;
            case 'DEL':
                string = string.slice(0, -1);
                break;
            case '=':
                try {
                    string = String(eval(string));
                } catch (error) {
                    string = 'Error';
                }
                break;
            default:
                string += value;
                break;
        }

        input.value = string;
    }
});
