import React, { useState } from "react";

interface Props {
    handleFilter: (value: string) => void;
}

const SearchCard = ({ handleFilter }: Props) => {
    const [search, setSearch] = useState(""); 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm); 
        handleFilter(searchTerm); 
    };
    

    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="..."
                onChange={handleChange} 
            />
        </div>
    );
};

export default SearchCard;
