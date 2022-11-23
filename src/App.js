import React,{useState} from "react";
import "./App.css";
// import CustomTable from './components/table/CustomTable'
import CustomTableData from "./components/table/CustomTableData";
import CustomTableDatas from "./jsonData/CustomTableDatas.json";
// import { CSSProperties } from "@material-ui/core/styles/withStyles";
// import { useSelector, useDispatch } from "react-redux";
// import { getTableData } from "./store/customTableStore/customTableReducer";
// import Card from './components/dropZone/index'
// import { Select, MenuItem } from "@material-ui/core";
// import TableForm from "./components/tableForm/TableForm";
// import ToDo from "./components/todo/index.js";
// import Sidenavbar from "./components/sideNav/Sidenavbar";
// import TableDialog from "./components/tableDialog/TableDialog";


function App() {
  // const [tableData, setTableData] = Reac//t.useState(CustomTableDatas);
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(getTableData);
  // }, []);

  return (
    <div className="App">
      {/* <CustomTable/> */}
      <CustomTableData data={CustomTableDatas}  />
      {/* <TableForm /> */}
     {/* <ToDo /> */}
     {/* <Sidenavbar/> */}
     {/* <TableDialog/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
