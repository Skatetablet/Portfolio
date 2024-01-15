import "./stylesheet.css"

function NavBar() {
    return (
      <div className="nav">
          <h1 id="nav-text">Ricardo Garcia</h1>
          <ul className="nav">
            <li className="nb-link"><a href="#skills" >Skills</a></li>
            <li className="nb-link"><a href="#projects" >Projects</a></li>
            <li className="nb-link"><a href="#contact">Contact</a></li>
          </ul>
      </div>
    )
  }
  
  export default NavBar