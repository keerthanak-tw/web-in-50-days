const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');

const getUser = async (username) => {
    try {
        const { data } = await axios(APIURL + username);
        console.log(data);
    } catch(error) {
        console.log(err);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = '';
    }
})
