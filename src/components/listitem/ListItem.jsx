import "./listItem.scss";
import "../list/List"
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://i.ytimg.com/vi/7L6BheyqeaM/maxresdefault.jpg" alt="" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon />
          <AddIcon />
          <ThumbUpAltOutlinedIcon />
          <ThumbDownAltOutlinedIcon />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 36 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
          <div className="desc">
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip
          </div>
          <div className="genre">Action</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
