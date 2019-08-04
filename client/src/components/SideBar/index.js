import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './style.css'
import { connect } from 'react-redux'
import { updateSidebarState } from '../../redux/actions/sidebar'
import { Link } from 'react-router-dom'


const sections = [
    {
        text: 'Покупки',
        url: '/'
    },
    {
        text: 'Доходы',
        url: '/income'
    },
    {
        text: 'Категории',
        url: '/category'
    },
    {
        text: 'Магазины',
        url: '/shops'
    },
    {
        text: 'Статистика',
        url: '/stats'
    },
]


function SideBar(props) {

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    props.updateSidebarState(open)
  };

  const sideList = () => (
    <div
        className='sidebar-menu'
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}>
      <List>
        {sections.map((elem, index) => (
          <ListItem button key={elem.text}>
            <Link className="sidebar-link" to={elem.url}>{elem.text}</Link>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            {/* <ListItemText primary={elem.text} /> */}
          </ListItem>
        ))}
      </List>
      <Divider />
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
        updateSidebarState: (open) => dispatch(updateSidebarState(open))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)