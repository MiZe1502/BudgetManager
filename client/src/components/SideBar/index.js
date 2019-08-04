import React from 'react'
import List from '@material-ui/core/List'
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Add from '@material-ui/icons/Add'
export default class SideBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Add/>
                        </ListItemIcon>
                        <ListItemText primary="Test"/>
                    </ListItem>
                </List>
            </div>

        )
    }


}