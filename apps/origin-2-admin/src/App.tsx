import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AmitList } from "./amit/AmitList";
import { AmitCreate } from "./amit/AmitCreate";
import { AmitEdit } from "./amit/AmitEdit";
import { AmitShow } from "./amit/AmitShow";
import { WithoutDtoList } from "./withoutDto/WithoutDtoList";
import { WithoutDtoCreate } from "./withoutDto/WithoutDtoCreate";
import { WithoutDtoEdit } from "./withoutDto/WithoutDtoEdit";
import { WithoutDtoShow } from "./withoutDto/WithoutDtoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"origin-2"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Amit"
          list={AmitList}
          edit={AmitEdit}
          create={AmitCreate}
          show={AmitShow}
        />
        <Resource
          name="WithoutDto"
          list={WithoutDtoList}
          edit={WithoutDtoEdit}
          create={WithoutDtoCreate}
          show={WithoutDtoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
