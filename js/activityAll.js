
class ActivityAll{
endpointUrl = "http://127.0.0.1:8080/api/v1/activity/1"
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
    $('#name').text(this.data.name);
    $('#desc').text(this.data.description);
}
}
var activityAll = new ActivityAll();



