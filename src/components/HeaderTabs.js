import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

export default function HeaderTabs() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab
        eventKey="Random Recipe"
        title="Random Recipe"
        className="header-tabs"
      >
        <Main />
      </Tab>
      <Tab eventKey="Recipe Search" title="Recipe Search">
        <Search />
      </Tab>
    </Tabs>
  );
}
