import React, { Component } from 'react';
import 'whatwg-fetch'
import $ from 'jquery'

class Cmscontent extends Component {
    constructor(props){
        super(props);
        this.state = {
            title :'',
            content: '',
            apiUrl : this.props.auth.apiUrl
        };

    }
    componentWillReceivProps(){
        alert("==;");
    }
    componentDidMount()
    {
         var self = this;
         let url= `${this.state.apiUrl}/cms-show/${this.props.src}`;
         
         fetch(url).then(function(response){  
                return response.json()
            }).then(function(json) {
                   
                if(parseInt(json.code)==1)
                {
                   self.setState({
                        content : json.data.content,
                        title: json.data.title
                   });
                   $("#editor").html(self.state.content);
                    
                                      
                }
            }),function(error){  
        
            }
            
            
              
    }

    render(){
        
        return (
            <div>
                 <h1>{this.state.title}</h1>
                 <div className="container">
                     <div id="editor"></div>
                    <script type="text/javascript">
                      var ue = UE.getEditor('editor');  
                    </script>
                </div>
               
            </div>
            
        );
    }
}

export default Cmscontent;