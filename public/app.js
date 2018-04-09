document.getElementsByTagName('button')[0].addEventListener('click', function(e){
    const query = "hello"
    
    e.preventDefault();
    fetch('/graphql',{
        method: 'GET',
        headers: {
            'content-tupe': 'application/json'
        }
    })
        .then(res=>res.json())
        .then(jsonRes=> console.log(jsonRes))
})