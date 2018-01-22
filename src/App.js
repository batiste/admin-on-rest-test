// in app.js
import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import restClient from './rest';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin dataProvider={restClient('http://jsonplaceholder.typicode.com')}>
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
          <Resource name="users" list={UserList} />
        </Admin>
      </div>
    );
  }
}

export default App;
