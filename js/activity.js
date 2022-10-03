class Activity{

    endpointUrlActivity = "http://localhost:8080/api/v1/activity";

    endpointUrlRequirements = "http://localhost:8080/api/v1/requirements";
    

    constructor(dataActivity, dataRequirements){
        this.dataActivity = dataActivity;

        this.dataRequirements = dataRequirements;

        this.fetchData();
    }
    
    async fetchData(){
        let responseA = await fetch(this.endpointUrlActivity);
        let responseR = await fetch(this.endpointUrlRequirements);
        this.dataActivity = await responseA.json();
        this.dataRequirements = await responseR.json();
        this.updateHtmlPage();
    
    }
    
    
    updateHtmlPage(){
        
        var activityList = this.dataActivity;
        
        var requirementsList = this.dataRequirements;
            

            for(let i = 0; i < activityList.length; i++){
                console.log(activityList[i]);
                
                var name = activityList[i].name;
                var description = activityList[i].description+"<br>";
                var price = "<br><strong>pris:</strong> " +activityList[i].price+ " DKK";
                var alcoholLevel = "<br><strong>Højest accepterede promille:</strong> 0," + activityList[i].alcoholLevel;
                var reqDesc = "<br><strong>Yderligere krav:</strong> " + activityList[i].requirementsDescrip;
                var maxWeight = "<br><strong>Maks. vægt:</strong> " + activityList[i].maxWeight;
                var maximumAge = "<br><strong>Maks. alder:</strong> " + activityList[i].maximumAge;
                var maximumAttendants = "<br><strong>Maks. deltagere:</strong> " + activityList[i].maximumAttendants;
                var maximumHeight = "<br><strong>Maks. højde:</strong> " +activityList[i].maximumHeight;
                var minimumAge = "<br><strong>Min. alder:</strong> " +  activityList[i].minimumAge;
                var minimumAttendants = "<br><strong>Min. deltagere:</strong> " +  activityList[i].minimumAttendants;
                var minimumHeight = "<br><strong>Min. højde:</strong> " + activityList[i].minimumHeight;

                var divStart = "<div class=\"accordion-item\"><h2 class=\"acordion-header\" id=\"heading"+i+"\"><button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse"+i+"\" aria-expanded=\"true\" aria-controls=\"collapse"+i+"\">";
                var divMiddle = "</button></h2><div id=\"collapse"+i+"\" class=\"accordion-collapse collapse show\" aria-labelledby=\"heading"+i+"\" data-bs-parent=\"#accordionExample\"><div class=\"accordion-body\">";
                var divEnd = "</div></div></div>";
                
                
                var div = divStart + "<strong>"+name+"</strong>" + divMiddle + description + price + "<br>" + "<strong>Krav:</strong>" + alcoholLevel + maximumAttendants+ minimumAttendants +  maximumAge + minimumAge +  maximumHeight + minimumHeight+ maxWeight + reqDesc + divEnd;
                $("#activity").append(div);
            }
        
    
        };
    
        
    
    }
    
    
    var activity = new Activity();