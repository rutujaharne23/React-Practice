import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="grid grid-cols-5 gap-5 p-9">
            <div className="shadow-xl rounded-md p-4 h-52">
                <div className="border-2 border-dotted border-gray-500 p-3 font-bold text-xl text-center italic text-gray-700">
                    Table
                </div>
                <div className="text-sm font-medium italic pt-5">
                    Searching, Sorting, Pegination etc. 
                </div>
                <div className="text-center pt-6">
                    <Link to="/table"><button className="bg-gray-600 text-white px-14 py-2 rounded-md shadow-md cursor-pointer">Click me!</button></Link>
                </div>
            </div>
            <div className="shadow-xl rounded-md p-4 h-52">
                <div className="border-2 border-dotted border-gray-500 p-3 font-bold text-xl text-center italic text-gray-700">
                    Modal
                </div>
                <div className="text-sm font-medium italic pt-5">
                    Slider, Image Gallery etc.
                </div>
                <div className="text-center pt-11">
                    <Link to="/modalImageGallery"><button className="bg-gray-600 text-white px-14 py-2 rounded-md shadow-md cursor-pointer">Click me!</button></Link>
                </div>
            </div>
            <div className="shadow-xl rounded-md p-4 h-52">
                <div className="border-2 border-dotted border-gray-500  p-3 font-bold text-xl text-center italic text-gray-700">
                    Calculator
                </div>
                <div className="text-sm font-medium italic pt-5">
                    Add, Multiply, Subtract, Divide etc.
                </div>
                <div className="text-center pt-6">
                    <Link to="/calculator"><button className="bg-gray-600 text-white px-14 py-2 rounded-md shadow-md cursor-pointer">Click me!</button></Link>
                </div>
            </div>
            <div className="shadow-xl rounded-md p-4 h-52">
                <div className="border-2 border-dotted border-gray-500  p-3 font-bold text-xl text-center italic text-gray-700">
                    Stepper
                </div>
                <div className="text-sm font-medium italic pt-5">
                    Steps, Next, Previous etc.
                </div>
                <div className="text-center pt-11">
                    <Link to="/multiStepper"><button className="bg-gray-600 text-white px-14 py-2 rounded-md shadow-md cursor-pointer">Click me!</button></Link>
                </div>
            </div>
            <div className="shadow-xl rounded-md p-4 h-52">
                <div className="border-2 border-dotted border-gray-500  p-3 font-bold text-xl text-center italic text-gray-700">
                    Custom Hooks 
                </div>
                <div className="text-sm font-medium italic pt-5">
                    usePrevious
                </div>
                <div className="text-center pt-11">
                    <Link to="/customHooks"><button className="bg-gray-600 text-white px-14 py-2 rounded-md shadow-md cursor-pointer">Click me!</button></Link>
                </div>
            </div>
            <div className="shadow-xl rounded-md p-4 h-52">
                <div className="border-2 border-dotted border-gray-500  p-3 font-bold text-xl text-center italic text-gray-700">
                    Infinite Scroll 
                </div>
                <div className="text-sm font-medium italic pt-5">
                    count, window.scroll, etc.
                </div>
                <div className="text-center pt-11">
                    <Link to="/infiniteScroll"><button className="bg-gray-600 text-white px-14 py-2 rounded-md shadow-md cursor-pointer">Click me!</button></Link>
                </div>
            </div>
            <div className="shadow-xl rounded-md p-4 h-52">
                <div className="border-2 border-dotted border-gray-500  p-3 font-bold text-xl text-center italic text-gray-700">
                    Drag and Drop 
                </div>
                <div className="text-sm font-medium italic pt-5">
                    ItemArray, event, draggedItemIndex etc.
                </div>
                <div className="text-center pt-6">
                    <Link to="/dragAndDrop"><button className="bg-gray-600 text-white px-14 py-2 rounded-md shadow-md cursor-pointer">Click me!</button></Link>
                </div>
            </div>
            <div className="shadow-xl rounded-md p-4 h-52">
                <div className="border-2 border-dotted border-gray-500  p-3 font-bold text-xl text-center italic text-gray-700">
                     Alert Box
                </div>
                <div className="text-sm font-medium italic pt-5">
                    Button, CustomAlert Box etc.
                </div>
                <div className="text-center pt-11">
                    <Link to="/alertBox"><button className="bg-gray-600 text-white px-14 py-2 rounded-md shadow-md cursor-pointer">Click me!</button></Link>
                </div>
            </div>
            <div className="shadow-xl rounded-md p-4 h-52">
                <div className="border-2 border-dotted border-gray-500  p-3 font-bold text-xl text-center italic text-gray-700">
                     Lazy loading
                </div>
                <div className="text-sm font-medium italic pt-5">
                    etc.
                </div>
                <div className="text-center pt-11">
                    <Link to="/lazyLoading"><button className="bg-gray-600 text-white px-14 py-2 rounded-md shadow-md cursor-pointer">Click me!</button></Link>
                </div>
            </div>
        </div>
    );
}