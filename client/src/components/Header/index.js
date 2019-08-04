import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './style.css'

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <AppBar position='static'>
                    <ToolBar className='header-toolbar'>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='h6'>
                            Главная страница
                        </Typography>
                        <Button>
                            Login
                        </Button>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}