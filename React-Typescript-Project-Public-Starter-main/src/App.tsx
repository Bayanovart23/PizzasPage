import React, {FC, useState} from 'react';
import './App.css';
import AddPizzaForm from "./components/AddPizzaForm";
import {Pizza} from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas";




const App: FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

    const addPizza = (newPizza:Pizza) =>{
        setPizzasList([...pizzasList, newPizza]);
    }

    const updatePizza = (newPizza:Pizza) =>{
        setPizzasList(pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)));
    }
    const deletePizza = (id: number) =>{
        const newPizzaList = pizzasList.filter(pizza => pizza.id != id)
        setPizzasList(newPizzaList);
    }

  return (
    <div className="App">
      <div className={'wrap'}>
          <span className={'heading'}>Our Pizza</span>
          <AddPizzaForm
          addPizza={addPizza}
          />
          <DisplayPizzas
              updatePizza={updatePizza}
              pizzasList={pizzasList}
              deletePizza ={deletePizza}
          />
      </div>
    </div>
  );
}

export default App;
