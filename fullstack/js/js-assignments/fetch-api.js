async function fetchData(){
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let res = await data.json()
        
        document.getElementById('fetch-api-btn').addEventListener("click", function(){
            console.log(res)
            res.forEach((item)=>{
                console.log(item.id)
                document.getElementById('fetch-api-list').innerHTML += `
                ${item.id} , ${item.name}, ${item.username}
                <br>
                `
            })
        })

    }
    catch(err){
        console.log(err)
    }
}

fetchData()