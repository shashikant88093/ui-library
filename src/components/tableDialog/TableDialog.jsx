import React from "react";
import "./TableDialog.css";
export default function TableDialog() {
  return (
    <div className="table-dialog">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Technical Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
