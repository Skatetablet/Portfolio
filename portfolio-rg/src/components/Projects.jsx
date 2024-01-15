import adivceg from '../assets/adviceg.jpeg'
import cardcomp from '../assets/card-comp.jpeg'
import newsletter from '../assets/newsletter.jpeg'
import frenosexp from '../assets/frenos-express.jpeg'
import repo from '../assets/github-card.png'
import live from '../assets/live-card.png'
import shopping from '../assets/shopping.jpeg'
import tasks from '../assets/tasks.jpeg'
import "./stylesheet.css"

function Projects() {
  return (
    <>
    <h1 className='title' id='projects'>PROJECTS</h1>
    <div className='projects-container'>
      
        <article className='card'>
            <img src={adivceg} alt="" className='card-img'/>
            <h3 className='card-title'>Advice Generator</h3>
            <a href='https://github.com/Skatetablet/advice-generator' target='_blank'><img src={repo} alt="" id='git-card'/></a>
            <a href='https://advice-generator-gamma-ten.vercel.app/' target='_blank'><img src={live} alt="" id='live-card'/></a>
        </article>
        <article className='card'>
            <img src={cardcomp} alt="" className='card-img'/>
            <h3 className='card-title'>Credit Card Component</h3>
            <a href='https://github.com/Skatetablet/credit-card-form' target='_blank'><img src={repo} alt="" id='git-card'/></a>
            <a href='https://credit-card-form-phi.vercel.app/' target='_blank'><img src={live} alt="" id='live-card'/></a>
        </article>
        <article className='card'>
            <img src={newsletter} alt="" className='card-img'/>
            <h3 className='card-title'>Newsletter From</h3>
            <a href='https://github.com/Skatetablet/newsletter-form' target='_blank'><img src={repo} alt="" id='git-card'/></a>
            <a href='https://newsletter-form-five.vercel.app/' target='_blank'><img src={live} alt="" id='live-card'/></a>
        </article>
        <article className='card'>
            <img src={frenosexp} alt="" className='card-img'/>
            <h3 className='card-title'>Frenos Express</h3>
            <a href='https://frenosexpressmarios.com/' target='_blank'><img src={live} alt="" id='live-card'/></a>
        </article>
        <article className='card'>
            <img src={shopping} alt="" className='card-img'/>
            <h3 className='card-title'>Shopping Cart</h3>
            <a href='https://github.com/Skatetablet/carritoCompras' target='_blank'><img src={repo} alt="" id='git-card'/></a>
            <a href='https://carrito-compras-six.vercel.app/' target='_blank'><img src={live} alt="" id='live-card'/></a>
        </article>
        <article className='card'>
            <img src={tasks} alt="" className='card-img'/>
            <h3 className='card-title'>MERN Tasks</h3>
            <a href='https://github.com/Skatetablet/mern-crud-tasks' target='_blank'><img src={repo} alt="" id='git-card'/></a>
        </article>
    </div>
    </>
  )
}

export default Projects
