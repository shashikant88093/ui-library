import React,{useMemo} from 'react'
import {useDropzone} from 'react-dropzone';
import "./CardDropZone.css"
import UploadFile from '../../Image/uploadFile.png'

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
export default function CardDropZone() {
    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
      } = useDropzone({accept: {'text/*': ['.csv','.xlsx']}});
    
      const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isFocused,
        isDragAccept,
        isDragReject
      ]);
  return (
    <div className="container">
        <h2>Upload Files</h2>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <img src={UploadFile} alt="upload Icon"/>
      </div>
      <h3>Drag & drop files or Browse</h3>
     <p><em>Supported formats XLXS and CSV</em></p> 
    </div>
  )
}
