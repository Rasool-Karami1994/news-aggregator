import { useState } from "react";
import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import defaultImg from "../assets/dontation_ukraine.4efc4e23e6c5dad61f94.jpg";
const Card = (props) => {
  let recivedData = props.props;
  console.log(recivedData);
  const [filledHeart, setFilledHeart] = useState(null);

  function LinkIcon() {
    return (
      <IconContext.Provider
        value={{
          color: "#5f4dee",
          size: "10px",
          cursior: "pointer",
        }}
      >
        <div>
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
          <span>{recivedData?.source}</span>
          <span>-</span>
          <span>
            {
              recivedData?.date
              // ?.toDateString()
            }
          </span>
        </div>
        <p>{recivedData?.name?.slice(0, 150)}</p>
        <a href={recivedData?.urlName}>
          {recivedData?.urlName?.slice(0, 30)}&nbsp;
          {LinkIcon()}
        </a>
        <div className="card-addToFeeds">
          {filledHeart ? filledHeartIcon() : emptyHeartIcon()}
          <span>add to feed</span>
        </div>
      </div>
      <div className="card-imageContainer">
        <img
          src={recivedData?.imageUrl ?? defaultImg}
          loading="lazy"
          alt="card-image"
        ></img>
      </div>
    </div>
  );
};
export default Card;
