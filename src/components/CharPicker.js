import React from 'react';

import { useHttp } from '../hooks/http';

import './CharPicker.css';

const CharPicker = props => {
  const [isLoading, fetchedData] = useHttp('https://swapi.co/api/people',[]);
  const selectedCharacters = fetchedData ? fetchedData.results
    .slice(0, 5)
    .map((char, index) => ({
        name: char.name,
        id: index + 1
      })) : [];
  // useEffect(() => {
  //   console.log('It works!!!');
  //   setIsLoading(true);
  //   // fetch('https://swapi.co/api/people')
  //   //   .then(response => {
  //   //     if (!response.ok) {
  //   //       throw new Error('Failed to fetch.');
  //   //     }
  //   //     return response.json();
  //   //   })
  //   //   .then(charData => {
  //   //     setIsLoading(false);
  //   //     const selectedCharacters = charData.results.slice(0, 5);
  //   //     setCharacters(
  //   //       selectedCharacters.map((char, index) => ({
  //   //         name: char.name,
  //   //         id: index + 1
  //   //       }))
  //   //     );
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err);
  //   //     setIsLoading(false);
  //   //   });
  // }, []);

  // componentDidMount() {
  // }

  
  let content = <p>Loading characters...</p>;

  if (
    !isLoading &&
    selectedCharacters &&
    selectedCharacters.length > 0
  ) {
    content = (
      <select
        onChange={props.onCharSelect}
        value={props.selectedChar}
        className={props.side}
      >
        {selectedCharacters.map(char => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (
    !isLoading &&
    (!selectedCharacters || selectedCharacters.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
}

export default CharPicker;
