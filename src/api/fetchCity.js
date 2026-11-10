async function fetchCity(part) {
  try {
    const response = await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${part}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const city = await response.json();
    if(city === '' || city.length === 0) {
      return;
    }
    console.log(city);
    return city;
  } catch (error) {
    console.error('Ошибка: ', error);
  }
};

export default fetchCity;





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