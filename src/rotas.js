import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

import * as Pages from "./pages";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Pages.Home} />
                    <Route exact path="/mobile" component={Pages.Mobile} />
                    <Route exact path="/web" component={Pages.Web} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;