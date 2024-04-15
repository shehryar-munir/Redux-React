import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ordered, restocked} from "./cakeSlice";

export const CakeView = () => {

    const noOfCakes = useSelector(state => state.cake.noOfCakes);
    const dispatch = useDispatch();

    const orderCakes = () => {
        dispatch(ordered())
    }

    const restockCakes = (noOfCakes) => {
        dispatch(restocked(noOfCakes))
    }

    return (
        <div>
            <h1>Cake View </h1>
            <p>No Of Cakes {noOfCakes} </p>
            <button onClick={()=> orderCakes()}>Order Cakes</button>
            <button onClick={()=> restockCakes(10)}>Restock Cakes</button>
        </div>
    )
}