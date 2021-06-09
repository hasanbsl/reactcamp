import React, {useState} from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Link, NavLink, useHistory } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history= useHistory()
    function handleSingnOut(params) {
        setIsAuthenticated(false)
       history.push("/")
        
    }
    function handleSingnIn(params) {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                <Menu.Item  ><Link to={`/products`}>Home</Link></Menu.Item>
                                   
                
                <Menu.Item
                    name='messages'                   
                />
                <Menu.Menu position='right'>
                   <CartSummary/>
                   {isAuthenticated? <SignedIn signOut={handleSingnOut} bisey="1"/>:<SignedOut singIn={handleSingnIn}/>}
                   
                  

                    
                </Menu.Menu>

                </Container>
           
            </Menu>

        </div>
    )
}
