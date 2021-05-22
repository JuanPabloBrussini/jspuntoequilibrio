
const llamarApi = async ()=>{

    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const data = await response.json()

    $('#name').text(data[0].name)
    $('#email').text(data[0].email)
}

$('#siguiente').on('click', llamarApi)
