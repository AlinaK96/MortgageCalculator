function resultsView(results){
    document.querySelector('#total-percent').innerHTML = results.rate * 100 + '%'
}

export default resultsView