import { DataTable, List } from 'react-admin';

export const ProjectList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="budget" />
            <DataTable.Col source="description" />
            <DataTable.Col source="document" />
            <DataTable.Col source="id" />
            <DataTable.Col source="title" />
        </DataTable>
    </List>
);