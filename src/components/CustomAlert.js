export const CustomAlert = ({ variant, color, onClose }) => {
    return (
        <div className={`p-5 border-2 border-${color}-600 bg-${color}-400 hover:bg-${color}-500 hover:border-${color}-700 rounded-md flex justify-between`}>
            <p className="text-lg font-bold">{variant}! : AlertBox</p>
            <div className="text-2xl cursor-pointer" onClick={onClose}>&#10006;</div>
        </div>
    );
}