import { useState } from "react";
import "./SearchForm.css";

function SearchForm({onSearch}) {
    const [keyword, setKeyword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch({keyword})
    }

    function handleChange(e) {
        setKeyword(e.target.value);
    }
    return (
            <form action="" className="search-form" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="search" className="search-form__input" />
                <button type="submit" className="search-form__buttton">Search</button>
            </form>
    )
}

export default SearchForm;