import MaterialTable from 'material-table';
import "../styles/table.css"

import data from "./TableData.json"


const SimpleTable=(cData,tData)=>{


 
    return (
      <div className='column is-12-desktop is-12-mobile is-12-tablet'>
        <MaterialTable 
        columns={cData}  
          data={tData}
          options={{
            rowStyle: {
              textAlign:"center",
              background: "#FFFFFF",
              paddingTop: "7px",
              boxshadow:" 0px  4px rgba(0, 0, 0, 0.25)",
              height: "45px",
              fontSize:"16px",
              fontWeight:"600",
              lineHeight:"18.75px"
              
            },
            headerStyle: {
              textalign: "center",
                background: "#FFFFFF",
                boxShadow:"0px  4px rgba(0, 0, 0, 0.25)",
                height:"60px",
                fontSize:"16px",
              fontWeight:"600",
              fontSize:"16px",
              lineHeight:"18.75px",
              position:"sticky",
              alignItems:"center"
              
            },
            fixedColumns:{
              left:3
              
            },
            sorting:false,
            paging:false,
            search:false,
            maxBodyHeight: '700px',
            showTitle: false,
            
           
             }}
            
          
       
    />
    </div>
          
        
      
      
    )
  
}
        
    
        
export default SimpleTable;

