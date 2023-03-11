import red from '../imgs/red-cover.png';
import blue from '../imgs/blue-cover.png';

function GameChoice({ setPage }) {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col redandblue">
                        <button onClick={() => setPage('SameVersion')} type="button" className="btn btn-link shadow-none"><img className="red" src={red} alt="red" /></button>
                    </div>
                    <div className="col redandblue">
                        <button onClick={() => setPage('SameVersion')} type="button" className="btn btn-link shadow-none"><img className="blue" src={blue} alt="blue" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameChoice;