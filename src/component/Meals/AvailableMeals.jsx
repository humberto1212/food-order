import React from 'react'
import './availableMeals-style.css'
import MealCards from './MealItems/MealCards';

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Tacos',
    description: 'Mexican',
    price: 18.99,
  },
  {
    id: 'm6',
    name: 'Arepas',
    description: 'Venezuelan',
    price: 18.99,
  },
];


function AvailableMeals() {

  const mealsList =  DUMMY_MEALS.map((meal) => 
  
  <MealCards 
  name={meal.name} 
  description={meal.description} 
  price={meal.price}
  key={meal.id}
  id={meal.id}
  />)

  return (
    <section>
      <ul className='available-style'>
        {
        mealsList
        }
      </ul>
    </section>
  )
}

export default AvailableMeals
