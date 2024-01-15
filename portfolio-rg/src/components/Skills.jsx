import html from "../assets/html-logo.png"
import css from "../assets/css-logo.png"
import node from '../assets/node.png'
import react from '../assets/react.png'
import git from '../assets/git-logo.png'
import js from '../assets/js.png'
import "./stylesheet.css"



function Skills() {
  return (
    <div className="container-skills">
      <h1 className="title" id="skills">SKILLS</h1>
      <section>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={node} alt="" />
        <img src={react} alt="" />
        <img src={git} alt="" />
        <img src={js} alt="" />
      </section>
    </div>
  )
}

export default Skills
