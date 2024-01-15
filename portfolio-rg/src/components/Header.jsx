import header from "../assets/laptop-header.png"
import "./stylesheet.css"


function Header() {
  return (
    <div className="header-info">
        <img src={header} alt="laptop" id="laptop-h"/>
        <section className="header-text">
          <h1>Ricardo Garcia</h1>
          <h3>Front-end Developer</h3>
          <p>Passionate in building and maintaining web applications using different technologies.</p>
        </section>
    </div>
  )
}

export default Header