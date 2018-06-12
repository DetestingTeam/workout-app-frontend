import React, {Component} from 'react'
import './aboutus.css'



class Aboutus extends Component {
  render(){
    return(
      <div>
        <head>
          <title>About Us</title>
        </head>
        <body className="body">
          <div class="full-image">
            <div class="ptext">
              <span class="border">
                About us
              </span>
            </div>
          </div>
          <section class="section section-light">
            <div className="darklogocontainer">
              <span>
                <img className="darklogo" src="./assets/images/fitology_Logo_dark.png" alt=""/>
              </span>
            </div>
          </section>

          <div class="full-image2">
            <div class="ptext">
              <span class="border trans">
                JP Engstrom<br/>
              </span>
            </div>
          </div>

          <section class="section section-dark">
            <h2>JP</h2>
            <p>Full-Stack Web Developer </p>
            <p className="list">
              <a href="https://www.linkedin.com/in/jp-engstrom">
                <li><span><img className="lp-image" src="./assets/images/linkedin.svg" alt="" /></span></li>
              </a><br/>
              <a href="https://github.com/jpengst">
                <li><span><img className="lp-image" src="./assets/images/github.svg" alt=""/></span></li>
              </a>
            </p>
          </section>

          <div class="full-image3">
            <div class="ptext">
              <span class="border trans">
                Brandonn Jewell<br/>
              </span>
            </div>
          </div>

          <section class="section section-dark">
            <h2>Brandonn Jewell</h2>
            <p>
              Full Stack Developer & UX Designer<br/>
              Ruby, Ruby on Rails, Java, Video Post-Production, Test Driven Development, React, React.js, Git, Github, HTML, Cascading Style Sheets (CSS), SQL, Node.js, WordPress, RSpec, Pair Programming, Atom, Behavior-Driven Development (BDD), Back-End Web Development, Capybara, Command Prompt.
            </p>
            <p className="list">
              <a href="https://www.linkedin.com/in/brandonnjewell">
                <li><span><img className="lp-image" src="./assets/images/linkedin.svg" alt=""/></span></li>
              </a><br/>
              <a href="https://github.com/bjewelll">
                <li><span><img className="lp-image" src="./assets/images/github.svg" alt=""/></span></li>
              </a>
            </p>
          </section>

          <div class="full-image4">
            <div class="ptext">
              <span class="border trans">
                Christine Benedict
              </span>
            </div>
          </div>

          <section class="section section-dark">
            <h2>Christine Benedict</h2>
            <p>
              Full stack web developer and Veteran | Passionate about UX<br/>
              Ruby, Ruby on Rails, Java, Test Driven Development, React, React.js, Git, Github, Military Aviation, Aircraft Systems, Helicopter Piloting

            </p>
            <p className="list">
              <a href="https://www.linkedin.com/in/ccbenedict3">
                <li><span><img className="lp-image" src="./assets/images/linkedin.svg" alt=""/></span></li>
              </a>
              <a href="https://github.com/flyaway-cb">
                <li><span><img className="lp-image" src="./assets/images/github.svg" alt=""/></span></li>
              </a>
            </p>
          </section>

          <div class="full-image5">
            <div class="ptext">
              <span class="border trans">
                Michael Gervasoni
              </span>
            </div>
          </div>

          <section class="section section-dark">
            <h2>Michael Gervasoni</h2>
            <p>
              Full stack web developer<br/>
              I'm currently at Learn Academy in San Diego learning JavaScript, ReactJS, Ruby on Rails, PostgreSQL stack. Additionally, I am participating in a summer blockchain incubator for UCSD. I have a Materials Engineering background (UCLA Summa Cum Laude) and have authored publications and a patent. I’ve been coding since I was about 14 years old and recently decided to make a lasting career out of it.
              I love to be challenged and the feeling of solving complex problems really drives me in my work as a software developer.
              I’m currently looking for my first position in software development in my path to becoming a full stack software engineer.
            </p>
            <p className="list">
              <a href="https://www.linkedin.com/in/michael-gervasoni-a019b830">
                <span><img className="lp-image" src="./assets/images/linkedin.svg" alt=""/></span>
              </a><br/>
              <a href="https://github.com/GGi1">
                <span><img className="lp-image" src="./assets/images/github.svg" alt=""/></span>
              </a>
            </p>
          </section>

          <div class="full-image6">
            <div class="ptext">
              <span class="border trans">
                Deiter Hofstetter
              </span>
            </div>
          </div>

          <section class="section section-dark">
            <h2>Deiter Hofstetter</h2>
            <p>
              Full stack web developer<br/>
              Extensive experience in various industries, including FDA regulated, dealing with software development, sustainment, and support, worldwide customer relations, customer management, systems engineering, automation, and software quality in organizations that strive to provide best in class products. Known for hiring, developing, coaching, and managing individuals to become highly effective team players and subject matter experts. Highly adaptable to change and quick to come up to speed in fast paced and high energy environments. Able to assess procedures, policies, and systems in a holistic manner which provides an insightful perspective on issues, develop strategies to reduce inefficiencies, and drive customer success.
            </p>
            <p className="list">
              <a href="https://www.linkedin.com/in/deiterhofstetter">
                <li><span><img className="lp-image" src="./assets/images/linkedin.svg" alt=""/></span></li>
              </a><br/>
              <a href="https://github.com/dhofst01">
                <li><span><img className="lp-image" src="./assets/images/github.svg" alt=""/></span></li>
              </a>
            </p>
          </section>



          <div class="full-imagefunny">
            <div class="ptext">
              <span class="border">
                About Us
              </span>
            </div>
          </div>
        </body>
  </div>

    )
  }
}

export default Aboutus
