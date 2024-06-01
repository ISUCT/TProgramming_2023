import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

interface SearchGoodProps {
  onSearch: (id: string) => void;
}

const SearchGood: React.FC<SearchGoodProps> = ({ onSearch }) => {
  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    onSearch(searchId);
    setSearchId('');
  };

  return (
    <div>
      <Typography variant="h5">Search Good by ID:</Typography>
      <TextField
        label="Enter ID"
        variant="outlined"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchGood;
