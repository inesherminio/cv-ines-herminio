import React, { Component } from 'react';
import './Main.css';
import photo from '../../assets/foto.jpg';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

class Main extends Component {
  render() {
    return (
      <section className='main-container' id='about-me'>
        <div className='info-container'>
          <img
            src={photo}
            alt='Inês Hermínio'
            className='my-pic'
            loading='lazy'
          />
          <h1 className='my-name'>Inês Hermínio</h1>
          <p className='my-intro'>
            I am a{' '}
            <span className='highlited-info'>Full Stack Web Developer</span> 👩‍💻,
            with a background in Marketing and Strategy 👩‍💼. <br />
            I'm analytic, but also creative, responsible and curious 🛠️. I am
            also a traveler ✈️, experienced fencer 🤺 and Crossfit newbie 🏋.
          </p>
          <div className='icon-container'>
            <a
              href='https://linkedin.com/in/ines-herminio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsLinkedin size={28} className='contact-icon' />
            </a>
            <a
              href='https://github.com/inesherminio/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub size={28} className='contact-icon' />
            </a>
            <a
              href='mailto:inesherminio@gmail.com?subject = We want you!'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MdEmail size={28} className='contact-icon' />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
