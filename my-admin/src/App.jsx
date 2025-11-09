import { Admin, CustomRoutes, Resource} from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage } from "./create_user"; 

import { AssignmentList } from "./assets/Resources/Assignments/AssignmentsList";
import { DepartmentList } from "./assets/Resources/Departments/DepartmentsList";
import { ProjectList } from "./assets/Resources/Projects/PojectsList";
import { ReportList } from "./assets/Resources/Reports/ReportsList";
import { EmployeeList } from "./assets/Resources/Employees/EmployeesList";


const TRAILBASE_URL = "https://refactored-parakeet-g4q7x4x79996fwr6j-4000.app.github.dev/";
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

function App() {
  return (
    <Admin loginPage={LoginPage} dataProvider={dataProvider} authProvider={authProvider} >
      < Resource name = "EMPLOYEES" list = {EmployeeList} />
      < Resource name = "REPORTS" list = { ReportList} />
      < Resource name = "DEPARTMENTS" list = { DepartmentList} />
      < Resource name = "PROJECTS" list = {ProjectList} /> 
      < Resource name = "ASSIGNMENTS" list = {AssignmentList} /> 
      <CustomRoutes noLayout>
        <Route path="/create-user" element={<CreateUser />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
