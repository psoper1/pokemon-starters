import bulbasaur from '../imgs/bulbasaur.png';
import charmander from '../imgs/charmander.png';
import squirtle from '../imgs/squirtle.png';

function RedVersion( { setPage } ) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm redandblue">
                <button onClick={() => setPage('bulbasaur')} type="button" className="btn btn-link shadow-none"><img className="bulbasaur" src={bulbasaur} alt="red"/></button>
                </div>
                    <div className="col-sm redandblue">
                    <button onClick={() => setPage('charmander')} type="button" className="btn btn-link shadow-none"><img className="charmander" src={charmander} alt="red"/></button>
                    </div>
                    <div className="col-sm redandblue">
                    <button onClick={() => setPage('squirtle')} type="button" className="btn btn-link shadow-none"><img className="squirtle" src={squirtle} alt="red"/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RedVersion;