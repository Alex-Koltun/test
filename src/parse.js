var Api = {
        parseData : function(data) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', data, false);
        xhr.send();
        if (xhr.status != 200) {
            console.log( xhr.status + ': ' + xhr.statusText );
        } else {
            return JSON.parse(xhr.responseText);
        }
    }
}

export default Api
