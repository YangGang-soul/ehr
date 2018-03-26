import React ,{Component} from 'react';

import 'whatwg-fetch'
//import  './sign-in.css';



class Signin extends Component{

    constructor(props){
        // 通过 props 到父组件
        super(props);
        this._phoneChange = this._phoneChange.bind(this);
        this._passwordChange = this._passwordChange.bind(this);
        this._remenberChange = this._remenberChange.bind(this);
        this._captchaChange = this._captchaChange.bind(this);
        this.Signin = this.Signin.bind(this);
        this.getCaptcha = this.getCaptcha.bind(this);

       
       
        this.state = {
            captchaUrl: this.props.auth.captchaUrl,
            phone:'',
            password: '',
            isRemenber:false,
            signined: false,
            captcha: '',
            validator:{
               invalidPhone: false,   
            }
              
        };
    }

   getCaptcha() {
     this.setState({
           captchaUrl: this.props.auth.captchaUrl+'?t='+ Date.now()+ Math.random(),
        });
    // alert( this.props.auth.captchaUrl);
  }

  _login(phone,pwd){
     this.props.auth.login(phone,pwd);
  }

    _phoneChange(e) {
        this.setState({
            phone: e.target.value,
        });
        
    }
    _captchaChange(e) {
        this.setState({
            captcha: e.target.value,
        });
    }
     _passwordChange(e) {

        this.setState({
            password: e.target.value,
        });
    }
    _remenberChange(e) {
        const target = e.target;
        const value =  target.type === 'checkbox' ?  target.checked : target.value;
        this.setState({
            isRemenber:value

        });
    }
  
   
   

    Signin() {

         
         
         
         let {phone,password,isRemenber,captcha} = this.state;
        
         let data = `phone=${phone}&password=${password}&captcha=${captcha}`;
         let url= this.props.auth.aipUrl+'/sign-in';

         fetch(url, {method: "POST",  
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},  
            body: data
            }).then(function(response){  
                return response.json()
            }).then(function(json) {
                   
                if(parseInt(json.code)==1)
                {
                    let phone = json.data.phone;
                    let pwd = json.data.password;
                    let uid = json.data._id;
                        localStorage.setItem('username',phone);
                        localStorage.setItem('userid',uid);
                        window.location.href = "/";
                }
            }),function(error){  
        
            }
    }

    componentDidMount() {
   // setAccessToken();
   //setIdToken();
   
  }


    render(){
      
        return(
            <div className="modal fade" id="pop-signin-Modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">

                    <div className="modal-content">
                        <div className="modal-header">
                            <a type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></a>
                            <h4 className="modal-title">登录</h4>
                        </div>
                        <br/>
                        <form className="form-horizontal"
                              id="signForm" onSubmit={this.Signin}>
                            <div className="form-group">
                       
                                 <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <input type="text"
                                           name="phone"
                                           onChange={this._phoneChange}
                                           value={this.state.phone}
                                            
                                           className="form-control"
                                           id="inputPhone" placeholder="手机号"
                                          
                                          />
                                { this.state.validator.invalidPhone?<div className="alert alert-danger">
                                     <p>你填入的手机号码无效</p>
                                  </div> :"" 
                                }        
                                </div>
                                 <div className="col-sm-1"></div>
                            </div>
                            <div className="form-group">
                                 <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <input type="password"
                                           name="password"
                                           onChange={this._passwordChange}
                                           value={this.state.password}
                                           className="form-control"
                                           id="inputPassword3" placeholder="密码"/>
                                </div>
                                 <div className="col-sm-1"></div>
                            </div>
                             <div className="form-group">
                                 <div className="col-sm-1"></div>
                                    <div className="col-sm-3">
                                    <input type="text"
                                            className="form-control"
                                            id="signInCaptcha"
                                            placeholder="请输入验证码"
                                            value={this.state.captcha}
                                            name="captcha"
                                            onChange={this._captchaChange}
                                           />
                                    </div>
                                    <div className="col-sm-2">
                                    <img src={this.state.captchaUrl} 
                                         onClick={this.getCaptcha.bind(this)}
                                          className="captcha"   width="100"/>
                                    </div>
                                    <div className="col-sm-6">
                                        请填写图片中的字符，不区分大小写&nbsp;&nbsp;<br/> 
                                    <a onClick={this.getCaptcha.bind(this)} className="navbar-link">看不清楚？换张图片</a>
                                    </div>
                                    
                                    
                            </div>

                            <div className="form-group">
                                 <div className="col-sm-1"></div>
                                <div className=" col-sm-10">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"
                                                   name="isRemenber"
                                                   onChange={this._remenberChange}
                                                   checked={this.state.isRemenber} /> 记住密码
                                        </label>
                                    </div>
                                </div>
                                 <div className="col-sm-1"></div>
                            </div>
                            <div className="form-group">
                                 <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <a href="#home" type="reset" className="btn btn-default" data-dismiss="modal">取消</a>
                                    {' '}
                                   
                                    <button type="button" onClick={this.Signin}  className="btn btn-default btn-primary"
                                    data-dismiss="modal">登录</button>
                                </div>
                                 <div className="col-sm-1"></div>
                            </div>
                        </form>


                    </div>
                    {/*---modal-dialog--  */}
                </div>
                {/*---modal--*/}
            </div>
        )
    }

}
export default Signin
