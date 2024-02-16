fetch('https://sewellstephens.com/_posts/blog/' + window.location.pathname)
    .then(response => response.text())
    .then(result => document.getElementById('content').innerHTML = marked(result));