import "./listItem.scss";
import "../list/List";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

const ListItem = ({ index }) => {
  // top position of the list item is perfect with sass style &:hover{top: -150px;} in .listItems{}
  // the problem is the left and right side that will not display correctly. So, we need this hook to control the hover translation for the left and right side.

  // the film cover when it's not hovered is 225px.
  // when it's hovered it's 325px
  // there is 100px difference -->>
  // if I split them in half = 112.5 (no hover) and 162.5px (when hovered) --> 50px on both sides
  // I need to sutract this 50px to center it

  // list items (movie covers carousel) will have indexes as a prop like <ListItem index={0}/>, <ListItem index={1}/> etc... in List.jsx component where it's called

  // hovering the first index will be:
  // (index*225) - 50
  // (0*225) -50 = -50px --> showing left 50px

  // hovering the second index will be:
  // (index*225) - 50
  // (1*225) - 50 = 175px
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      // style for left and right side: if it's hovered -> index * 225 - 50 (see above comments)
      // index is taken as prop here in ListItems component
      // to totally center it:
      // (index * 225) - 50 + (index*2.5)
      // (1*225) - 50 + (1*2.5) = 177.5px
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      // eventListener function for hovering over film items
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
