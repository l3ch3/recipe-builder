import HeaderTabs from "./components/HeaderTabs";
import "./App.css";
import Header from "./components/Header";
// import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <HeaderTabs />
      {/* <Main /> */}
    </div>
  );
}

export default App;
