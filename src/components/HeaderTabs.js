import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

export default function HeaderTabs() {
  return (
    <Tabs defaultActiveKey="recipeSearch" id="uncontrolled-tab-example">
      <Tab eventKey="randomRecipe" title="Recipe" className="header-tabs">
        <Main />
      </Tab>
      <Tab eventKey="recipeSearch" title="Recipe Search">
        <Search />
      </Tab>
    </Tabs>
  );
}
