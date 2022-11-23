import React, { useEffect } from "react";
const headers = ["h1", "h2", "h3", "h4"];

export default function TableForm() {
  const [formData, setFormData] = React.useState([
    { h1: "", h2: "", h3: "", h4: "" },
  ]);

  const handleBlur = (e, index) => {
    const { name, value } = e.target;
    const updateUser = formData.map((user, i) =>
      index === i ? Object.assign(user, { [name]: value }) : user
    );
    console.log(updateUser, "updateUser");
    setFormData(updateUser);
  };

  console.log(formData, "formData");

  const addRow = (e) => {
    e.preventDefault();
    setFormData([...formData, { h1: "", h2: "", h3: "", h4: "" }]);
    // rendom id in formadata array for each row
  };

  const deleteRow = (index) => {
  let deleteUser = [...formData];
    deleteUser.splice(index, 1);
    console.log(deleteUser, "deleteUser");
    setFormData(deleteUser);
  };
  return (
    <div>
      <table>
        <tr>
          {headers.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
          <th onClick={addRow}>Add</th>
        </tr>
        <tbody>
          {formData.length > 0 &&
            formData.map((formItem, formIndex) => {
              return (
                <tr key={formIndex}>
                  {headers.map((headerItem, headerIndex) => {
                    return (
                      <td key={headerIndex}>
                        <input
                          key={headerIndex}
                          rowIdx={formItem.id}
                          type="text"
                          defaultValue={formItem[headerItem] || ""}
                          name={headerItem}
                          onChange={(e) => handleBlur(e, formIndex)}
                        />
                      </td>
                    );
                  })}
                  <td onClick={() => deleteRow(formIndex)}>delete</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
