import { DataTable, List, ReferenceField } from 'react-admin';

export const AssignmentList = () => (
    <List>
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