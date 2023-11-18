//Get top three headlines
//Specify country? , topic, keywords?

var key = '0e3818379c234955b763ee8cbf53c010'

function fetchHeadlines(country, category, keyWords) {
    // Construct the base URL
    var url = 'https://newsapi.org/v2/top-headlines?';

    // Add country parameter if provided
    if (country) {
        url += 'country=' + country + '&';
    }

    // Add category parameter 

    url += 'category=' + category + '&';

    // Add keyWords parameter if provided
    if (keyWords && keyWords.length > 0) {
        keyWords.forEach((word, index) => {
            url += 'q=' + encodeURIComponent(word);
            
            // Add '&' if there are more keywords
            if (index < keyWords.length - 1) {
                url += '&';
            }
        });
    }

    // Add apiKey parameter
    url += 'apiKey=' + $key;

    // Create a Request object and make the fetch request
    var req = new Request(url);

    fetch(req)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

//Default fetch if the user has not selected any filters



