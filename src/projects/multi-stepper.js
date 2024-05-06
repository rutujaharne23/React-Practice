import { Stepper } from "../components/Stepper";

export const MultiStepper = () => {
    const list = [
        <ElementOne />,
        <ElementTwo />,
        <ElementThree />,
        <ElementFour />,
        <ElementFive />,
        <ElementSix />
    ];
    return (
        <div>
            <Stepper list={list} />
        </div>
    );
}

const ElementOne = ({onPrevClick, onNextClick}) => {
    return (
        <div className="text-center pt-7">
            <div className="text-4xl">First Cpmponent</div>
            <div className="pt-5">
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onPrevClick}>Previous</button>
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onNextClick}>Next</button>
            </div>
        </div>
    );
}

const ElementTwo = ({onPrevClick, onNextClick}) => {
    return (
        <div className="text-center pt-7">
            <div className="text-4xl">Second Cpmponent</div>
            <div className="pt-5">
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onPrevClick}>Previous</button>
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onNextClick}>Next</button>
            </div>
        </div>
    );
}

const ElementThree = ({onPrevClick, onNextClick}) => {
    return (
        <div className="text-center pt-7">
            <div className="text-4xl">Third Cpmponent</div>
            <div className="pt-5">
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onPrevClick}>Previous</button>
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onNextClick}>Next</button>
            </div>
        </div>
    );
}

const ElementFour = ({onPrevClick, onNextClick}) => {
    return (
        <div className="text-center pt-7">
            <div className="text-4xl">Fourth Cpmponent</div>
            <div className="pt-5">
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onPrevClick}>Previous</button>
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onNextClick}>Next</button>
            </div>
        </div>
    );
}

const ElementFive = ({onPrevClick, onNextClick}) => {
    return (
        <div className="text-center pt-7">
            <div className="text-4xl">Fifth Cpmponent</div>
            <div className="pt-5">
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onPrevClick}>Previous</button>
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onNextClick}>Next</button>
            </div>
        </div>
    );
}

const ElementSix = ({onPrevClick, onNextClick}) => {
    return (
        <div className="text-center pt-7">
            <div className="text-4xl">Sixth Cpmponent</div>
            <div className="pt-5">
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onPrevClick}>Previous</button>
                <button className="p-1 px-3 border-2 bg-slate-400 border-slate-400 m-3 rounded-sm" onClick={onNextClick}>Next</button>
            </div>
        </div>
    );
}