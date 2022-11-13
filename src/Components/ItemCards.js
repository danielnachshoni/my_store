import React from 'react'
import ItemCard from './ItemCard'
import "../styles/item_card.css";
import { Stack } from '@mui/material';

function ItemCards() {
    let categories = [
        { title: 'Hats', id: 1, img: "https://i.ibb.co/GCCdy8t/womens.png" },
        { title: 'Sneakers', id: 2, img: "https://cdn.stocksnap.io/img-thumbs/960w/father-son_OJYJ8OE9OA.jpg" },
        { title: 'Men', id: 3, img: "https://www.shutterstock.com/image-photo/african-american-boy-on-shoulders-600w-484650583.jpg" },
        { title: 'Women', id: 4, img: "https://www.shutterstock.com/image-photo/african-american-boy-on-shoulders-600w-484650583.jpg" },
        { title: 'Shirts', id: 5, img: "https://www.shutterstock.com/image-photo/african-american-boy-on-shoulders-600w-484650583.jpg" },
    ]



    let categories_cards = () => {
        return categories.map((category, i) =>
            <ItemCard title={category.title} img={category.img} />)

    }
    return (
        <Stack className="all_items_categories" direction="row">
            {categories_cards()}
        </Stack>
    )
}

export default ItemCards