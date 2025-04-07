
import React, { useState, useRef } from "react";
import "./Cards.css";

const cardsData = [
  {
    title: "2 Khatole (Lofi Mix)",
    artist: "Masoom Sharma",
    image: "https://koshalworld.com/siteuploads/thumb/sft98/48619_5.jpg",
    songUrl: "https://open.spotify.com/track/4UJ48AH0P1RedAP1NXie9v"
  },
  {
    title: "Paaro",
    artist: "Aditya Rikhari",
    image: "https://imgs.search.brave.com/fScXqM0c_UPFjoSc11wrkcbXWGzjvoIG7n0KYWBU3VA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2VuaXVzLmNv/bS80YWQ2ZDczZGJk/N2QwY2E0YWJlY2Rh/YWI2ZWVlMGUyMC4x/MDAweDEwMDB4MS5w/bmc",
  },
  {
    title: "Finding Her",
    artist: "Khusagra, Bharath, Saaheal",
    image: "https://imgs.search.brave.com/v42HwHrNW29KhNvmW68HiAIeq9QKUuP50rY-zwP3p5U/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvT3hkM3h6UGJn/Vi9kM3hEbzFvRTNn/L3NpemVfbV8xNzM1/OTk5NDE5LmpwZw",
  },
  {
    title: "Heer",
    artist: "Ali & Shjr, Haider Ali, Ali Raza",
    image: "https://imgs.search.brave.com/Wxuj67La2IPVU5Rve278CJdtJqoDaPrDygyLTklzFpo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvNFo5YnFnbzN5/US85YnFaN1hNZUt5/L3NpemVfbS5qcGc",
  },
  {
    title: "Pal Pal",
    artist: "Afusic, AliSoomro Music",
    image: "https://pagalall.com/wp-content/uploads/Pal-Pal-Afusic-pagalall.com_.jpg",
    songUrl: "https://pagalall.com/wp-content/uploads/all/Pal%20Pal%20Afusic%20(pagalall.com).mp3"
  },
  {
    title: "Jhol",
    artist: "Maanu, Annural Khalid",
    image: "https://imgs.search.brave.com/b_T4j-lWHV5M0gjNDzV4sgs0deKFO_t6tgko-ClSLdc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS83/NDEvSmhvbC1QdW5q/YWJpLTIwMjQtMjAy/NTAzMjcxNjMyMzAt/NTAweDUwMC5qcGc",
  },
];

const Cards = () => {
        const [currentSong, setCurrentSong] = useState(null);
        const audioRef = useRef(null);
      
        const handlePlay = (songUrl) => {
          if (audioRef.current) {
            if (currentSong === songUrl) {
              // Pause if the same song is clicked again
              audioRef.current.pause();
              setCurrentSong(null);
            } else {
              // Load and play the selected song
              audioRef.current.src = songUrl;
              audioRef.current.play();
              setCurrentSong(songUrl);
            }
          }
        };
    return (
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <button
              className="cardstrend"
              key={index}
              onClick={() => handlePlay(card.songUrl)}
            >
              <div className="card">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.artist}</p>
              </div>
            </button>
          ))}
          <audio ref={audioRef} />
        </div>
      );
    };
    
    export default Cards;
