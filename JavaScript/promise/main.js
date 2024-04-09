const loader = document.querySelector('div');
function fetchUsers() {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();

            resolve(data);
            
            loader.classList.add('hide')

        } catch (e) {
            reject(error.message);
            loader.classList.add('hide')

        }

    })
}
fetchUsers().then(console.log);