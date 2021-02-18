import "./Tile.css";

const imageB = "./assets/images/BlackFigure.png";
const imageW = "./assets/images/WhiteFigure.png";

export default function Tile(props){
    const clickHandler = props.onClick;

    const i = props.i;
    const j = props.j;

    if(j > 4){
        if(i % 2 ===0 && j % 2 ===0){
            return <div className="tile white-tile">
                <div style={{backgroundImage: `url(${imageB})`}} className="black-piece" onClick={clickHandler}/>
                </div>;
        }
        else if(i % 2 !==0 && j % 2 !==0){
            return <div className="tile white-tile">
            <div style={{backgroundImage: `url(${imageB})`}} className="black-piece" onClick={clickHandler}/>
            </div>;
        }
        
    } else if (j < 3){
        if(i % 2 ===0 && j % 2 ===0){
            return <div className="tile white-tile">
            <div style={{backgroundImage: `url(${imageW})`}} className="white-piece" onClick={clickHandler}/>
            </div>;
        }
        else if(i % 2 !==0 && j % 2 !==0){
            return <div className="tile white-tile">
            <div style={{backgroundImage: `url(${imageW})`}} className="white-piece" onClick={clickHandler}/>
            </div>;
        }
    }
    else if (j === 3 || j === 4) {
        if(i % 2 !==0 && j === 3){
            return <div className="tile white-tile"></div>;
        }
        else if(i % 2 ===0 && j === 4){
            return <div className="tile white-tile"></div>;
        }
    }

    return <div className="tile black-tile"></div>;
}