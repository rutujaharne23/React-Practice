import { useState } from "react";
// Create simple calculator with javascript.
export function Calculator(){
    const [text, setText] = useState("");

    function calculateResult() {
        const expression = text.trim();
        const operators = /[+\-*/%]/;
        const numbers = expression.split(operators).map(Number);
        const operatorsArray = expression.split('').filter(char => char.match(operators));
        
        let result = numbers[0];
        
        operatorsArray.forEach((operator, index) => {
            const nextNumber = numbers[index + 1];
            switch (operator) {
                case '+':
                    result += nextNumber;
                    break;
                case '-':
                    result -= nextNumber;
                    break;
                case '*':
                    result *= nextNumber;
                    break;
                case '/':
                    if (nextNumber !== 0) {
                        result /= nextNumber;
                    } else {
                        setText("Error: Division by zero");
                        return;
                    }
                    break;
                case '%':
                    result %= nextNumber;
                    break;
                default:
                    break;
            }
        });
        
        setText(result);
    }
    

    function handleButtonClick(e){
        const buttonValue = e.target.value;

        switch (buttonValue) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case ".":
                setText((prevText) => prevText + buttonValue);
                break;
            case "/":
            case "*":
            case "+":
            case "-":
            case "%":
                setText((prevText) => prevText + buttonValue);
                break; 
            case "=":
                calculateResult()
                break;
            case "C":
                setText("")
                break;
            case "<":
                setText((prevTexts) => prevTexts.slice(0, -1));
                break;
        
            default:
                setText((prevText) => prevText + buttonValue);
                break;
        }
    }

    return (
        <div className="flex justify-center">
            <div className="border-2 border-gray-300 p-3 w-4/12 bg-[#edebed] rounded-lg">
                <div className="text-lg text-center pb-3">
                    Calculator
                </div>
                <div className="pb-3">
                    <textarea value={text} onChange={(e) => {
                        setText(e.target.value);
                    }} rows="3" className="border-2 border-gray-300 w-full bg-[#f3f5dc]"></textarea>
                </div>
                <div className="flex justify-evenly pb-3">
                    <button value="%" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>%</button>
                    <button value="C" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>C</button>
                    <button value="<" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>&#60;</button>
                    <button value="/" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>/</button>
                </div>
                <div className="flex justify-evenly pb-3">
                    <button value="7" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>7</button>
                    <button value="8" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>8</button>
                    <button value="9" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>9</button>
                    <button value="*" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>*</button>
                </div>
                <div className="flex justify-evenly pb-3">
                    <button value="4" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>4</button>
                    <button value="5" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>5</button>
                    <button value="6" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>6</button>
                    <button value="-" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>-</button>
                </div>
                <div className="flex justify-evenly pb-3">
                    <button value="1" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>1</button>
                    <button value="2" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>2</button>
                    <button value="3" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>3</button>
                    <button value="+" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>+</button>
                </div>
                <div className="flex justify-evenly pb-3">
                    <button value="0" className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>0</button>
                    <button value="." className="border-2 border-[#f1a734] bg-[#f1a734] rounded-full w-16 h-16 text-2xl text-amber-200" onClick={handleButtonClick}>.</button>
                    <button value="=" className="border-2 border-red-400 bg-red-400 rounded-md w-[36%] text-2xl text-amber-200" onClick={handleButtonClick}>=</button>
                </div>
            </div>
        </div>
    );
}