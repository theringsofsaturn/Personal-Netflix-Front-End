import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  // to select and get the refernce of the elements we use ref hook, useRef() does the same thing as querySelector or getElementById. But since we cannot use vanilla Javascript here...
  const listRef = useRef();

  // function that handles the arrows to slide 230px when clicked
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")} // on click function for arrow to slide 230 px left and right
          style={{ display: !isMoved && "none" }} // if it's not moved it's gonna be none. So, at first we will not see the arrow at the left, but if we click the right arrow and move the slide, then isMoved === true, so we will see the left arrow and click to slide.
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
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")} // on click function for arrow to slide 230 px left and right
        />
      </div>
    </div>
  );
};

export default List;
