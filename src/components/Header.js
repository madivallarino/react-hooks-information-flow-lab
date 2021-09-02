
function Header({setter, setter2}){
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={setter2}>
            {setter ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header;