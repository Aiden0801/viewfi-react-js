import "./App.css";
import CampaignContainer from "./container/CampaignContainer";
import { CampaignContextProvider } from "./context/CampaignContextProvider";

import { RouterProvider } from "react-router-dom";
import { router } from "./pages/config";
// container

function App() {
    return (
        <div className="App">
            <CampaignContextProvider>
                {/* <Router>
                    <Routes>
                        <Route
                            path="/campaigns"
                            element={<CampaignContainer />}
                        />

                    </Routes>
                </Router> */}
                <RouterProvider router={router} />
            </CampaignContextProvider>
        </div>
    );
}

export default App;
