// https://restcountries.com/v3.1/name/{country-name}
const btn = document.querySelector('.btn-country');
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const getCountry = async (country_name) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country_name}`);
        if (response.ok) {
            const data = await response.json();
            return data[0];
        }
        else {
            throw new Error(`Not found`);
        }
    } catch (err) {
        alert(err.message);
    }
};

btn.addEventListener('click', async () => {
    const country = $('.country__input').value;
    $('.country__input').value = '';
    try {
        const data = await getCountry(country);
        $('.country__img').setAttribute('src', data.flags.png);
        $('.country__name').innerHTML = `COUNTRY: ${data.name.common}`;
        $('.country__region').innerHTML = `REGION: ${data.region}`;
        $$('.country__row')[0].innerHTML = `<span>👫</span>POP people: ${data.population}`;
        $$('.country__row')[1].innerHTML = `<span>🗣️</span>LANG: ${Object.values(data.languages).join(', ')}`;
        const currencies = Object.values(data.currencies).map(currency => `${currency.name} (${currency.symbol})`).join('<br>');
        $$('.country__row')[2].innerHTML = `<span>💰</span>CUR: ${currencies}`;
    } catch(err) {
        alert("Error: " + err.message);
    }
});

$('.country__input').value = "Vietnam";
btn.click();