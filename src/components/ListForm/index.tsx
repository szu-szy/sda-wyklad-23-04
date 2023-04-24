import { useState } from "react";
import { TabType } from "../../App";

type ListFormProps = {
  setTab: (_id: string, name: string, lastName: string) => void;
};

export const ListForm = ({setTab}: ListFormProps) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAddPerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomID = Math.floor(Math.random() * 100000).toString();
    

    if (name.length > 0 && lastName.length > 0)
      setTab(randomID, name, lastName);
    else alert("wpisz dane kolego");
  };

  return (
    <>
      <form onSubmit={handleAddPerson}>
        <label htmlFor="name">
          Imie: <br />
          <input
            id="name"
            type="text"
            placeholder="imie"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required // required={true}
          />
        </label>
        <br />
        <label htmlFor="lastName">
          Nazwisko: <br />
          <input
            id="lastName"
            type="text"
            placeholder="nazwisko"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </label>
        <button type="submit">Dodaj</button>
      </form>
      <p>
        Nowe imie {name} {lastName}
      </p>
    </>
  );
};
