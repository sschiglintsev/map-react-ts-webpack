import React from 'react';
import {Map} from "./components/Map/Map";
import {Main} from "./components/Main/Main";
import style from "./App.module.scss"

function App() {

    return (
        <div className={style.app}>
            <Main/>
            <Map/>
        </div>
    );
}

export default App;
