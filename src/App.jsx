import "./App.css";
import CampaignContainer from "./container/CampaignContainer";
import { CampaignContextProvider } from "./context/CampaignContextProvider";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// container

function App() {
    return (
        <div className="App">
            <CampaignContextProvider>
                <Router>
                    <Routes>
                        <Route
                            path="/campaigns"
                            element={<CampaignContainer />}
                        />
                        {/* Add more Routes as needed */}
                    </Routes>
                </Router>
            </CampaignContextProvider>
        </div>
    );
}

export default App;
