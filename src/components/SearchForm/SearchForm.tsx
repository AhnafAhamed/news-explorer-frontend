import { FormEvent,useState } from "react";
import "./SearchForm.css";

type SearchFormProps = {
    onSearch: (params: {keyword: string}) => void;
}

function SearchForm({onSearch} : SearchFormProps){
    const [keyword, setKeyword] = useState<string>("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSearch({keyword})
    }
    

    function handleChange(e: FormEvent<HTMLInputElement> ) {
        setKeyword((e.target as HTMLInputElement).value);
    }
    return (
            <form action="" className="search-form" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="search" className="search-form__input" />
                <button type="submit" className="search-form__buttton">Search</button>
            </form>
    )
}

export default SearchForm;