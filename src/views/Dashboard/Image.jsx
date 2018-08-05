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
    id:this.props.id,


  }
  console.log(this.state);
}
  fileChangedHandler = (event) => {

  this.setState({selectedFile: event.target.files[0]})
}
uploadHandler = () => {
  const token = localStorage.getItem('token');
  console.log(this.state);
  const formData = new FormData()
  formData.append('myFile', this.state.selectedFile, this.state.id);
  console.log(formData);
  var headers = {
           'Content-Type': 'multipart/form-data',
           'Authorization': 'Token ${token}',
           'Access-Control-Allow-Origin': '*',
       }
  axios.post('https://36f1d73f.ngrok.io/api/file_upload/', formData,headers)
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
