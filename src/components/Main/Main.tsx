import React from 'react';
import {BlockPoint} from "./BlockPoint/BlockPoint";
import {useAppSelector} from "../../store/Store";
import {v4 as uuidv4} from 'uuid';

export const Main = () => {
    const allPoints = useAppSelector(state => state.root.points)

    const Blocks = allPoints.map((el, ind) => {
        const newKey = uuidv4()
        return <BlockPoint key={newKey} address={el.address} budgets={el.budgets}/>
    })

    return (
        <div>
            {Blocks}
        </div>
    );
};
