import Header from "./Header/Header";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";
import Cart from "./Cart";
import Footer from "./componentes/Footer";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <main>
                <Switch>
                    <Route path="/"component={ItemListContainer} exact/>
                    <Route path="/categoria/:id" component={ItemListContainer}/>
                    <Route path="/item/:id" component={ItemDetailContainer}/>
                    <Route path="/cart/" component={Cart}/>
                </Switch>         
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
