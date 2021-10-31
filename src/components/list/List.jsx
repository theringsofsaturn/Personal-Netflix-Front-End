import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useRef } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const List = () => {
  const listRef = useRef();

  // function that handles the arrows to slide 230px when clicked
  const handleClick = (direction) => {
    // to select and get the refernce of the elements we use ref hook, useRef() does the same thing as querySelector or getElementById. But since we cannot use vanilla Javascript here...
    if (direction === "left") {
      listRef.current.style.transform = `translateX(230px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")} // on click function for arrow to slide 230 px left
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")} // on click function for arrow to slide 230 px right
        />
      </div>
    </div>
  );
};

export default List;
