import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import dropIcon from '../images/draggableIcon.png';
import Dropzone from 'react-dropzone'


class FileDropOffer extends React.Component {



  render() {
    
    return(
      <Dropzone onDrop={this.props.onDrop} accept="image/png, image/gif, image/jpeg" {...this.props}>
  {({getRootProps, getInputProps}) => (
    <section className="react-draggable">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="handle">
              <img src={dropIcon}/><br/>
              <div style={{display: "flex", alignItems:"center", flexDirection:"column"}}>
                <span style={{fontSize: "18px", color : "#000000" }}>Add Profile Image</span>
                <span style={{fontSize: "12px", color : "#999999" }}>Drag & Drop Image here</span>
              </div>
              </div>
      </div>
    </section>
  )}
</Dropzone>
    )
  }
}

export default FileDropOffer;
