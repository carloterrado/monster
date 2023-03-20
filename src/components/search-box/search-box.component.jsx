

const SearchBox = ({ onChangeHandler, placeholder, className }) => {

    return (
        <input className={className} type="search" placeholder={placeholder} onChange={onChangeHandler} />
    );
}

export default SearchBox;