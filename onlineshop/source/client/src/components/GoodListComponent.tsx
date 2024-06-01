import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { createGood } from '../api/api';

const CreateGood: React.FC<{ onCreate: () => void }> = ({ onCreate }) => {
  const [goodData, setGoodData] = useState({
    id: '',
    selfdiscount: '',
    name: '',
    price: '',
    quantity: '',
    goodtype: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGoodData({
      ...goodData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createGood(goodData);
      onCreate();
      setGoodData({
        id: '',
        selfdiscount: '',
        name: '',
        price: '',
        quantity: '',
        goodtype: '',
      });
    } catch (error) {
      console.error('Error creating good:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="ID" name="id" value={goodData.id} onChange={handleChange} />
      <TextField label="Self Discount" name="selfdiscount" value={goodData.selfdiscount} onChange={handleChange} />
      <TextField label="Name" name="name" value={goodData.name} onChange={handleChange} />
      <TextField label="Price" name="price" value={goodData.price} onChange={handleChange} />
      <TextField label="Quantity" name="quantity" value={goodData.quantity} onChange={handleChange} />
      <TextField label="Good Type" name="goodtype" value={goodData.goodtype} onChange={handleChange} />
      <Button variant="contained" type="submit">Create Good</Button>
    </Box>
  );
};

export default CreateGood;

