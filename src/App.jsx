import "./App.css";
import CampaignContainer from "./container/CampaignContainer";
import { CampaignContextProvider } from "./context/CampaignContextProvider";
// container

function App() {
  return (
    <div className="App">
      <CampaignContextProvider>
        <CampaignContainer />
      </CampaignContextProvider>
    </div>
  );
}

export default App;
