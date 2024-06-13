import React, { useState } from 'react';

export const DragAndDrop = () => {
    const [items, setItems] = useState([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
        "Item 8",
        "Item 9",
        "Item 10"
    ]);

    const handleDragStart = (event, index) => {
        event.dataTransfer.setData("draggedItemIndex", index);
    };

    const handleDrop = (event, dropIndex) => {
        event.preventDefault();
        const draggedIndex = parseInt(event.dataTransfer.getData("draggedItemIndex"), 10);
        //console.log(draggedIndex, dropIndex);
        if (draggedIndex === dropIndex) return;

        const updatedItems = [...items];
        const [draggedItem] = updatedItems.splice(draggedIndex, 1);
        updatedItems.splice(dropIndex, 0, draggedItem);

        setItems(updatedItems);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="p-5">
                <div className="text-lg text-center pb-6 font-bold">Drag and Drop Elements</div>
                <div>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            draggable
                            onDragStart={(event) => handleDragStart(event, index)}
                            onDrop={(event) => handleDrop(event, index)}
                            onDragOver={handleDragOver}
                            className="p-1 border-2 border-slate-400 bg-slate-200 flex justify-between items-center cursor-move my-1"
                        >
                            <div className="text-lg font-bold">{item}</div>
                            <div className="p-[0.5] border-2 border-slate-400">&#9783;</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
