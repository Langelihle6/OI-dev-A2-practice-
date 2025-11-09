import { Edit, SimpleForm, TextInput, ReferenceManyField, DataTable, SaveButton, Toolbar, useNotify, useRedirect } from "react-admin";

const AssignmentsSaveButton = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const onSuccess = data => {
        notify(`Post "${data.title}" saved!`);
        redirect('/assignments');
    };
    return (
        <SaveButton type="button" mutationOptions={{ onSuccess }} />
    );
};

const AssignmentsEditToolbar = () => (
    <Toolbar>
        <AssignmentsSaveButton/>
        <DeleteButton />
    </Toolbar>
);

export const AssignmentsEdit = () => (
    <Edit>
        <SimpleForm toolbar = {<AssignmentsEditToolbar/>}>
            <TextInput disabled label="Id" source="assignments_id" />
            <TextInput source="role" validate={required()} />
            <TextInput multiline source="teaser" validate={required()} />
            <ReferenceManyField label="Employee" reference="employee" target="employee_id">
                <DataTable>
                    <DataTable.Col source="body" />
                    <DataTable.Col source="created_at" field={DateField} />
                    <DataTable.Col>
                        <EditButton />
                    </DataTable.Col>
                </DataTable>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);
