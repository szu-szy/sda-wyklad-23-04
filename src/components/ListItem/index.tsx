type ListItemProps = {
  _id: string;
  itemName: string;
  itemLastName: string;
  handleDelete: (id: string) => void;
}

export const ListItem = ({_id, itemName, itemLastName, handleDelete}: ListItemProps) => {


 return(
   <li>{`${itemName} - ${itemLastName}`} <button onClick={() => handleDelete(_id)}>Usuń</button></li>
 )
}
