// in app.js
import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import simpleRestClient from 'ra-data-simple-rest';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { PostList, PostEdit, PostCreate } from './posts';
import blue from 'material-ui/colors/indigo';

const theme = createMuiTheme({palette: {
  primary: { light: blue[300], main: blue[500], dark: blue[700] },
    shades: { light: blue[300], main: blue[500], dark: blue[700] }
}});

export default render(
  <Admin dataProvider={simpleRestClient('http://localhost:3000')}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>,
  document.getElementById('root')
);
