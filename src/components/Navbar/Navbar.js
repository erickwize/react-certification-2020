import React from 'react';
import {Items} from "./items"
import { Button } from "../Navbar/Button"
import './Navbar.css'



class Navbar extends React.Component{

    state ={clicked: false}

    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">VideoClub<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {Items.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>

                        )
                    })}
                    
                </ul>
                <input 
                    className="navbar-search"
                    type="text"
                    placeholder="Search videos"
                    
                ></input>
                <Button>Dark mode</Button>
            </nav>
        )
    }

}
export default Navbar