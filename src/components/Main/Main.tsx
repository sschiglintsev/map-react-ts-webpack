import React from 'react';
import {BlockPoint} from "./BlockPoint/BlockPoint";
import {useAppSelector} from "../../store/Store";
import {v4 as uuidv4} from 'uuid';
import style from './Main.module.scss'

type PropsType = {
    setCenter: (latitude: number, longitude: number, address:string) => void
}

export const Main = (props: PropsType) => {
    const allPoints = useAppSelector(state => state.root.points)

    const Blocks = allPoints.map((el, ind) => {
        const newKey = uuidv4()
        return <BlockPoint key={newKey} address={el.address} budgets={el.budgets} latitude={el.latitude}
                           longitude={el.longitude} setCenter={props.setCenter}/>
    })

    return (
        <div className={style.main}>
            {Blocks}
        </div>
    );
};
