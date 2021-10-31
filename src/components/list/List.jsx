import "./list.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const List = () => {
    return (
        
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
            <ArrowBackIosNewOutlined/>
            <div className="container">

            </div>
            <ArrowForwardIosOutlined/>
            </div>
        </div>
    )
}

export default List
