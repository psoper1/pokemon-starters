import choosestarter from "../imgs/choosestarter.png";

function StarterHeader() {
    return (
        <div className="col-sm-12 text-center">
            <img className="header-image" src={choosestarter} alt="choose-game" />
        </div>
    )
}

export default StarterHeader;