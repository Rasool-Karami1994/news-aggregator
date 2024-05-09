import { useState } from "react";
import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
const Card = () => {
  const [filledHeart, setFilledHeart] = useState(null);
  const cardData = {
    title: "Sdfsdfdsfsdfsdffffffggggggggggggggggggh",
    date: new Date(),
    source: "Cnn",
    category: "Football",
    link: "http://www.google.com",
    imageUrl:
      "https://cleantechnica.com/wp-content/uploads/2024/05/Tesla-Cybertruck-Off-Road-Guide-Cover-Screenshot-1600x890-1-800x445.png",
  };
  function LinkIcon() {
    return (
      <IconContext.Provider
        value={{
          color: "#5f4dee",
          size: "10px",
          cursior: "pointer",
        }}
      >
        <div
        // onClick={() => {
        //   setSearchBarDrawerShow(!searchBarDrawerShow);
        // }}
        >
          <FaExternalLinkAlt />
        </div>
      </IconContext.Provider>
    );
  }
  function emptyHeartIcon() {
    return (
      <IconContext.Provider
        value={{
          size: "25px",
          color: "#5f4dee",
          cursior: "pointer",
        }}
      >
        <div
          onClick={() => {
            setFilledHeart(!filledHeart);
          }}
        >
          <MdOutlineFavoriteBorder />
        </div>
      </IconContext.Provider>
    );
  }
  function filledHeartIcon() {
    return (
      <IconContext.Provider
        value={{
          color: "#5f4dee",
          size: "25px",
          cursior: "pointer",
        }}
      >
        <div
          onClick={() => {
            setFilledHeart(!filledHeart);
          }}
        >
          <MdOutlineFavorite />
        </div>
      </IconContext.Provider>
    );
  }
  return (
    <div className="card-container">
      <div className="card-contentContainer">
        <div className="card-sourceAndDate-section">
          <span>by</span>
          <span>{cardData?.source}</span>
          <span>-</span>
          <span>{cardData?.date.toDateString()}</span>
        </div>
        <p>{cardData?.title.slice(0, 150)}</p>
        <a href={cardData?.link}>
          {cardData?.link.slice(0, 30)}&nbsp;
          {LinkIcon()}
        </a>
        <div className="card-addToFeeds">
          {filledHeart ? filledHeartIcon() : emptyHeartIcon()}
          <span>add to feed</span>
        </div>
      </div>
      <div className="card-imageContainer">
        <img src={cardData?.imageUrl}></img>
      </div>
    </div>
  );
};
export default Card;
