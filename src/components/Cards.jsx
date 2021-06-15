import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (

    <>
    <div className='cards'>
      <h3>Our Main ATTRACTIONS  to Visit!</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-21.jpg'
              text="Brandenburg Gate in Berlin's Mitte district was the city's first Neoclassical struture.Measuring and impressive 26 meter in height including Quadriga."
              label="Berlin's Brandenburg Gate"
            />
            <CardItem
              src='images/img-18.jpg'
              text='One of main attraction in Germany,It was biult in 1961 , After WW2 it extended some 155km.'
              label='The Berlin Wall'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-23.jpg'
              text='The old Franconian imperial city of Rothenburg, one of the most attractive places in Germany.'
              label='Rothenburg ob der Tauber'
            />
            <CardItem
              src='images/img-30.jpg'
              text="Belin's world-famous Museumsinsel, or Museum Island, lies between the River Spree and the Kupfergraben."
              label="Berlin's Museum Island"
            />
            <CardItem
              src='images/img-19.jpg'
              text='The beautiful Black Frest with its dark, densely-wooded hills is one of the most visited upland regions in all of Europe.'
              label='The Black Forest'
            />
          </ul>
        </div>
      </div>
    </div>





<div className='cards'>
<h3>Our Official Supponsers!</h3>
<div className='cards__container'>
  <div className='cards__wrapper'>
    <ul className='cards__items'>
      <CardItem
        src='images/image-16.jpg'
        text='SHAKIR MADICAL STORE // VILLAGE NIZAM PURA KASUR'
        label='PHARMACY'
      />
      <CardItem
        src='images/image-17.jpg'
        text='SHAKIR NURSERY HOUSE // VILLAGE NIZAM PURA KASUR '
        label='NURSERY'
      />
    </ul>
  
  </div>
</div>
</div>

</>






  );
}

export default Cards;