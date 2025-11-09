import { DataTable, EmailField, List } from 'react-admin';

export const EmployeeList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="department" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
            <DataTable.Col source="profile_picture" />
        </DataTable>
    </List>
);