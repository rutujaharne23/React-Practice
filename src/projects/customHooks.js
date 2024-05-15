import { Link } from "react-router-dom";

export const CustomHooks = () => {
    return (
        <>
            <div className="text-3xl text-center font-bold pt-3">Hooks</div>
            <div className="grid grid-cols-5 gap-5 p-9">
                <div className="shadow-xl rounded-md p-4 h-40">
                    <div className="border-2 border-double border-gray-500 p-3 font-bold text-xl text-center ita text-gray-700 underline">
                        usePrevious
                    </div>
                    <div className="text-center pt-6">
                        <Link to="/usePreviousHooks"><button className="bg-gray-600 text-white px-12 py-2 rounded-md shadow-md cursor-pointer">Try Example</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}