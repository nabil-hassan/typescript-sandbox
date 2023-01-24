import fetch from "node-fetch";

async function doPostRequest() {
    console.log("Making POST request");
    
    const response = await fetch('https://bin.org/post', {method: 'POST', body: 'a=1'});
    const data = await response.json();
    
    console.log(data);
}

doPostRequest().catch(console.error);