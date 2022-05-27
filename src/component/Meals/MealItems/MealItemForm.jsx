import React, {useRef, useState} from 'react'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import Input from '../../UI/Input'

export default function MealItemForm(props) {
const [amountIsValid, setAmountIsValid] = useState(true)

const amountInputRef = useRef();     

  const submitHandler = event =>{
    event.preventDefault();  
    
     const enteredAmount = amountInputRef.current[0].value
     const enteredAmountNumber = +enteredAmount
    


       if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
        setAmountIsValid(false)
        return
       }
       
    //props.onSetNumValue(enteredAmountNumber)
    props.onAddToCard(enteredAmountNumber)
  }

  return (
    <Box
    component='form'
    style={{display: 'flex', flexDirection: 'column'}}
    onSubmit={submitHandler}
    ref={amountInputRef}
    >
        <Input 
        label="Amount" 
        input={{
            id: `Amount_${props.id}`,
            type:'number',
            min: '1',
            max: '5',
            step:'1',
            defaultValue: '1'
        }}
        />
        <Button type="submit">+ Add</Button> 
        {amountIsValid === false && <p>Please enter a valid amount 1 - 5</p>}
    </Box>
  )
}
