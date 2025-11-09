import { TextInput, List, DataTable, ReferenceField } from 'react-admin';


const assignmentFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Role" source="role" />,
];

export const AssignmentList = () => (
    <List filters={assignmentFilters}>
        <DataTable>
            <DataTable.Col source="employee_id">
                <ReferenceField source="employee_id" reference="employees" />
            </DataTable.Col>
            <DataTable.Col source="id" />
            <DataTable.Col source="progress_report" />
            <DataTable.Col source="project_id">
                <ReferenceField source="project_id" reference="projects" />
            </DataTable.Col>
            <DataTable.Col source="role" />
        </DataTable>
    </List>
);