import React from 'react'
import { Button, Menu, MenuItem } from 'semantic-ui-react'

export default function SignedOut({singIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={singIn} primary>Giriş yap</Button>
                <Button primary style={{marginLeft:"0.5em"}}> Kayıt Ol</Button>
            </Menu.Item>
          
        </div>
    )
}
