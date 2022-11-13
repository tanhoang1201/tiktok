import Container from "./pages/Container";
import { Route, Routes } from "react-router-dom";
import Following from "./pages/Following";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Upload from "./pages/Upload";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Container />}>
                    <Route index element={<Home />} />
                    <Route path="following" element={<Following />} />
                    <Route path="live" element={<Live />} />
                    <Route path="upload" element={<Upload />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
