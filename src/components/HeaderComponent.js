import React, { Component } from 'react'
import { Navbar, Collapse, Nav, NavbarToggler, NavItem, Media, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }           
        
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)  
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>                
                <div className='jumbotron'> 
                    <div className='container'>   
                        <div className="row">
                            <div className='col-1'>
                                <Media  src='...public/logo192.png' alt='whole things logo' width='150'></Media>   
                            </div>
                            <div className='col-11'>
                                <h1>Whole Things</h1>
                                <h2>Kid fashion with our planet in mind</h2>
                            </div>
                        </div>   
                    </div>     
                </div>    
                                
                <Navbar color='faded' light>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to='/home'>
                                    <i className='fa fa-home fa-lg' /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/inventory'>
                                    <i className='fa fa-list fa-lg' /> Inventory
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/about'>
                                    <i className='fa fa-info fa-lg' /> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'>
                                    <i className='fa fa-address fa-lg' /> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <span className='navbar-text ml-auto'>
                            <Button outline onClick={this.toggleModal}>
                                <i className='fa fa-shopping-cart fa-lg' /> My Cart
                            </Button>
                        </span> 
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
    
}

export default Header

