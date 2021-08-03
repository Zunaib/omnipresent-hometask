import { FC, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Spin } from "antd";
import Layout from "./components/common/Layout";

//Components
const AddEmployee = lazy(() => import("./pages/AddEmployee"));

const Common: FC = () => {
  return (
    <Suspense
      fallback={
        <div>
          <div className="centered">
            <Spin size="large" />
          </div>
        </div>
      }
    >
      <Layout>
        <Switch>
          <Route exact path="/addEmployee">
            <AddEmployee />
          </Route>
          <Redirect exact from="/" to="/addEmployee" />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default Common;
