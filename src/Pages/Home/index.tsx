import React, { useState } from 'react'
import { Box, Button, Drawer, Grid } from '@mui/material'
import SideBar from 'shared/components/SideBar'
import Card from './components/Card'
import { useHomePageStyles } from './index.styles'

const CardData = [
  {
    name: 'Pattern One',
    image: require('assets/images/color1.jpg').default,
  },
  {
    name: 'Color Two',
    image: require('assets/images/color2.jpg').default,
  },
  {
    name: 'Color Three',
    image: require('assets/images/color3.jpg').default,
  },
  {
    name: 'Color Four',
    image: require('assets/images/color4.jpg').default,
  },
  {
    name: 'Color Five',
    image: require('assets/images/color5.jpg').default,
  },
  {
    name: 'Color Six',
    image: require('assets/images/color6.jpg').default,
  }
]

const Home: React.FC = () => {
  const classes = useHomePageStyles()
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <Box className={classes.homePage}>
      <Box className={classes.menu}>
        <Button className={classes.menuBtn} onClick={handleMenuClick}>
          <img
            src={require('assets/images/hambacon-icon.png').default}
            alt="Minds"
          />
        </Button>
      </Box>
      <Drawer className={classes.drawer} anchor="left" variant="persistent" open={isSideBarOpen}>
        <SideBar />
      </Drawer>
      <Box className={classes.logo}>
        <img
          src={require('assets/images/icon.png').default}
          alt="Minds"
        />
      </Box>
      <h1 className={classes.title}>The Great Pattern Challenge</h1>
      <Grid className={classes.cardContainer} container spacing={2}>
        {CardData.map((card) => <Grid item xs={12} sm={6} md={4}><Card card={card} /></Grid>)}
      </Grid>
    </Box>
  )
}

export default Home
