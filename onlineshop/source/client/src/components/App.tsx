import React from 'react';
import CreateGood from './CreateGoodComponent';
import GoodsList from './GoodListComponent';
import { Container, Box } from '@mui/material';

const App: React.FC = () => {
  const refreshGoods = () => {
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <h1>Good Catalog</h1>
        <CreateGood onCreate={refreshGoods} />
      </Box>
    </Container>
  );
};

export default App;