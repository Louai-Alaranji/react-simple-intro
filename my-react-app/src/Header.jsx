
function Header(){
return (
    // a return statment can only take 1 element with child elements. 
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li> <a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <hr />
    </header>
);
}

// we write "export" so we can import it to other componenets
export default Header;