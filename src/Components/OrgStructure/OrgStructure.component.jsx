import React, { Component } from 'react';
import './OrgStructure.css'

const List = (props)=>{
    const users = props.users;
    const listItems = users.map((user) =>
        <li><h2>{user}</h2></li>
    );
    return (
        <ul>{listItems}</ul>
    );
  }

class OrgStructure extends Component {

    render(){
       
        const users = ["Gates","Jack","Bush","Obama","Mike"];
        const listItems = users.map((user,index) => {
          return( <li key={index}><h2>Hello 
           {user}</h2></li>
          )}
          );
        return (
            <div className="OrgStructure">
                <div className="container">
                     <h1>组织架构</h1>
                    <h2>Org Structure page</h2>
                     <ul>{listItems}</ul>

                    <h1>User list II</h1>
                    <List users={users} />
                    <h1>组织架构</h1>
                    <h2>Org Structure page</h2>
                     <ul>{listItems}</ul>

                    <h1>User list II</h1>
                    <List users={users} />
                    <h1>组织架构</h1>
                    <h2>Org Structure page</h2>
                     <ul>{listItems}</ul>

                    <h1>User list II</h1>
                    <List users={users} />
                    <h1>组织架构</h1>
                    <h2>Org Structure page</h2>
                     <ul>{listItems}</ul>

                    <h1>User list II</h1>
                    <List users={users} />
                    <h1>组织架构</h1>
                    <h2>Org Structure page</h2>
                     <ul>{listItems}</ul>

                    <h1>User list II</h1>
                    <List users={users} />
                    <h1>组织架构</h1>
                    <h2>Org Structure page</h2>
                     <ul>{listItems}</ul>

                    <h1>User list II</h1>
                    
                    <List users={users} />
                </div>
               

            </div>
        );
    }
}

export default OrgStructure;