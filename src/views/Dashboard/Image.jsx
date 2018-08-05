import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import axios from 'axios';

export default class MyUploader extends Component {
  constructor(props){
  super(props);

  this.state = {
    selectedFile:null,


  }
}
  fileChangedHandler = (event) => {
  const file = event.target.files[0]
}
uploadHandler = () => {
  var headers = {
           'Content-Type': 'application/json',
           'Authorization': 'Token 025840824f53b9794873e3f9e38b9c91b12cf3fd',
           'Access-Control-Allow-Origin': '*',
       }
  axios.post('https://36f1d73f.ngrok.io/api/file_upload/', this.state.selectedFile,headers)
  .then((response) => {
            console.log(response);
           })
           .catch((error) => {
              console.log(error);
           })

}
	render() {
		return (
      <div>
      <input type="file" onChange={this.fileChangedHandler} />
<button onClick={this.uploadHandler}>Upload!</button>

</div>
		);
	}
}
