import { DataTable, List, ReferenceField } from 'react-admin';

export const ReportList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="attachment" />
            <DataTable.Col source="employee_id">
                <ReferenceField source="employee_id" reference="employees" />
            </DataTable.Col>
            <DataTable.Col source="id" />
            <DataTable.Col source="project_id">
                <ReferenceField source="project_id" reference="projects" />
            </DataTable.Col>
            <DataTable.Col source="summary" />
            <DataTable.Col source="title" />
        </DataTable>
    </List>
);