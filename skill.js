document.addEventListener('DOMContentLoaded', function(){
    
    document.querySelector('h1').innerHTML = "Testing with javascript";
    let counter = 0;
    function count(){
        counter++;
        document.querySelector('h1').innerHTML = counter;
        
        if (counter % -10 === 0){
            alert(`Counter is now ${counter}`)
        }
    }

    


    function clea(){
        const times = new Date()
        const day = times.day;
        document.querySelector("h1").innerHTML = counter = 0;
        document.querySelector('h2').innerHTML = times.getDate();

      


        
    }


    function subtract(){

        counter--;
        document.querySelector('h1').innerHTML = counter;

        if (counter % -10 === 0){
            alert(`Counter is now ${counter}`)
        }
    }
        document.querySelector('button').onclick = count;
        document.querySelector('#sub').onclick = subtract;

        fetch('https://reqres.in/api/users/55', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ( {
                name: "user 1"

            })
        })
            .then(res => {
                return res.json()
                
            })
            .then(data => console.log(data))
            .catch(error => console.log('ERRR'))


    

        document.querySelector("#add").innerHTML = "Add";
        document.querySelector("#sub").innerHTML = "Subt";
        document.querySelector('#td').onclick = clea;
const button = document.createElement('button');
button.textContent = "submit";
document.body.appendChild(button);        

});