class Activity{
    endpointUrl="http://localhost:8080/api/v1/activity/2"

    constructor(data){
        this.data = data;
        this.fetchData();
    }
    async fetchData(){
        let response = await fetch(this.endpointUrl);
        this.data = await response.json();
        this.updateUi();
    }
    updateUi(){
        $('#name').text(this.data.name);
        $('#description').text(this.data.description);
        $('#price').text(this.data.price);
    }
  
}
var activity = new Activity();