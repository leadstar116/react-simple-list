import { makeStyles } from '@mui/styles';
import { Colors } from 'shared/constants/colors'

export const useCardStyles = makeStyles(() => ({
  card: {
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 20,
    maxWidth: 320,
    height: '100%',
    border: '1px solid',
    borderColor: Colors.BorderColor,
    backgroundColor: Colors.DarkBGColor,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: Colors.HoveredBGColor,
    },
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    '& img': {
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  },
  cardName: {
    padding: '15px 0',
    color: Colors.TextColor,
    fontSize: 20,
    fontWeight: 800,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
}));
