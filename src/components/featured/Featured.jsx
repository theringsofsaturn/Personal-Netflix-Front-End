import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured() {
    return (
        <div className="featured">
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

            <div className="info">
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />

                <span className="desc">
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectet
                </span>
                <div className="buttons">
                    <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                    </button>
                    <button className="more">
                    <InfoOutlinedIcon/>
                    <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
