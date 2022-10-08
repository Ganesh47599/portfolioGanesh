import React from 'react'
import './Home.css'
import profileImge from '../assets/img/ganesh.jpg'
import linkendinicon from '../assets/img/socialicons/linkedin.png'
import InstagramIcon from '../assets/img/socialicons/instagram.png'
import GithubIcon from '../assets/img/socialicons/github.png'
import MailIcon from '../assets/img/socialicons/email.png'
import {Link} from 'react-router-dom'
import Pdf from '../assets/pdf/resume.pdf'
function Home() {
  return (
   <div id="home">
    <div className='container'>
        <div className='row'>
            <div className='col-sm-5'>
                <div className='imgsec'>
                    <img src={profileImge} data-aos="flip-right" alt='Ganesh Pitchuka' className='img-fluid'/>
                    <div className='socialmedia'>
                        <a href='https://www.linkedin.com/in/pitchuka-durga-sai-ganesh-3b92b31a8'
                        target='_blank'
                        rel="noreferree"
                        >
                            <img src={linkendinicon} alt='linkedin' data-aos="fade-right" data-aos-delay='1000'/>
                        </a>
                        <a href='https://github.com/Ganesh47599' target='_blank'
                        rel="noreferree">
  <img src={GithubIcon} alt='github' data-aos="fade-right" data-aos-delay='1000'/>
                        </a>
                        <a href='https://www.instagram.com/pitchuka18' target='_blank'
                        rel="noreferree">
  <img src={InstagramIcon} alt='Instagram' data-aos="fade-right" data-aos-delay='1000'/>
                        </a>
                        <a href='mailto:ganeshyt84@gmail.com' target='_blank'
                        rel="noreferree">
  <img src={MailIcon} alt='email' data-aos="fade-right" data-aos-delay='1000'/>
                        </a>
                    </div>
                    <div className='bgblack' data-aos="fade-right"></div>
                </div>
            </div>
            <div className='col-sm-5 offset-sm-2'>
                <div className='rightcontent' data-aos="fade-right">
                    <h1>Ganesh Pitchuka</h1>
                    <h2>Front End Developer</h2>
                    <br/>
                    <div className='row'>
                        <div className='col-sm-4 col-6'>
                            <a href={Pdf}  target='_blank'
                        rel="noreferree">
                            <button type='button' className='btn btn-primary'>Resume</button>
                        </a>

                        </div>
                        <div className='col-sm-5 col-6'>
                            <Link to='/contact'>
                                <button type='button' className='btn btn-primary'>
                                    Hire me
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Home