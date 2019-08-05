import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import './style.css'
import sections from '../../helpers/sections'
import { connect } from 'react-redux'
import { updateSidebarState } from '../../redux/actions/sidebar'
import { updateCurrentSection } from '../../redux/actions/sections'
import { Link } from 'react-router-dom'


function SideBar(props) {

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        props.updateSidebarState(open)
    };

    const handleLinkClick = (section) => event => {
        props.updateCurrentSection(section)
    }
 
    const sideList = () => (
        <div
            className='sidebar-menu'
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>
            <List>
                {sections.map((elem, index) => {
                return elem.text === 'divider' ? <Divider /> : (
                    <ListItem button key={elem.text}>
                    <Link className="sidebar-link" to={elem.url} onClick = {handleLinkClick(elem.text)}>{elem.text}</Link>
                    </ListItem>
                )
                })}
            </List>
        </div>
    );

    console.log(props.open)

    return (
        <div>
            <Drawer open={props.open} onClose={toggleDrawer(false)}>
                {sideList()}
            </Drawer>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        open: state.sidebar.open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSidebarState: (open) => dispatch(updateSidebarState(open)),
        updateCurrentSection: (section) => dispatch(updateCurrentSection(section))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)