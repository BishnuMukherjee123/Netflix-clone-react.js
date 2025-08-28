import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";

function TitleCard({ title, category, className = "md:mb-7.5" }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    setApiData(category);

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, [category]);

  const { loading} = useSelector((state) => state.anime);
  console.log("Loading==", loading);

  return (
    <div className={`md:mt-12.5 mt-5 mb-0 ${className}`}>
      <h2 className="mb-2">{title ? title : "Popular on Netflix"}</h2>
      <div
        className="flex gap-2.5 overflow-x-auto scrollbar-hide"
        ref={cardsRef}
      >
        {loading? <Loading/> :apiData.map((card) => {
          return (
            <Link
              to={`/player/${card.mal_id}/${card.youtube}/${card.title}`}
              className="relative"
              key={card.id}
            >
              <img
                src={card.image}
                alt=""
                className="md:w-[240px] w-[170px] max-h-35 object-cover max-w-none rounded-[4px] cursor-pointer"
              />
              <p className="absolute md:text-[17px] text-[12px] bottom-2.5 right-2.5">{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCard;
