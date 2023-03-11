import choose from "../imgs/choose.png";

function MainHeader() {
    return (
        <div className="col-sm-12 text-center">
        <img className="header-image" src={choose} alt="choose-game" />
        </div>
    )
}

export default MainHeader;