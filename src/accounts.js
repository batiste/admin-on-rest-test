// in src/users.js
import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin';

export const AccountList = (props) => (
    <List title="All stripe accounts" {...props}>
        <Datagrid>
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="account_balance" />
        </Datagrid>
    </List>
);
