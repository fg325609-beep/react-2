import "./Components/Header.scss"

function Header(){
     return(
        <>
        <header>
            <div className="container">
                <div className="navbar">
                    <img src="img/logo.svg" alt="" />
                    <ul>
                        <li><a href="">HOW WE WORK</a></li>
                        <li><a href="">BLOG</a></li>
                        <li><a href="">ACCOUNT</a></li>
                        <a href="VIEW PLANS">VIEW PLANS</a>
                    </ul>
                </div>
            </div>
        </header>
        </>
     )
}
export default Header;