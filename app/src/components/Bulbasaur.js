import bulbasaur from '../imgs/bulbasaur.png';

function Bulbasaur({ data }) {
    return(
        <>
        {data.red.filter((bulb) => bulb.name.includes('Bulbasaur')).map(item => (
            <>
            <div className="container chosenpokemon" style={{ width: 500, marginLeft: 742 }}>
                <h1 className="text-center">You Chose {item.name}!</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"><img className="rounded mx-auto d-block" src={bulbasaur} alt="bulbasaur"/></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"><p className="text-center">Pokedex: {item.pokedex}</p>
                                        <p className="text-center">Type: {item.type}</p>
                                        <p className="text-center">Height: {item.height}</p>
                                        <p className="text-center">Weight: {item.weight}</p></th>
                            </tr>
                            <tr>
                                <th scope="row"><p className="text-center">{item.entry}</p></th>
                            </tr>
                        </tbody>
                    </table>
                    </div>
            </>
            ))}
            </>
    )
}

export default Bulbasaur;