import { flexbox } from '@mui/system'
import React from 'react'

function MealsSummary() {
  return (
    <section style={{marginBottom: 100, display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
      <h3>Delicious Food</h3>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  )
}

export default MealsSummary