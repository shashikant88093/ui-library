import React, { forwardRef, useState, useEffect } from "react";
import MaterialTable from "material-table";
// import SearchIcon from '@material-ui/icons/Search';
import "./CustomTableData.css";
import {
  FilterList,
  LastPage,
  FirstPage,
  ChevronRight,
  ChevronLeft,
  Clear,
  Search,
  ArrowDownward,
} from "@material-ui/icons";
import { Select, MenuItem } from "@material-ui/core";
const tableIcons = {
  Filter: forwardRef((props, ref) => (
    <FilterList {...props} ref={ref} style={{ color: "#3301D6" }} />
  )),
  FirstPage: forwardRef((props, ref) => (
    <FirstPage {...props} ref={ref} style={{ color: "#3301D6" }} />
  )),
  LastPage: forwardRef((props, ref) => (
    <LastPage {...props} ref={ref} style={{ color: "#3301D6" }} />
  )),
  NextPage: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} style={{ color: "#3301D6" }} />
  )),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} style={{ color: "#3301D6" }} />
  )),
  ResetSearch: forwardRef((props, ref) => (
    <Clear {...props} ref={ref} style={{ color: "#3301D6" }} />
  )),
  Search: forwardRef((props, ref) => (
    <Search {...props} ref={ref} style={{ color: "#3301D6" }} />
  )),
  SortArrow: forwardRef((props, ref) => (
    <ArrowDownward {...props} ref={ref} style={{ color: "#3301D6" }} />
  )),
};

let readings = [
  {
    value: 100,
    color: "#EE3939",
  },
  {
    value: 0,
    color: "#EEF228",
  },
  {
    value: 0,
    color: "#3FB9E0",
  },
  {
    value: 0,
    color: "#2EDA4A",
  },
];
const Charts = (props) => {
  const parent = props;
  let values =
    parent.readings &&
    parent.readings.length &&
    parent.readings.map(function(item, i) {
      if (item.value > 0) {
        return (
          <div
            className="value"
            style={{ color: "#000000", width: item.value + "%" }}
            key={i}
          >
            <span>{item.value}%</span>
          </div>
        );
      }
    });

  let bars =
    parent.readings &&
    parent.readings.length &&
    parent.readings.map(function(item, i) {
      if (item.value > 0) {
        return (
          <div
            className="bar"
            style={{ backgroundColor: item.color, width: item.value + "%" }}
            key={i}
          ></div>
        );
      }
    });

  return (
    <div className="multicolor-bar">
      <div className="values">{values == "" ? "" : values}</div>
      <div className="bars">{bars == "" ? "" : bars}</div>
    </div>
  );
};

export default function CustomTableData(props) {
  const { data } = props;
  const [state, setState] = useState();

  const CustomFilter = ({ columnDef, onFilterChanged }) => {
    const [selectedVal, setSelectedVal] = useState(0);
    // const [filterList, setFilterList] = useState([]);
    function handleChange(e) {
      const val = e.target.value;
      setSelectedVal(val);
      if (val === "0" || val === 0) {
        onFilterChanged(columnDef.tableData.id, null);
      } else {
        onFilterChanged(columnDef.tableData.id, val);
      }
    }


    return (
      <th>
        <Select value={selectedVal} onChange={handleChange}>
          <MenuItem value={"0"}> Confidence Value</MenuItem>
          <MenuItem value={"40"}>Below 40</MenuItem>
          <MenuItem value={"70"}> Below 70</MenuItem>
          <MenuItem value={"90"}> Above 90</MenuItem>
        </Select>
      </th>
    );
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //dynamic columns
  useEffect(() => {
    const columns = [];
    const cellData = [];
    if (data) {
      const keys = Object.keys(data[0]);
      keys.forEach((key,index) => {
        let obj = {
          index: index,
          title: key,
          field: key.trim(),
          headerStyle: {
            backgroundColor: "#788295",
            color: "#FFF",
            fontSize: "14px",
            fontWeight: "bold",
            with: "10%",
            textAlign: "center",
          },
          cellStyle: {
            backgroundColor: "#FFF",
            color: "#000",
            fontSize: "14px",
            width: "10%",
            textAlign: "center",
          },
        };
        if (obj.field === capitalizeFirstLetter("confidence")) {
          obj.filterComponent = (props) => <CustomFilter {...props} />;
        }
        if (
          obj.field === capitalizeFirstLetter("confidence") ||
          obj.field === capitalizeFirstLetter("prediction") ||
          obj.field === "id" ||
          obj.field === "rule_prediction" ||
          obj.field === "rule_predicted_confidence"
        ) {
          //header style
          obj.headerStyle = {
            backgroundColor: "#4593a3",
            color: "#FFFFFF",
          };
        }
        columns.push(obj);
        //put last two column in start
        columns.sort((a, b) => b.index - a.index);
      });
      for (let i = 0; i < data.length; i++) {
        const obj = {};
        keys.forEach((key) => {
          obj[key.trim()] = data[i][key];
        });
        cellData.push(obj);
      }
      setState({ columns, cellData });
    }
  }, [data]);




  return (
    <>
      {state && state.columns && state.columns.length > 0 && (
        <MaterialTable
          data={state.cellData}
          columns={state.columns}
          title={<Charts readings={readings} />}
          options={{
            sorting: true,
            search: true,
            paging: true,
            filtering: true,
            // searchFieldAlignment: "right",
            maxBodyHeight: "60vh",
            exportButton: false,
          }}
          icons={tableIcons}
        />
      )}
    </>
  );
}
