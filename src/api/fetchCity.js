import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCity = createAsyncThunk(
  'citiesSearch/fetchCity', // 'citiesSearch'
  async (part, thunkAPI) => {
    try {
      if (part === undefined) {
        return;
      }
      const response = 
      await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${part}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        const data = await response.json();
        if(data === '' || data.length === 0) {
          return;
        }
        console.log(data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// - Переделали
// async function fetchCity(part) {
//   try {
//     const response = await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${part}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const city = await response.json();
//     if(city === '' || city.length === 0) {
//       return;
//     }
//     console.log(city);
//     return city;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//     // console.error('Ошибка: ', error);
//   }
// };

export default fetchCity;




// 2026/11/11
// --- рабочий пример из 15.11
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const fetchMovies = createAsyncThunk(
//   'moviesSearch/fetchMovies',
//   async (ob, thunkAPI) => {
    
//     try {
//       if (ob === undefined) {
//         return;
//       }
//       const response = 
//       await fetch(`https://www.omdbapi.com?apikey=${ob.apiKey}&s=${ob.textInput}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch Movies');
//       } else {
//         const data = await response.json();
//         return data;
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export default fetchMovies;


// 2026/11/10
// // import { useDispatch } from 'react-redux';
// // const dispatch = useDispatch(); // хук должен быть в нутри компонента

// async function fetchCity(part) {
//   try {
//     const response = await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${part}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const city = await response.json();
//     if(city === '' || city.length === 0) {
//       return;
//     }
//     console.log(city);

//     //  - тут нужно положить в хранилище cities
//     // dispatch(citiesArr(city));
//     // Store.getStore();
//     //
//   } catch (error) {
//     console.error('Ошибка: ', error);
//   }
// };

// export default fetchCity;


// До 2026/11/09 - Первый рабочий вариант, и пока единственный - ???
// async function fetchCity(part) {
//   try {
//     const response = await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${part}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const city = await response.json();
//     if(city === '' || city.length === 0) {
//       return;
//     }
//     console.log(city);
//     return city;
//   } catch (error) {
//     console.error('Ошибка: ', error);
//   }
// };

// export default fetchCity;