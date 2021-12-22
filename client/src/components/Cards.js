import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mumis remia šie partneriai!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Total-Logo.jpg'
              text='Partneris Total, pagrindinis tepalų tiekejas'
              label='Partneris'
              path='/services'
            />
            <CardItem
              src='images/bosch.jpg'
              text='Partneris Bosch, pagrindinis įrangos tiekejas'
              label='Partneris'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Hella-logo.jpg'
              text='Partneris Hella'
              label='Partneris'
              path='/services'
            />
            <CardItem
              src='images/honda.jpg'
              text='Partneris Honda'
              label='Partneris'
              path='/products'
            />
            <CardItem
              src='images/pirelli.jpg'
              text='Partneris Pirelii'
              label='Partneris'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;