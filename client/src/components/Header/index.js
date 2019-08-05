import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Title from '../Title'
import './style.css'
import { connect } from 'react-redux'
import { updateSidebarState } from '../../redux/actions/sidebar'




class Header extends React.Component {

    handleSidebarButtonClick = () => {
        this.props.updateSidebarState(true)
    }

    render() {
        return (
            <div>
                <AppBar position='static'>
                    <ToolBar className='header-toolbar'>
                        <IconButton onClick={ this.handleSidebarButtonClick }>
                            <MenuIcon/>
                        </IconButton>
                        <Title/>
                        {/* <Typography variant='h6'>
                            Главная страница
                        </Typography> */}
                        <Button>
                            Login
                        </Button>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSidebarState: (open) => dispatch(updateSidebarState(open))
    }
}

export default connect((state) => {}, mapDispatchToProps)(Header)