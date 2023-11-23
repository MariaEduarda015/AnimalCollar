import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Objetivo from "./pages/Objetivo"
import Treinamento from "./pages/Treinamento"
import { Equipamentos } from "./pages/Equipamentos";

import { Layout } from "./layout";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/" element={<Layout />}>
                <Route path="/treinamento" element={<Treinamento />} /> 
                <Route path="/objetivo" element={<Objetivo />} />
                <Route path="/equipamentos" element={<Equipamentos />} />
             </Route>
        </Routes>
    );
}

export default Router