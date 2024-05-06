
export const Search = ({ value, onChange }) => {
    return (
        <div>
            <input 
                className="border-2 border-gray-400 w-full p-2" 
                placeholder="Search movie name..." 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
}