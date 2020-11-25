import React, { Component } from 'react';

class Users extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <nav>
                    <div class="nav-wrapper  deep-grape">
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="/">Posts</a></li>
                        <li><a href="/Comments">Comments</a></li>
                        <li><a href="/Albums">Albums</a></li>
                        <li><a href="/Photos">Photos</a></li>
                        <li><a href="/Todos">Todos</a></li>
                        <li><a href="/Users">Users</a></li>
                    </ul>
                    </div>
                </nav>
                <h1 align="center">USERS</h1>
                    <table border="1" class="centered">
                    <thead>
                        <tr class="responsive-table card-panel blue darken-1 centered">
                            <td>id</td>
                            <td>name</td> 
                            <td>username</td>
                            <td>email</td> 
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <thead>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td> 
                            <td>{todo.username}</td>
                            <td>{todo.email}</td> 
                        </tr>
                    </thead>
                    )}
                </table>

            </div>
        )
    }
}
    
export default Users;