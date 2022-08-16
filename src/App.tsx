import React, {useEffect} from 'react';
import {Map} from "./components/Map/Map";
import {Main} from "./components/Main/Main";
import style from "./App.module.scss"
import {useAppDispatch, useAppSelector} from "./store/Store";
import {getAllPoints, root} from "./store/root";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllPoints())
    }, [])

    return (
        <div className={style.app}>
            <Main />
            <Map />
        </div>
    );
}

export default App;
