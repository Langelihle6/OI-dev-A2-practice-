import { DataTable, List } from 'react-admin';

export const DepartmentList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="description" />
            <DataTable.Col source="id" />
            <DataTable.Col source="logo" />
            <DataTable.Col source="manager" />
            <DataTable.Col source="name" />
        </DataTable>
    </List>
);