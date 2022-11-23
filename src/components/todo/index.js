import React from 'react'

export default function ToDO() {
const [inputData, setInputData] = React.useState("");
const [items, setItems] = React.useState([]);
const addItem = (e) => {
  e.preventDefault();
if(inputData.length>0){
setItems([...items, inputData]);
setInputData("");
}
}
const handleDelete = (id) => {
  const updatedItems = items.filter((elem, index) => {
    return index !== id;
  });
  setItems(updatedItems);

}
const handleEdit = (id) => {
  const updatedItems = items.filter((elem, index) => {
    return index !== id;
  });
  setItems(updatedItems);
  setInputData(items[id]);
}
  return (
    <div>
      <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)}  />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item,index) => {
          return <li key={index}>{item} <button onClick={() => handleDelete(index)}>Delete</button><button onClick={()=>handleEdit(index)}>Edit</button></li>
        }
        )}
          

      </ul>
    </div>
  )
}


