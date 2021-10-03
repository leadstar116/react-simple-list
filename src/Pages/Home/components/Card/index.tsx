import React, { useState } from 'react'
import { Box } from '@mui/material'
import { useCardStyles } from './index.styles'
import CardModal from '../CardModal'

interface CardProps {
  card: CardType
}

interface CardType {
  image: string,
  name: string,
}

const Card: React.FC<CardProps> = ({ card }) => {
  const classes = useCardStyles()
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setOpenModal(false);
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <>
      <Box className={classes.card} onClick={handleOpenModal}>
        <Box className={classes.image}>
          <img
            src={card.image}
            alt={card.name}
          />
        </Box>
        <Box className={classes.cardName}>{card.name}</Box>
      </Box>
      {openModal && (
        <CardModal
          card={card}
          open={openModal}
          onClose={handleModalClose}
        />
      )}
    </>
  )
}

export default Card
