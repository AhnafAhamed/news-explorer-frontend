import "./SearchForm.css";

function SearchForm() {
    return (
            <form action="" className="search-form">
                <input type="text" placeholder="search" className="search-form__input" />
                <button type="submit" className="search-form__buttton">Search</button>
            </form>
    )
}

export default SearchForm;