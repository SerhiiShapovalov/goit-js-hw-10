const BASE_URL = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages,',
});

export const fetchCountries = async name => {
  const response = await fetch(
        `${BASE_URL}${name}?fields=name,capital,population,flags,languages`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
};