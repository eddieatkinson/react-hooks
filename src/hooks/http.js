import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ fetchedData, setFetchedData ] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    console.log('http request to url:' + url);
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch.');
      }
      return response.json();
    })
    .then(data => {
      setIsLoading(false);
      // const selectedCharacters = charData.results.slice(0, 5);
      setFetchedData(data);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });
  }, dependencies);
  return [isLoading, fetchedData];
}