import React, { useState, useRef, useEffect } from "react";
import "./Cards.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cardsData = [
  {
    title: "Maand",
    artist: "Bayaan, Hasan Raheem, Rovalio",
    image: "https://raag.fm/image/250/28811/Safar_Bayaan,_Hasan_Raheem,_Rovalio.jpg",
    songUrl: "https://raag.fm/files/mp3/128/Hindi/28811/Maand%20-%20(Raag.Fm).mp3"
  },
  {
    title: "Paaro",
    artist: "Aditya Rikhari",
    image: "https://imgs.search.brave.com/fScXqM0c_UPFjoSc11wrkcbXWGzjvoIG7n0KYWBU3VA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2VuaXVzLmNv/bS80YWQ2ZDczZGJk/N2QwY2E0YWJlY2Rh/YWI2ZWVlMGUyMC4x/MDAweDEwMDB4MS5w/bmc",
    songUrl: "https://pagalfree.com/musics/128-Paaro%20-%20Aditya%20Rikhari%20128%20Kbps.mp3"
  },
  {
    title: "Finding Her",
    artist: "Khusagra, Bharath, Saaheal",
    image: "https://imgs.search.brave.com/v42HwHrNW29KhNvmW68HiAIeq9QKUuP50rY-zwP3p5U/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvT3hkM3h6UGJn/Vi9kM3hEbzFvRTNn/L3NpemVfbV8xNzM1/OTk5NDE5LmpwZw",
    songUrl: "https://pagalfree.com/musics/128-Finding%20Her%20-%20Kushagra%20128%20Kbps.mp3"
  },
  {
    title: "Heer",
    artist: "Ali & Shjr, Haider Ali, Ali Raza",
    image: "https://imgs.search.brave.com/Wxuj67La2IPVU5Rve278CJdtJqoDaPrDygyLTklzFpo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvNFo5YnFnbzN5/US85YnFaN1hNZUt5/L3NpemVfbS5qcGc",
    songUrl: "https://pagalfree.com/musics/128-Heer%20-%20Haider%20Ali%20128%20Kbps.mp3"
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
    songUrl: "https://raag.fm/files/mp3/128/Punjabi-Singles/28781/Jhol%20-%20(Raag.Fm).mp3"
  }
];

const Cards = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

  const showNotification = (title, image) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification("Now Playing 🎵", {
        body: title,
        icon: image
      });
    }
  };

  const showInAppToast = (title) => {
    toast.info(`🎶 Now Playing: ${title}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: false,
      draggable: false,
    });
  };

  const handlePlay = (songUrl, title, image) => {
    if (audioRef.current) {
      if (currentSong === songUrl) {
        audioRef.current.pause();
        setCurrentSong(null);
      } else {
        audioRef.current.src = songUrl;
        audioRef.current.play();
        setCurrentSong(songUrl);
        if (isMobile()) {
          showInAppToast(title);
        } else {
          showNotification(title, image);
        }
      }
    }
  };

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <button
          className="cardstrend"
          key={index}
          onClick={() => handlePlay(card.songUrl, card.title, card.image)}
        >
          <div className="card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.artist}</p>
          </div>
        </button>
      ))}
      <audio ref={audioRef} />
      <ToastContainer />
    </div>
  );
};

export default Cards;
