import  React,{Component} from 'react';

class Signup extends Component{
    constructor(props){
            // 通过 props 到父组件
            super(props);
            

        
        
            this.state = {
                captchaUrl: this.props.auth.captchaUrl,
                phone:'',
                password: '',
                isRemenber:false,
                signined: false,
                captcha: '',
                validator:{ }
                
            };
        ///this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleBlur = this.handleBlur.bind(this);
        //this.handleBlurPassword = this.handleBlurPassword.bind(this);
      
        //this.handleClick = this.handleClick.bind(this);
        //this.Signin = this.Signin.bind(this);
        this.getCaptcha = this.getCaptcha.bind(this);    
    }

 getCaptcha() {
     this.setState({
           captchaUrl: this.props.auth.captchaUrl+'?t='+ Date.now()+ Math.random(),
        });
    // alert( this.props.auth.captchaUrl);
  }
    render()
    {
        return(
            <div className="modal fade" id="pop-signup-Modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">

                    <div className="modal-content">
                        <div className="modal-header">
                            <a type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></a>
                            <h4 className="modal-title">注册</h4>
                        </div>
                        <br/>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <input type="text" 
                                    className="form-control" 
                                    id="inputEmail3" 
                                    name="phone"
                                    placeholder="手机号"/>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <input type="password" 
                                    className="form-control" 
                                    id="inputPassword3" 
                                    name="password"
                                    placeholder="密码"/>
                                </div>
                                 <div className="col-sm-1"></div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <input type="password" 
                                    name="password2" 
                                    className="form-control" 
                                    id="inputPassword4"
                                     placeholder="确认密码"/>
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
                                            name="captcha"
                                           />
                                    </div>
                                    <div className="col-sm-2">
                                    <img src={this.state.captchaUrl} className="captcha" onClick={this.getCaptcha.bind(this)}  width="100"/>
                                    </div>
                                    <div className="col-sm-6">
                                        请填写图片中的字符，不区分大小写&nbsp;&nbsp;<br/> 
                                    <a  className="navbar-link" onClick={this.getCaptcha.bind(this)}>看不清楚？换张图片</a>
                                    </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-1"></div>
                                <div className=" col-sm-10">
                                    <a href="#home" type="reset" className="btn btn-default" data-dismiss="modal">取消</a>
                                    {' '}
                                    <button type="submit" className="btn btn-default btn-primary">注册</button>
                                </div>
                                 <div className="col-sm-1"></div>
                            </div>
                        </form>


                    </div>
                    {/*---modal-dialog--*/}
                </div>
                {/*---modal--*/}
            </div>
        )
    }

}


export default Signup