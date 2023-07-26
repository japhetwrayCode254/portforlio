import { FacebookRounded, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import './App.css';
import Navbar from './component/navbar';
import image from './assets/images/japhet2.jpg'
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <div className='social1'>
            <FacebookRounded className='social-icon' />
            <Twitter className='social-icon'/>
            <Instagram className='social-icon'/>
            <LinkedIn className='social-icon'/>
          </div>
          <div className='social2'>
            <span className='name'>
              Hi , I'm Japhet a web developer
            </span>
            <span className='talk'>
              I have been working as a web developer<br></br> 
              for 2 years developing small scale and medium <br></br>scale projects
              that are responsive, <br></br>fast and easy to use.
            </span>
            <div className="btn-container">
              <button className='btn1'>Contact Me</button>
              <button className='btn2'>Learn More</button>
            </div>
          </div>
          <div className='social3'>
            <img src={image} alt='no image' className='img'/>
          </div>
        </div>
        <div className='build-tools'>
          <div className='build-title'>
              <span className='title-text'>Build Tools</span>
          </div>
          <div className='build-body'>
            <div className='build-frontend'>
              <span>Frontend tools</span>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className='build-backend'>
              <span>Backend tools</span>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className='build-cms'>
              <span>CMS</span>
              <ul>
                <li>WordPress</li>
                <li>Joomla</li>
                <li>Shopify</li>
                <li>Workflow</li>
              </ul>
            </div>
            <div className='build-backend'>
              <span>Backend tools</span>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className='build-cms'>
              <span>CMS</span>
              <ul>
                <li>WordPress</li>
                <li>Joomla</li>
                <li>Shopify</li>
                <li>Workflow</li>
              </ul>
            </div>
          </div>
  
        </div>
      </div>
      <div className="c-container">
          <p> © 2022 JaphetCode. All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
