import React, { Component } from 'react';


class Albums extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/albums';
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
                <h1 align="center">ALBUMS</h1>
                    <table>
                    <thead>
                        <tr class="responsive-table card-panel blue darken-1 centered">
                        <td>userId</td>
                        <td>id</td>
                        <td>title</td>
                        </tr>
                        </thead>
                        {data.map(todo =>
                        <thead>
                        <tr hey={todo.userId}>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                         <td>{todo.title}</td>
                        </tr>
                        </thead>
                        )}
                    </table>
            </div>
        )
    }
}
    
export default Albums;