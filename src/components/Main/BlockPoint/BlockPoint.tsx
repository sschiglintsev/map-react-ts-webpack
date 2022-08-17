import React, {FC} from 'react';
import style from './BlockPoint.module.scss'
import {v4 as uuidv4} from "uuid";
import {useAppDispatch} from "../../../store/Store";
import {addCurrentPoint} from "../../../store/root"


type PropsType = {
    address: string,
    budgets: String[],
    latitude: number
    longitude: number
    setCenter:(latitude:number , longitude:number, address:string)=>void
}

export const BlockPoint: FC<PropsType> = ({address,budgets,latitude,longitude,setCenter}) => {
    const dispatch = useAppDispatch()

    let budgetsSort = [...budgets].sort()

    const allButtons = budgetsSort.map((el) => {
            const newKey = uuidv4();
            return <button key={newKey} className={style.button}>{el}</button>
        }
    )

    const currentPoint = () => {
        console.log(latitude, longitude)
        setCenter(latitude, longitude, address)
        dispatch(addCurrentPoint({latitude, longitude,address}))
    }

    return (
        <>
            <div className={style.block} onClick={currentPoint}>
                <div>
                    {address}
                </div>
                <div className={style.buttonContainer}>
                    {allButtons}
                </div>
            </div>

        </>
    );
};
