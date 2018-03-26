import React, {Component} from 'react';
import $ from 'jquery'


class User extends Component{


    getDataArr(array) {
            let jsoncount =array.length;
            let retArrData =  new Array();

            for(let i=0;i<jsoncount;i++)
            {
                let _arr = new Array();
                _arr[0]=`<input type="checkbox" class="check_one" value="'${array[i]._id}'"  />`;
                _arr[1]= array[i].phone;
                _arr[2]= array[i].email;
                _arr[3] = '';
                if(array[i].picture){
                    _arr[3]= array[i].picture; 
                }
                
                _arr[4]= array[i].createdAt; 
                _arr[5]= `<button class="btn btn-default btn-sm btn-edit-click"
                           data-toggle="modal" data-target="#editModal" 
                           eidit-id="${array[i]._id}">
                            <span class="glyphicon glyphicon-pencil"></span>
                          </button> 
                          <button class="btn btn-danger btn-sm btn-del-click" data-toggle="modal" 
                            data-target="#deleteModal" 
                            del-id="${array[i]._id}">
                            <span class="glyphicon glyphicon-trash"></span> 
                          </button>`;

                retArrData[i]=_arr;
            }
            return retArrData;
        }

  renderTable(dataSet) {
            $('#example').DataTable( {
                data:dataSet,
                columns: [
                    { title: '<input type="checkbox" class="check_all" />',width:20, orderable: false },
                    { title: "手机号"},
                    { title: "邮箱" },
                    { title: "头像" },
                    { title: "创建时间" },
                    { title: "操作",orderable: false }
                ]
            } );

            //取消表格第一列的排序功能
            $("#example th:first").attr('class','');
            $("#example th").click(function(){
                $("#example th:first").attr('class','');
                
            }); 

            $(function(){
                $('.btn-edit-click').click(function(){
                  alert($(this).attr('eidit-id'));
                })
            });
      
            $(function(){
              $('.btn-del-click').click(function(){
                alert($(this).attr('del-id'));
              })
          });
      
            $(function(){
              $('.check_all').click(function(){
                if($(this).prop('checked')){
                  $('.check_one').prop('checked',true);
                }else{
                  $('.check_one').prop('checked',false);
                }
              });
            });
            
            $(function(){
              $('.check_one').click(function(){
                if($('.check_one:checked').length == $('.check_one').length)
                {
                  $('.check_all').prop('checked',true);
                }
                else
                {
                  $('.check_all').prop('checked',false);
                }
              });
            });

        
      $(function(){
        $('.btn-edit-click').click(function(){
          alert($(this).attr('eidit-id'));
        })
    });

    $(function(){
      $('.btn-del-click').click(function(){
        alert($(this).attr('del-id'));
      })
  }); 
  } 
   
    

    render(){
        return(
            <section className="User">
               <div className="container">
                 <h1>User === page</h1>
                <table id="example" 
                        className="table table-striped table-bordered" 
                        cellsPacing="0" 
                        width="100%">
                </table>
                </div>
           </section>
           )
    }


   

  componentDidMount()
    {
         var self = this;
         let url= `${this.props.auth.apiUrl}/merchant-list`;
        // alert(url);
         
         fetch(url).then(function(response){  
                return response.json()
            }).then(function(json) {
                   
                if(parseInt(json.code)==1)
                {
                    const dataArr = self.getDataArr(json.data);
                    self. renderTable(dataArr);                             
                }
            }),function(error){  
        
            }
           
    }
}
export default User