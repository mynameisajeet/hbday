import React from 'react';
import './App.css';
import BirthdayCard from './Components/BirthdayCard';
import MusicPlayer from './Components/MusicPlayer';
import Footer from './Components/Footer';
import Header from './Components/Header';
import img1 from './Components/img1.jpeg';
import img2 from './Components/img2.jpeg';
import img3 from './Components/img3.jpeg';
import img4 from './Components/img4.jpeg';
import img5 from './Components/img5.jpeg';


function App() {

  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="App">
       <Header images={images} />
     
      <BirthdayCard />
      <MusicPlayer />
      <Footer name="AMIT" />
    </div>
  );
}

export default App;
