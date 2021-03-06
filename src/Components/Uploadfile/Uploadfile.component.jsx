import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 

import 'whatwg-fetch'

class UploadFile extends Component {
   constructor(props){
       super(props);
       this.state={
           userid: localStorage.getItem('userid'),
           UID: localStorage.getItem('username')
       };
       this.submitFile = this.submitFile.bind(this);
       this.handleGetFile = this.handleGetFile.bind(this);
       const now = new Date();
       this.year= now.getFullYear();
       this.month= now.getMonth() ;
       this.timestr = Date.now();
   }

  

   handleGetFile(e)
   {
    this.files = e.target.files;
   }

   submitFile(){
     let self = this;
     let url= `${this.props.auth.apiUrl}/update-photo/${this.state.UID}/${this.year}/${this.month}/${this.timestr}`;
  
     let file = this.files[0];
     if(this.files.length > 0) {
        
        var formData = new FormData();
            formData.append('fileUpload', file, file.name);
        
        fetch(url, {method: "POST",  
            //headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            headers:{'enctype': 'multipart/form-data'},  
            body: formData
            }).then(function(response){  
                return response.json()
            }).then(function(json) {
              
                if(parseInt(json.code)==1)
                {
                    //window.location.href="/#/users";
                    window.location.reload();

                }
               
            }),function(error){  
        
            }
    }
   }

  

    render(){
 
        return (
            <div className="">
                <form className="uploadForm" 
                   
                    encType="multipart/form-data">
                    <div className="form-group fileUpload"> 
                        <label className="btn btn-primary">
                            <input type="file" 
                                id="fileUpload" 
                                name="fileUpload" 
                                onChange={this.handleGetFile}
                            /> 
                        </label>
                    </div>
                    <button type="button" 
                            onClick={this.submitFile} 
                            className="btn btn-primary"
                            >上传</button> 
                </form>
            </div>
        );
    }
}

export default UploadFile