import Bulbasaur from "./Bulbasaur";
import axios from 'axios';
import GameChoice from "./GameChoice";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import RedVersion from "./RedVersion";
import StarterHeader from "./StarterHeader";
import { useState, useEffect } from 'react';
import Charmander from "./Charmander";
import Squirtle from "./Squirtle";

function SplashPage({ page, setPage }) {
    const [data, setData] = useState({ red: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.jsonkeeper.com/b/FC6Q',
            );

            setData(result.data);
        };

        fetchData();
    }, []);
    return (
        <>
            <Navbar setPage={setPage} />
            {page === 'splash' && <MainHeader />}
            {page === 'SameVersion' && <StarterHeader />}
            {page === 'splash' && <GameChoice setPage={setPage} />}
            {page === 'SameVersion' && <RedVersion setPage={setPage} />}
            {page === 'bulbasaur' && <Bulbasaur data={data} page={page} setPage={setPage} />}
            {page === 'charmander' && <Charmander data={data} page={page} setPage={setPage} />}
            {page === 'squirtle' && <Squirtle data={data} page={page} setPage={setPage} />}
        </>
    )
}

export default SplashPage;