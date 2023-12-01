import "./App.css";
import { CampaignContextProvider } from "./context/CampaignContextProvider";

import { RouterProvider } from "react-router-dom";
import { router } from "./pages/config";
// container

function App() {
    return (
        <div className="App">
            <CampaignContextProvider>
                <RouterProvider router={router} />
            </CampaignContextProvider>
        </div>
    );
}

export default App;
