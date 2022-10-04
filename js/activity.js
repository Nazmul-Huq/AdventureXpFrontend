class Activity{

    endpointUrlActivity = "http://localhost:8080/api/v1/activity";

    /* endpointUrlSecurity = "http://localhost:8080/api/v1/security"; */
    

    constructor(dataActivity/* ,dataSecurity */){
        this.dataActivity = dataActivity;

        /* this.endpointUrlSecurity = dataSecurity; */

        this.fetchData();
    }
    
    async fetchData(){
        let responseA = await fetch(this.endpointUrlActivity);
        
        /* let responseS = await fetch(this.endpointUrlSecurity); */

        this.dataActivity = await responseA.json();
        
        /* this.dataSecurity = await responseS.json(); */

        this.updateHtmlPage();
    
    }

    
    
    
    updateHtmlPage(){

        function compare(a, b) {
            const nameA = a.name;
            const nameB = b.name;
            let comparison = 0;
            if(nameA > nameB){
                comparison = 1;
            }else if(nameA < nameB){
                comparison = -1;
            }
            return comparison;
            
        }
        var activityList = this.dataActivity.sort(compare);

                    
            /* if(usercode == admin){
                generate page with editbutton;
            }else{generate page;} */

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
                var divEnd = "<br><button onclick=\"window.location.href='http://127.0.0.1:5601/api/v1/update-activity?id="+activityList[i].activityId+"'\">REDIGER</button></div></div></div>";
                
                var div = divStart + "<strong>"+name+"</strong>" + divMiddle + description + price + "<br>" + "<strong>Krav:</strong>" + alcoholLevel + maximumAttendants+ minimumAttendants +  maximumAge + minimumAge +  maximumHeight + minimumHeight+ maxWeight + reqDesc + divEnd;
                $("#activity").append(div);
            }
        
    
        };
    
        
    
    }
    
    
    var activity = new Activity();