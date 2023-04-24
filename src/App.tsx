import React, { useState } from "react";
import "./App.scss";
import { ListItem } from "./components/ListItem";
import { Counter } from "./components/Counter";
import { ListForm } from "./components/ListForm";

export type TabType = {
  _id: string;
  name: string;
  lastName: string;
};

const App = () => {
  // krok 1 tworzymy stan listy osób
  const [tab, setTab] = useState<TabType[]>([]);
  // krok 2 tworzymy handlera który dodaje nam do listy obiekt {_id: random, name: 'test', lastName: 'test'}
  // krok 2.5 generujemy randomowe id w handlerze z kroku 2, const random = Math.floor(Math.random() * 100000).toString()

  // krok 3 tworzymy handlera która usunie nam daną osobe z listy - utworzona funkcja bedzie przekazana oraz wywolywana w ListItem
  const handleDelete = (id: string) =>
    setTab((prev) => prev.filter(({ _id }) => _id !== id));

  const handleNewPerson = (_id: string, name: string, lastName: string) => {
    const newPerson = {
      _id,
      name, // name: name
      lastName, // lastName: lastName
    };

    setTab((prev) => [...prev, newPerson]);
  }

  return (
    <div className="App">
      {/* <Counter /> */}
      <h1>Nasza tablica osób</h1>
      <ul>
        {tab.map(({ _id, name, lastName }) => (
          <ListItem
            key={_id}
            _id={_id}
            itemName={name}
            itemLastName={lastName}
            handleDelete={handleDelete}
            // isReadOnly === isRadOnly={true}
          />
        ))}
      </ul>
      <ListForm setTab={handleNewPerson} />
    </div>
  );
};

export default App;
