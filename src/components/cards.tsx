"use client";

import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faFire, faEarListen } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  useEffect(() => {
    const cards = document.getElementById("cards");
    if (cards) {
      cards.onmousemove = (e) => {
        const cardList = document.getElementsByClassName("card");
        for (let i = 0; i < cardList.length; i++) {
          const card = cardList[i] as HTMLElement;
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      };
    }
  }, []);

  return (
    <div id="gradient" className="w-full flex justify-center pt-5 pb-5">
      <div id="cards">
        <div className="card bg-pink-300 dark:bg-neutral-800 opacity-70">
          <div className="card-content bg-slate-200 dark:bg-neutral-900">
            <div className="card-image">
              <FontAwesomeIcon
                icon={faBolt}
                className="text-9xl duration-200"
                color="#525252"
              />
            </div>
            <div className="card-info-wrapper">
              <div className="card-info-title">
                <h3 className=" font-space-grotesk">⚡ Rapide</h3>
                <h4 className=" text-neutral-600 dark:text-neutral-400">
                  Si je ne me trompe pas jamais vous n{"'"}aurez de staff aussi
                  rapide
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-purple-300 dark:bg-neutral-800 opacity-70">
          <div className="card-content bg-yellow-100 dark:bg-neutral-900">
            <div className="card-image">
              <FontAwesomeIcon
                icon={faFire}
                className="text-9xl duration-200"
                color="#525252"
              />
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3 className=" font-space-grotesk">🤩 Passionés</h3>
                  <h4 className=" text-neutral-600 dark:text-neutral-400">
                    Une équipe de vrai passionés, des joueurs avant tout !
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-pink-300 dark:bg-neutral-800 opacity-70">
          <div className="card-content bg-blue-100 dark:bg-neutral-900">
            <div className="card-image">
              <FontAwesomeIcon
                icon={faEarListen}
                className="text-9xl duration-200"
                color="#525252"
              />
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3 className=" font-space-grotesk">👂 À l{"'"}écoute</h3>
                  <h4 className=" text-neutral-600 dark:text-neutral-400">
                    Souvent ressorti, nous essayons d{"'"}implémenter vos
                    suggestion
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
