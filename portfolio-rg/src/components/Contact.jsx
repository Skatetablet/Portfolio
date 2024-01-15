import linked from '../assets/linked.png'
import github from '../assets/github.png'
import cv from '../assets/cv.png'
import email from '../assets/email.png'
import curr from '../assets/ricardo_garcia_cv.pdf'
import "./stylesheet.css"

function Contact() {
  return (
    <>
      <h1 className='title' id='contact'>CONTACT</h1>
      <section className='contact-section'>
        <a href="https://www.linkedin.com/in/ricardo-garcía-430a531b6" target="_blank"><img src={linked} alt="linkedin" /></a>
        <a href="https://github.com/Skatetablet" target="_blank"><img src={github} alt="github"/></a>
        <a href={curr} download="ricardo_garcia_cv"><img src={cv} alt="" /></a>
        
      </section>
    </>
  )
}

export default Contact
