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