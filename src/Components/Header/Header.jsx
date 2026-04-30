import "./Header.scss"; 

function Header() {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <h1>INSURE</h1>
          <ul>
            <li><a href="#">HOW WE WORK</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">ACCOUNT</a></li>
            <li><a className="nav-a" href="#">VIEW PLANS</a></li> 
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;