import { makeStyles } from '@mui/styles';
import { Colors } from 'shared/constants/colors'

export const useHomePageStyles = makeStyles(() => ({
  '@global': {
    body: {
      backgroundColor: Colors.BGColor,
    },
    '.app-container': {
      maxWidth: 1024,
      width: '100%',
      margin: 'auto',
    },
  },
  homePage: {
    background: 'transparent',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '40px 0',
    position: 'relative',
  },
  menu: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1500,
  },
  menuBtn: {
    backgroundColor: `${Colors.PinkBGColor} !important`,
    width: 50,
    height: 50,

    '& img': {
      width: 30,
    },
  },
  drawer: {
    '& .MuiDrawer-paper': {
      paddingTop: 100,
      backgroundColor: Colors.SideBarBGColor,
      width: 200,

      '@media (max-width: 600px)': {
        width: '100%',
      },
    },
  },
  logo: {
    "& img": {
      width: 100,
      height: 100,
    },
  },
  title: {
    fontSize: 32,
    color: Colors.TextColor,
    margin: '20px 0',
    textAlign: 'center',
  },
  cardContainer: {
    padding: 20,

    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));
