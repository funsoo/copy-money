import { BrowserRouter } from "react-router-dom";
import MainApp from "./components/apps/MainApp";
import { RecoilRoot } from "recoil";

function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
          <MainApp/>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;