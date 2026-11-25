import { createAsyncThunk } from '@reduxjs/toolkit';
// console.log('fetchDirection');

const fetchDirection = createAsyncThunk(
  'directionSearch/fetchDirection',
  async (objDirection, thunkAPI) => {
    
    try {
      if (!objDirection) {
        console.log('Объекта objDirection НЕТ');
      }

      const idCityFrom = objDirection.idCityFrom;
      const idCityTo = objDirection.idCityTo;
      const DateFrom = objDirection.DateFrom;
      const DateTo = objDirection.DateTo;

      let url;

      if (idCityFrom && idCityTo) {
        url = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${objDirection.idCityFrom}&to_city_id=${objDirection.idCityTo}`
      } else if (idCityFrom && idCityTo && DateFrom) {
        url = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${objDirection.idCityFrom}&to_city_id=${objDirection.idCityTo}&date_start=${objDirection.DateFrom}`;
      } else if (idCityFrom && idCityTo && DateFrom && DateTo) {
        url = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${objDirection.idCityFrom}&to_city_id=${objDirection.idCityTo}&date_start=${objDirection.DateFrom}&date_end=${objDirection.DateTo}`
      }
      

      const response = 
      await fetch(url); // date_end
      // await fetch(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=67ceb6548c75f00047c8f78d&to_city_id=67ceb6548c75f00047c8f78e&date_start=2026-10-26`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        const data = await response.json();
        if(data === '' || data.length === 0) {
          console.log('1111111');
          // return;
        }
        console.log(data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchDirection;
