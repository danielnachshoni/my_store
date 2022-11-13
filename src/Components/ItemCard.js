
import { Stack } from '@mui/system'
import React from 'react'
import "../styles/item_card.css";
import { Box, Typography } from '@mui/material';
function ItemCard({ title, img }) {
    return (


            <Stack className="item_card" sx={{backgroundImage:  `url(${img})` }}>    
                <h1 className="card_title">{title}</h1>
                <Typography>Description here over<br /> the item</Typography>
                
            </Stack>



    
    )
}

export default ItemCard