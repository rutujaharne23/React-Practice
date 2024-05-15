import { usePrevious } from "../hooks/usePrevious";
import { useState } from "react";

export const UsePreviousHooks = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div className=" pt-9">
            <div className="text-3xl text-center pb-6 font-bold">usePrevious</div>
            <div className="flex justify-center">
                <div className="border-2 border-gray-600 p-12">
                    <div className="flex justify-evenly">
                        <div className="text-xl font-semibold italic">Now:</div>
                        <div className="text-xl font-bold">{count}</div>
                    </div>
                    <div className="flex justify-evenly">
                        <div className="text-xl font-semibold italic">before:</div>
                        <div className="text-xl font-bold">{prevCount}</div>
                    </div>
                    <div className="pt-5 text-center">
                        <button className="bg-orange-400 p-1 px-4 rounded-md" onClick={() => setCount(count - 1)}>Decrement</button>
                    </div>
                    <div className="pt-5 text-center">
                        <button className="bg-orange-400 p-1 px-4 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

