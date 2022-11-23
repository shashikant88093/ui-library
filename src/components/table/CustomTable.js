import React from 'react';
import { Table, Column,AutoSizer } from 'react-virtualized';
// import styled from 'styled-components'
import 'react-virtualized/styles.css'
import CustomTableDatas from '../../jsonData/CustomTableDatas.json'
import './CustomTable.css'
const header = [{
    label: "ID",
    columnName: "id"
},{
    label: "Material Description",
    columnName: "materialDescription"
},
{
    label: "Product Hierarchy",
    columnName: "productHierarchy"
},
{
    label: "Materail Group",
    columnName: "materailGroup"
},
{
    label: "Country Of Origin",
    columnName: "countryOfOrigin"
},
{
    label: "Catalog Number",
    columnName: "catalogNumber"
},
{
    label: "Materail Type",
    columnName: "materailType"
},
{
    label: "Prediction",
    columnName: "prediction"
}, {
    label: "Confidence",
    columnName: "confidence"

}
]


// const Cell = styled.div`
//   background: white;
//   height: 1rem;
//   margin-bottom:0.5rem;
//   padding:0.5rem;
//   box-shadow:1px 4px #000000 25%;
//   border-radius:0.2rem;

// `
export default function CustomTable() {
    const [tableData] = React.useState(CustomTableDatas);
    console.table(CustomTableDatas, "CustomTableDatas")
    return (
        <div className="tableLayout">
        <AutoSizer>
        {({ width}) => (
            <Table
            rowClassName='table-row'
                width={width}
                height={600}
                headerHeight={40}
                rowHeight={40}
                rowCount={tableData.length}
                rowGetter={({ index }) => tableData[index]}
            >
                {
                    header?.map((item, index) => 
                        <Column key={index} label={item?.label} dataKey={item?.columnName}  width={item?.columnName==="id"?width*0.1 :width * 0.2}  headerClassName="table-header"  cellClassName="cc"/>
                    )
                }

            </Table>
        )}
          </AutoSizer>
          </div>
    )
}
