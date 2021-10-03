import React from 'react'
import { Box, Modal } from '@mui/material'
import { useCardModalStyles } from './index.styles'

interface CardProps {
  card: CardType,
  open: boolean,
  onClose: () => void,
}

interface CardType {
  image: string,
  name: string,
}

const CardModal: React.FC<CardProps> = ({ card, open, onClose }) => {
  const classes = useCardModalStyles()

  return (
    <Modal
      className={classes.cardModal}
      open={open}
      onClose={onClose}
    >
      <Box className={classes.modalContent}>
        <Box className={classes.image}>
          <img
            src={card.image}
            alt={card.name}
          />
        </Box>
        <Box className={classes.close} onClick={onClose}>Close</Box>
      </Box>
    </Modal>
  )
}

export default CardModal
