import { Admin, CustomRoutes, Resource, ListGuesser } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage } from "./create_user"; 

const TRAILBASE_URL = "https://refactored-parakeet-g4q7x4x79996fwr6j-4000.app.github.dev/";
const { dataProvider } = await createTrailbaseProvider(TRAILBASE_URL);

function App() {
  return (
    <Admin loginPage={LoginPage} dataProvider={dataProvider}  >
      < Resource name = "EMPLOYEES" list = {ListGuesser} />
      < Resource name = "REPORTS" list = {ListGuesser} />
      < Resource name = "DEPARTMENTS" list = {ListGuesser} />
      < Resource name = "PROJECTS" list = {ListGuesser} /> 
      < Resource name = "ASSIGNMENTS" list = {ListGuesser} /> 
      <CustomRoutes noLayout>
        <Route path="/create-user" element={<CreateUser />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
