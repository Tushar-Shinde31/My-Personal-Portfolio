import React from 'react'
import './Header.css'

import Facts from '../../ui/Facts'
import SocialHandles from '../../ui/SocialHandles';
import BreathCircle from '../../ui/BreathCircle';


const code = `
const developer = {
            firstName: 'Tushar',
            lastName: 'Shinde',
            aka: 'tusharshinde',
            hobby: () => {
              //eat();
              //sleep();
              //code();
              //repeat();
            }
            }
              `;

const Header = () => {
  return (
    <header id='header'>
      <BreathCircle/>
      <div className="section__wrapper">
        <div className="grid upper md:flex md:items-center md:justify-between p-4">
          <div className="column left-content w-full md:w-1/2">
            <div className="typing-container">
              <h1 className="typing-text text-2xl md:text-4xl font-bold mb-4">Hi 👋, I'm Tushar</h1>
              <div className="typing-cursor"></div>
            </div>
            <p className='text__muted description text-sm md:text-base mb-6'>
            A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
            </p>
            <div className="button-group flex flex-col md:flex-row gap-4">
              <a href="https://github.com/Tushar-Shinde31" className="btn btn-primary w-full md:w-auto text-center px-6 py-2">
                ⭐ Star Me On Github
              </a>
              <a href="https://drive.google.com/file/d/1VY9JISPNS5yRYotcoTzDg1Hoj8ksjcS1/view?usp=sharing" className="btn btn-secondary w-full md:w-auto text-center px-6 py-2">
                See My Resume
              </a>
            </div>
            <Facts/>
            <SocialHandles/>
          </div>
          <div className="column image-container">
            <div className="profile-wrapper">
              {/* <img 
                src={tushar11} 
                className='profile__photo'
                alt="Profile"
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
