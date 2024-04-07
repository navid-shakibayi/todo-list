import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Hero from "./Components/Index/Hero";

function App() {
    return (
        <section >
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Hero />} />
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default App;
