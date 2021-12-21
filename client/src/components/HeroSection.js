import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Ar jums trūksta detalių?</h1>
        <p>Mes pasirūpinsime jūsų mašina!</p>
        <div className='hero-btns'>
            
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
              >
              Apie mus <i className='fas fa-info' />
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;