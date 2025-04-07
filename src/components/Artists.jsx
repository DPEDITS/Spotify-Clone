import React from "react";
import "./Cards.css";

const cardsData = [
  {
    title: "Pritam",
    artist: "Artist",
    image: "https://koshalworld.com/siteuploads/thumb/sft98/48619_5.jpg",
    href: "https://open.spotify.com/artist/1wRPtKGflJrBx9BmLsSwlU"
  },
  {
    title: "Arijit Singh",
    artist: "Artist",
    image: "https://imgs.search.brave.com/fScXqM0c_UPFjoSc11wrkcbXWGzjvoIG7n0KYWBU3VA/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2VuaXVzLmNv/bS80YWQ2ZDczZGJk/N2QwY2E0YWJlY2Rh/YWI2ZWVlMGUyMC4x/MDAweDEwMDB4MS5w/bmc",
    href: "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw"
  },
  {
    title: "A.R. Rahman",
    artist: "Artist",
    image: "https://imgs.search.brave.com/v42HwHrNW29KhNvmW68HiAIeq9QKUuP50rY-zwP3p5U/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvT3hkM3h6UGJn/Vi9kM3hEbzFvRTNn/L3NpemVfbV8xNzM1/OTk5NDE5LmpwZw",
    href: "https://open.spotify.com/artist/1mYsTxnqsietFxj1OgoGbG"
  },
  {
    title: "Sachin-Jigar",
    artist: "Artist",
    image: "https://imgs.search.brave.com/Wxuj67La2IPVU5Rve278CJdtJqoDaPrDygyLTklzFpo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvNFo5YnFnbzN5/US85YnFaN1hNZUt5/L3NpemVfbS5qcGc",
    href: "https://open.spotify.com/artist/1mBydYMVBECdDmMfE2sEUO"
  },
  {
    title: "Vishal Shekhar",
    artist: "Artist",
    image: "https://pagalall.com/wp-content/uploads/Pal-Pal-Afusic-pagalall.com_.jpg",
    href: "https://open.spotify.com/artist/6Mv8GjQa7LKUGCAqa9qqdb"
  },
  {
    title: "Atif Aslam",
    artist: "Artist",
    image: "https://imgs.search.brave.com/b_T4j-lWHV5M0gjNDzV4sgs0deKFO_t6tgko-ClSLdc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS83/NDEvSmhvbC1QdW5q/YWJpLTIwMjQtMjAy/NTAzMjcxNjMyMzAt/NTAweDUwMC5qcGc",
    href: "https://open.spotify.com/artist/2oSONSC9zQ4UonDKnLqksx"
  },
];

const Cards = () => {
  const handleClick = (href) => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <div className="cards-container1">
      {cardsData.map((card, index) => (
        <button
          className="cardstrend"
          key={index}
          onClick={() => handleClick(card.href)}
        >
          <div className="card1">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.artist}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Cards;
