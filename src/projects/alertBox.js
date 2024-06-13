import { useState } from "react";
import { CustomAlert } from "../components/CustomAlert";

export const AlertBox = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [buttonColor, setButonColor] = useState("");
    const [buttonValue, setButtonValue] = useState("");

    const handleShowAlert = (color, value) => {
        setButonColor(color);
        setButtonValue(value);
        setShowAlert(true);
    }

    const handleCloseAlert = () => {
        setShowAlert(false);
    }

    return (
        <div className="p-10">
            <div className="text-xl text-center pb-6 font-bold">Alert Box</div>
            <div className="text-center">
                <button className="p-2 px-5 border-2 border-green-600 bg-green-400 hover:bg-green-500 hover:border-green-700 font-bold m-3" onClick={() => handleShowAlert("green", "Primary")}>Primary</button>
                <button className="p-2 px-5 border-2 border-blue-600 bg-blue-400 hover:bg-blue-500 hover:border-blue-700 font-bold m-3" onClick={() => handleShowAlert("blue", "Basic")}>Basic</button>
                <button className="p-2 px-5 border-2 border-red-600 bg-red-400 hover:bg-red-500 hover:border-red-700 font-bold m-3" onClick={() => handleShowAlert("red", "Danger")}>Danger</button>
            </div>
            {showAlert && <CustomAlert variant={buttonValue} color={buttonColor} onClose={handleCloseAlert} />}
        </div>
    );
}