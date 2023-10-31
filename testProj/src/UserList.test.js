import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import UserList from './UserList';

test('render one row per user', ()=> {
    const users = [
        {name:'jane', email:'jane@gmail.com'},
        {name:'james', email:'james@gmail.com'}
    ]
    //render
    render(<UserList users={users} />)

    //find all the rows in the table
    const rows = screen.getAllByRole("row");
    // screen.logTestingPlaygroundURL();
    expect(rows).toHaveLength(3);
})