import React from 'react'
import {Link} from 'react-router-dom';


export default function Resume() {
  return (
    <div id="competence">
    <h1>EDUCATION AND TRAINING</h1>
    <p>
        February 2022 to November 2022 <br/>
        Coder Academy <br/>
        <em>Diploma of Web Development</em>
        <br/>
        <br/>
        July 2016 to July 2018 <br/>
        Australian Maritime College, University of Tasmania <br/>
        <em>Master of Engineering (Maritime Design)</em>
        <br/>
        <br/>
        September 2011 to July 2015 <br/>
        Jiangxi University of Science and Technology <br/>
        <em>Bachelor Degree in Engineering of Mechanical Engineering and Automation</em>
    </p>
    <hr/>
    <br/>
    <h1>SKILLS</h1>
    <p>
        Be able to use Github to develop with other developers
        <br/>
        Familiar with basic knowledge of HTML, CSS and Javascript
        <br/>
        Be able to use React, node.js, MangoDB and Express to develop web app
        <br/>
        Be able to use ROR and Postgresql to develop web apps
        <br/>
        Be able to use different deploying tools including Heroku, Netlify and Railway
        <br/>
        Basic Bootstrap 5 skills
        <br/>
        Good teamwork and collaboration
        <br/>
        Self-Motivated and Dependent learning




    </p>
    <hr/>
    <br/>
    <h1>CODING PROJECTS</h1>
    <p>
      <a className="ltg" href="https://github.com/Final-Project-CoderAcademy/Final-project" rel="noreferrer" target="_blank">Teamwork: MyWay traveling blog app-based on MERN stack</a><br/>
      <a className="ltg" href="https://github.com/Todd0554/BandFleaMarket-with-presentation" rel="noreferrer" target="_blank">BandFleaMarket – A music instrument two side marketplace based on ROR</a><br/>
      <a className="ltg" href="https://github.com/Todd0554/myPortfolio" rel="noreferrer" target="_blank">My portfolio – A simple introduction website of myself</a><br/>
      <a className="ltg" href="https://github.com/Todd0554/CodeMusic-terminal-app" rel="noreferrer" target="_blank">CodeMusic – A terminal app based on ruby</a><br/>
      <a className="ltg" href="https://github.com/Todd0554/Dingo-Drum" rel="noreferrer" target="_blank">Dingo-Drum – A Hackathon team work app</a><br/>
    </p>
    <br/>
    <Link to="/Resume/resumePDF" className="pdf">My Personal CV in PDF</Link>
</div>
  )
}
