// in app.js
import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestClient from 'ra-data-simple-rest';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin dataProvider={simpleRestClient('http://localhost:3000')}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
            <Resource name="users" list={UserList} />
        </Admin>
      </div>
    );
  }
}

export default App;
