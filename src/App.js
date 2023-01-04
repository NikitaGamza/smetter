import React from "react";
import './app.scss'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import LeftMenu from "../left-menu";
import Sidebar from "./components/sidebar/Sidebar";
import Sandvich from "./pages/Sandvich";
import ClassicBurger from "./pages/burgers/ClassicBurger";
import CheeseBurger from "./pages/burgers/CheeseBurger";

function App () {
    const navigation = [
        {key: '1', title: 'Рецепты', link: '/recipes'}, 
        {key: '2', title: 'Прайс-лист', link: '/price-list'},
        {key: '3', title: 'Комбо-наборы', link: '/combo-sets'},
    ]
    return(
            <Router>
                <div className="flex">
                    <Sidebar />
                    <div className="container">
                        <nav className="menu__up">
                        {
                            navigation.map(function(item){
                                return(
                                    <a className="menu__up__link" href={item.link} key={item.key}>{item.title}</a>
                                )
                            }
                            )
                        }
                        </nav>
                        <Routes>
                            <Route exact path="/sandviches/classic" element={<Sandvich />} />
                            <Route exact path="/burgers/classic" element={<ClassicBurger />} />
                            <Route exact path="/burgers/cheeseburger" element={<CheeseBurger />} />
                        </Routes>
                    </div>
                </div>
            </Router>
    )
}

export default App