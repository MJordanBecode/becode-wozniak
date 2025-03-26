export default async function fetchDataApi() {
    try {
        const response = await fetch('https://thatsthespir.it/api');

        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
        console.log(data)
        return data;
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
}