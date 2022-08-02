import { Planet } from '@/commons/types';
import debounce from 'lodash.debounce';
import { useState, useEffect } from 'react';

export function usePlanetsFilter(planets: Planet[]) {
  const [filteredData, setFilteredData] = useState(planets);

  const filterPlanets = debounce((query) => {
    if (!planets) return;
    if (!query && query.length === 0) return setFilteredData(planets);

    setFilteredData(
      planets.filter(
        ({ name, rotation_period, diameter, orbital_period, population }) => {
          return [name, rotation_period, diameter, orbital_period, population]
            .map((item) => item.toLowerCase())
            .some((value) => value.includes(query.toLowerCase()));
        }
      )
    );
  }, 500);

  useEffect(() => {
    setFilteredData(planets);
  }, [planets]);

  useEffect(() => {
    return () => filterPlanets.cancel();
  }, [filterPlanets]);

  return { filteredData, filterPlanets };
}
