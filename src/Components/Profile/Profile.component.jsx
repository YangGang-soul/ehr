import React,{Component} from 'react'

import UploadFile from '../Uploadfile/Uploadfile.component.jsx'
import 'whatwg-fetch'

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            userid : localStorage.getItem('userid'),
            profilePictureUrl: '',
            remotUrl : this.props.auth.remoteHost,
        };

        this.handleInputChange =  this.handleInputChange.bind(this);
        this.updateProfile =this.updateProfile.bind(this);
        

    }
updateProfile()
{
    //console.log(this.state,"========");
    let {email,gender,nicname} = this.state;
    let data = `email=${email}&gender=${gender}&nicname=${nicname}`;
    let url= `${this.props.auth.apiUrl}/update-merchant/${this.state.userid }`;
    fetch(url, {method: "POST",  
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},  
            body: data
            }).then(function(response){  
                return response.json()
            }).then(function(json) {
                   
                if(parseInt(json.code)==1)
                {
                    window.location.href = "/";
                }
            }),function(error){  
        
            }
}

doShowEmail(email,phone){
    const arr = email.split('@');
    let ret=email;
    if(arr[0]===phone && arr[1]==='api.com')
    {
       ret = '';
    }
    return ret;
  }
  
 handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //  = target.type === 'radio' ? target.checked :

    this.setState({
      [name]: value
    });
  }
    componentDidMount()
    {
         var self = this;
         let url= `${this.props.auth.apiUrl}/profile/${this.state.userid }`;
         
         fetch(url).then(function(response){  
                return response.json()
            }).then(function(json) {
                   
                if(parseInt(json.code)==1)
                {
                    console.log(json);
                   self.setState({
                        userid : localStorage.getItem('userid'),
                        phone: json.data.phone,
                        profilePictureUrl: json.data.picture,
                        email: self.doShowEmail(json.data.email,json.data.phone),
                        nicname: json.data.nicname,
                        gender: json.data.gender

                   });
                                      
                }
            }),function(error){  
        
            }
    }
    
    render(){
       const profilePicture = this.state.profilePictureUrl;
       let profileImg = '';
       if(profilePicture) {
          profileImg =( <div className="col-sm-10" id="profile-photo">
                         <img src={this.state.remotUrl+profilePicture} width="200px" />
                         <div className="col-sm-6 control-label-left" id="profile-photo">
                        修改你的头像
                       <UploadFile auth={this.props.auth} />
                       </div>
                       </div>
                       
          ) 
       }
       else
       {
          profileImg =(
         <div   className="form-group">
            <label htmlFor="profilePhone" className="col-sm-2 control-label"></label>
             <div className="col-sm-6 control-label-left" id="profile-photo">
                 你还没有头像，请上传一张头像
                <UploadFile auth={this.props.auth} />
             </div>
         </div>)   
       }
    
      let maleChecked = "";
      let famaleChecked = "";
      if(parseInt(this.state.gender)==0)
      {
        famaleChecked='checked';   
      }
      if(parseInt(this.state.gender)==1)
      {
        maleChecked='checked';   
      }

        return(
            <div className="Profile">
                <h1>&nbsp;</h1>
                <h1>User Id: {this.state.userid}</h1>


<section className="container">
  <div className="row">
      {profileImg}
     
 
   
  </div>
  <div className="row">
        <form   className="form-horizontal">
               
                <div className="form-group">
                    <label htmlFor="profilePhone" className="col-sm-2 control-label">手机号：</label>
                <div className="col-sm-4 control-label-left ">
                    <input type="text"
                            className="form-control"
                            id="profilePhone"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            name="phone"
                            readOnly
                           />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="profileEmail" className="col-sm-2 control-label">邮箱：</label>
                    <div className="col-sm-4 control-label-left ">
                    <input type="text"
                            className="form-control"
                            id="profileEmail"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            name="email"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="profileGender " className="col-sm-2 control-label">性别：</label>
                    <div className="col-sm-4 control-label-left ">
                        <input type="radio"
                            value="1"
                            onChange={this.handleInputChange}
                             checked={maleChecked}
                            name="gender"/>男 
                            
                            &nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
                            value="0"
                            checked={famaleChecked}
                            onChange={this.handleInputChange}
                             name="gender"/>女   
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="profileNicname " className="col-sm-2 control-label">昵称：</label>
                    <div className="col-sm-4 control-label-left ">
                        <input type="text"
                            className="form-control"
                            id="profileNicname"
                            onChange={this.handleInputChange}
                            value={this.state.nicname}
                            name="nicname"/>
                    </div>
                </div>

               
                <div className="form-group">
                    <label  className="col-sm-2 control-label"></label>
                    <div className="col-sm-4 control-label-left ">
                        <button type="button" 
                            className="btn btn-default" 
                            >取消</button>
                        <button type="button" className="btn btn-primary"
                        onClick={this.updateProfile}>Submit</button>
                    </div>
                </div>

            </form>
  </div>
</section>
            </div>
        )
    }
    
}

export default Profile