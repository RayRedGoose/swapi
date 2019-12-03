import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import CharacterBox from '../CharacterBox/CharacterBox';
import './CharactersPage.scss';

const CharactersPage = () => {

  return (
    <section>
      <UserProfile />
      <h2></h2>
      <section>
        <p>{/* Dynamic text from API*/}</p>
      </section>
      <CharacterBox />
    </section>
  )
}

export default CharactersPage;
