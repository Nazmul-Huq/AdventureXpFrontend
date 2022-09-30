class UserAll{
    endpointUrl = "http://127.0.0.1:8080/api/v1/user/"
    constructor(data){
        this.data = data;
        this.fetchData();
    }
    async fetchData(){
        let response = await fetch(this.endpointUrl);
        this.data = await response.json();
        this.updateUI();
    }
    updateUI(){
        $('#username').text(this.data.username);
        
    }
    }
    var userAll = new UserAll;