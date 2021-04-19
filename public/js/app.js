// console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data)
            console.log(data.forecast)
        }
    })
})

var fetchDetails=function(value)
{
fetch('/weather?address='+value).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data)
            console.log(data.forecast)
        }
    })
})
}

var doc=document.querySelector('form');

doc.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchVal=document.querySelector('input[type=text]').value;
    fetchDetails(searchVal);
    console.log();
    
})