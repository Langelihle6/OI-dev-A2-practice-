import { Admin, Resource, ListGuesser} from "react-admin";
/*import { Route } from "react-router-dom"; */
import { createTrailbaseProvider } from "./ra-trailbase";


const TRAILBASE_URL = "http://stunning-sniffle-g4q7x4x799g9hw9x4-4000.app.github.dev/";
const { dataProvider} = await createTrailbaseProvider(TRAILBASE_URL);

function App() {
  return (
    <Admin dataProvider={dataProvider}  >
      <Resource name = "assignments" list= {ListGuesser} />
      
    </Admin>
  );
}

export default App;
