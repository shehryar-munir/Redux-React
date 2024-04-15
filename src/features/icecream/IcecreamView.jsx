import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {ordered, restocked} from "./icecreamSlice";

export const IcecreamView = () => {

    const noOfIcecreams = useSelector(state => state.icecream.noOfIcecreams)
    const dispatch = useDispatch();

    const orderIcecream = () => {
        dispatch(ordered())
    }

    const restockIcecream = (noOfIcecreams) => {
        dispatch(restocked(noOfIcecreams))
    }

    return (
        <div>
            <h1>Icecream View</h1>
            <p>No Of Icecreams {noOfIcecreams} </p>
            <button onClick={()=> orderIcecream()}>Order Icecreams</button>
            <button onClick={()=> restockIcecream(15)}>Restock Icecreams</button>
        </div>
    )
}