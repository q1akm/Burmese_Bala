export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '9cc899931cmsh1666f6a4f718691p13ae8ejsne5f114a8c29a',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async(url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;
};