import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <div>
            <AppBar position="static" >

                <Toolbar>
                    <Typography variant="h5">To Do App</Typography>
                </Toolbar>
            </AppBar>
            <br/>
            
        </div>
    )
}

export default Header
