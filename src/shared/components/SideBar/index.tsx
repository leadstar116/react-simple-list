import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import { useSideBarStyles } from './index.styles'

const SideBar = () => {
  const classes = useSideBarStyles()

  return (
    <div className={classes.sidebar}>
      <List>
        <ListItem button key="Link 1">
          <ListItemText primary="Link 1" />
        </ListItem>
        <ListItem button key="Link 2">
          <ListItemText primary="Link 2" />
        </ListItem>
        <ListItem button key="Link 3">
          <ListItemText primary="Link 3" />
        </ListItem>
        <ListItem button key="Link 4">
          <ListItemText primary="Link 4" />
        </ListItem>
        <ListItem button key="Link 5">
          <ListItemText primary="Link 5" />
        </ListItem>
        <ListItem button key="Link 6">
          <ListItemText primary="Link 6" />
        </ListItem>
      </List>
    </div>
  )
}

export default SideBar
