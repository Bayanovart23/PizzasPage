import React, {FC} from 'react';
import {Pizza} from "../models/Pizza";
import './styles.css'
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps{
    pizzasList: Pizza[]
    updatePizza: (newPizza : Pizza) => void
    deletePizza: (id: number) => void
}
const DisplayPizzas : FC <DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {
    return (
        <div className={'container'}>
            {pizzasList.map((pizza)=>{
                return <SinglePizza deletePizza={deletePizza} updatePizza={updatePizza} pizza={pizza} key={pizza.id}/>
            })}
        </div>
    );
};

export default DisplayPizzas;