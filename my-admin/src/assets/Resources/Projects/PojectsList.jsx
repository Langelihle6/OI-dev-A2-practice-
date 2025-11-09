import { List, DataTable, TextInput } from 'react-admin';

const projectFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" />,
    <TextInput label="Description" source="description" />,
];

export const ProjectList = () => (
    
    <List filters={projectFilters}>
        <DataTable>
            <DataTable.NumberCol source="budget" />
            <DataTable.Col source="description" />
            <DataTable.Col source="document" />
            <DataTable.Col source="id" />
            <DataTable.Col source="title" />
        </DataTable>
    </List>
);