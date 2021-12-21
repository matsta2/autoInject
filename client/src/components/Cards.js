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
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Partneris'
              path='/services'
            />
            <CardItem
              src='images/bosch.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Partneris'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Hella-logo.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Partneris'
              path='/services'
            />
            <CardItem
              src='images/honda.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Partneris'
              path='/products'
            />
            <CardItem
              src='images/pirelli.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Partneris'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;