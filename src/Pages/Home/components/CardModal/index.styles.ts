import { makeStyles } from '@mui/styles';
import { Colors } from 'shared/constants/colors'

export const useCardModalStyles = makeStyles(() => ({
  cardModal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    background: Colors.PinkBGColor,
    padding: 20,
    flexDirection: 'column',
    borderRadius: 20,
    maxWidth: 500,
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',

    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  close: {
    color: Colors.TextColor,
    fontSize: 16,
    paddingTop: 20,
    cursor: 'pointer',
    textAlign: 'center',
  },
}));
