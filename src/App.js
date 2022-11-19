import { Route, Routes } from "react-router-dom";
import Following from "./pages/Following";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import configs from "./config";
function App() {
    return (
        <div>
            <Routes>
                <Route path={configs.routes.home} element={<Home />} />
                <Route
                    path={configs.routes.following}
                    element={<Following />}
                />
                <Route path={configs.routes.live} element={<Live />} />
                <Route path={configs.routes.upload} element={<Upload />} />
                <Route path={configs.routes.profile} element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
