
import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Routing from '../Routing/Routing';

import "./App.css";



class Layout extends Component {
    
 
    render() {
        return (
            <BrowserRouter>
                <div className="Layout">
                    <header>
                        <Header/>
                    </header>
                    {/* <nav>
                        <Menu />
                    </nav> */}
                    <main>
                        <Routing />
                        
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default Layout;
