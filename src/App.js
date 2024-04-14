import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Hero from "./Components/Index/Hero";
import Tasks from "./Components/TaskPage/Tasks";
import TodoProvider from "./context/TodoProvider";

function App() {
    return (
        <section >
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/tasks" element={
                        <TodoProvider>
                            <Tasks />
                        </TodoProvider>
                    } />
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default App;
