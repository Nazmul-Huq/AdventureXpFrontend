class Activity{

    endpointUrl = "http://localhost:8080/api/v1/activity";
    
    constructor(data){
        this.data = data;
        this.fetchData();
    }
    
    async fetchData(){
        let response = await fetch(this.endpointUrl);
        this.data = await response.json();
        this.updateHtmlPage();
    
    }
    
    
    updateHtmlPage(){
        
        var activityList = this.data;
        
                var divStart = "<div class=\"btn btn-primary\" type=\"button\">";
                var divEnd = "</div>";
            console.log(activityList)

            for(let i = 0; i < activityList.length; i++){
                var name = activityList[i].name;
                var div = divStart + name + divEnd;
                $("#activity").append(div);

            }
        
    
        };
    
        
    
    }
    
    
    var activity = new Activity();