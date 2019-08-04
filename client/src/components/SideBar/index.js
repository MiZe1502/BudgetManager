// import React from 'react'
// import List from '@material-ui/core/List'
// import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
// import Drawer from '@material-ui/core/Drawer';
// import Add from '@material-ui/icons/Add'
 import { connect } from 'react-redux'
 import { updateSidebarState } from '../../redux/actions/sidebar'


// class SideBar extends React.Component {

//     constructor(props) {
//         super(props)
//     }

//     toggleSidebar = () => event => {
//         console.log('here')

//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
      
//         updateSidebarState()
//     }


//     render() {
//         console.log(this.props.open)

//         return (
//             <Drawer open={this.props.open} onClose={this.toggleSidebar}>
//                 <div role="presentation"  onClick={this.toggleSidebar}>
//                     <List>
//                         <ListItem button>
//                             <ListItemIcon>
//                                 <Add/>
//                             </ListItemIcon>
//                             <ListItemText primary="Test"/>
//                         </ListItem>
//                     </List>
//                 </div>
//             </Drawer>
//         )
//     }
// }

// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         open: state.sidebar.open
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateSidebarState: () => dispatch(updateSidebarState())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SideBar)



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


function SideBar(props) {

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    props.updateSidebarState(open)
  };

  const sideList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
        updateSidebarState: (open) => dispatch(updateSidebarState(open))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)