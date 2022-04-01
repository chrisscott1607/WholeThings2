import React, { Component } from "react"
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import STOCK from "../shared/stock.js"
import PROMOTIONS from "../shared/promotions.js"
import PARTNERS from "../shared/partners.js"
import { LINKS } from "../shared/links.js"
import { Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component{
    constructor(props){
        super(props)

        this.state= {
            stock: STOCK,
            promotions: PROMOTIONS,
            partners: PARTNERS,
            links: LINKS
        }
    }

    Homepage = () => {
        return (
            <Home 
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partners={this.state.partners}
                links={this.state.links}
            />
        )
    }

    render(){

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={Main.Homepage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main