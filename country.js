async function displayCountryFlags() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const countries = await response.json();

        countries.forEach((country) => {
            const flag = country.flags?.png;
            const name = country.name?.common;

            if (flag && name) {
                console.log(`Country: ${name}, Flag: ${flag}`);
            }
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

displayCountryFlags();
