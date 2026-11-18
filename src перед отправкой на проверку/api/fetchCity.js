import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCity = createAsyncThunk(
  'citiesSearch/fetchCity', // 'citiesSearch'
  async (part, thunkAPI) => {
    try {
      if (part === undefined) {
        console.log(part + ' part === undefined');
        return;
      }
      const response = 
      await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${part}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        const data = await response.json();
        if(data === '' || data.length === 0) {
          console.log('data === нет || data.length === 0');
          // return;
        }
        
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchCity;
