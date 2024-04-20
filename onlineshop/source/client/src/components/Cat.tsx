import React from 'react'
import { Cat as CatModel } from './Cats'
import Button from '@mui/material/Button'
import { deleteCat } from '../api/requests'

interface IProps {
    cat: CatModel,
    deleteHandler: (id: string) => void,
}

export default function Cat(props: IProps) {
    
    const deleteHandler = () => {
        console.log(`delete clicked ${props.cat.id}`)
        deleteCat(props.cat.id);
        props.deleteHandler(props.cat.id);
    }

  return (
    <div>
        <h2>Cat</h2>
        <p>Name: {props.cat.name}</p>
        <p>Age: {props.cat.age}</p>
        <Button variant="contained" color="error" onClick={deleteHandler}>
            Delete
        </Button>
    </div>
  )
}
