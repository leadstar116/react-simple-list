import { makeStyles } from '@mui/styles'
import { Colors } from 'shared/constants/colors'

export const useSideBarStyles = makeStyles(() => ({
  sidebar: {
    width: '100%',
    fontSize: 14,
    color: Colors.SideBarTextColor,

    '& .MuiListItem-root': {
      flexDirection: 'column',
      backgroundColor: Colors.SideBarItemBGColor,
      marginBottom: 5,
      padding: '0 20px',
    },

    '& .MuiListItemIcon-root': {
      display: 'flex',
      justifyContent: 'center',
    },

    '& span': {
      fontSize: 14,
    },
  },
}))
