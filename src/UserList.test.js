import {getByText, render, screen, within} from "@testing-library/react";
import UserList from "./UserList";


function renderComponent() {
    const users = [
        {name: 'jane', email: 'jane@jane.com'},
        {name: 'sam', email: 'sam@same.com'},
    ];

    render(<UserList users={users}/>);

    return {
        users
    };
}

test('renders one row per user', () => {
    // const users = [
    //     {name: 'jane', email: 'jane@jane.com'},
    //     {name: 'sam', email: 'sam@same.com'},
    // ];
    // // render the component
    // // const { container } =
    // render(<UserList users={users}/>);

    renderComponent();

    // screen.logTestingPlaygroundURL();
    // find all the rows in the table

    // const rows = screen.getAllByRole('row');

    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    // const table = container.querySelector('table');

    // eslint-disable-next-line
    // const rows = container.querySelectorAll('tbody tr');

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);

});

test('render the email and name of each user', () => {
    const {users } = renderComponent();

    for(let user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});