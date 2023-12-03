async function displayCountryInfo() {
    try {

        const response = await fetch('https://restcountries.com/v3.1/all');

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const countries = await response.json();

        countries.forEach((country) => {
            const name = country.name?.common;
            const subregion = country.subregion;
            const population = country.population;

            if (name && subregion && population) {
                console.log(`Country: ${name}, Subregion: ${subregion}, Population: ${population}`);
            }
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

displayCountryInfo();
