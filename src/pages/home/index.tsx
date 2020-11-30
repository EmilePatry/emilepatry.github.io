import React from 'react';
import './index.scss';

import me from '../../assets/images/me.jpg';

const about_me = [
  <p>I help companies and organizations of all sizes build beautiful products through research-driven strategy,
  accessible and thoughtful design, and the constant pursuit of timeless visual principles.</p>,
  <p>Today I'm focused on building <a className="highlight" href="https://www.hinterland.ai/" target="_blank" rel="noopener noreferrer">Hinterland</a>, all while pursuing a Bachelor's Degree in Global Business and Digital Arts at the <a className="highlight" href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer">University of Waterloo</a>. </p>,
]

const socials: {[social: string] : string} = {
  "Contact": "mailto:emile@thesage.co?Subject=Saying Hello!",
  "LinkedIn": "https://www.linkedin.com/in/emilepatry/",
  "Dribbble": "https://dribbble.com/patry",
  "Resume": "files/Resume.pdf",
  "":"",
}

export default function Home() {
  return (
    <div className="home">
      <img src={me} alt="me"/>
      <p className="hi-there">Hi there, I'm Emile.</p>
      <div className="about-me">
        {about_me.map((text, i) => {
          return <div key={i}>{text}</div>
        })}
      </div>
      <div className="my-links">
        {Object.keys(socials).map((key, i) => {
          return <a key={i} target="_blank" rel="noopener noreferrer" className="highlight" href={socials[key]}><p>{key}</p></a>
        })}
      </div>
    </div>
  )
}
