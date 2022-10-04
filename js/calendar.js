class Calendar{

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

                const ptag = document.createElement("p");
                ptag.appendChild(name);

                $("#links").append(ptag);
            }
        
    
        };
    
        
    
    }
    
    
    var calendar = new Calendar();