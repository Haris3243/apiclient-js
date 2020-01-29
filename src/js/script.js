function responseDisplay(){
    var dateTime = new Date().toLocaleString();
    let response = fetch('http://localhost:8083/hello');
    let text = response.text(); // read response body as text    
    
    var node = document.createElement('div');        
    node.innerHTML = '<label>'+ dateTime+" "+text +'</label>';       
    document.getElementById('container').appendChild(node);    

}
