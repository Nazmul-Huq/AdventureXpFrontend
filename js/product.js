class Product{

    endpointUrlProduct = "http://localhost:8080/api/v1/product";


    addToCalc(name, price){

        

        function generateID(length) {
            let text = ""
            const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        
            for(let i = 0; i < length; i++)  {
                text += possible.charAt(Math.floor(Math.random() * possible.length))
            }
        
            return text
        }

        var id = generateID(100);

        var idDelete = generateID(100);

        var sale = `<tr id="${id}">
        <th scope="row" class="border-0">
        <div class="p-2">${name}</div>
        </th>
        <td class="border-0 align-middle">
        <strong>${price}</strong>
        </td>
        <td class="border-0 align-middle">
        <strong
        ><button id="${idDelete}"
        class="btn btn-danger btn-sm active"
        role="button"
        aria-pressed="true"
        >X</a
        ></strong
        >
        </td>
        </tr>`;


        var idStuff = "#"+idDelete;

        $(idStuff).click(this.removeFromCalc(id,price));

        $("#calProduct").append(sale)

        
    };

    removeFromCalc(id,price){
        console.log(id)
        var stuff = document.getElementById(id);
        console.log(stuff)
    };

    updateTotal(){

    }
    

    constructor(dataProduct){
        this.dataProduct = dataProduct;
        console.log("constructor")
        this.fetchData();
    }
    
    async fetchData(){
        let responseP = await fetch(this.endpointUrlProduct);
        console.log("fetchData")
        this.dataProduct = await responseP.json();
        

        this.updateHtmlPage();
        
    
    }


    updateHtmlPage(){
        console.log("update")
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

        var productList = this.dataProduct.sort(compare);

        console.log(productList)

        for(var i = 0; i < productList.length; i+=3){
            
            this.addToCalc;
            
            console.log(productList[i])
            productList[i];
            
            var L = i+1;
            var J = i+2;
            let productPrint

            function generateID(length) {
                let text = ""
                const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            
                for(let i = 0; i < length; i++)  {
                    text += possible.charAt(Math.floor(Math.random() * possible.length))
                }
            
                return text
            }

            var idi = generateID(100);
            var idL = generateID(100);
            var idJ = generateID(100);
            var idiElement = "#"+idi;
                var idLElement = "#"+idL;
                var idJElement = "#"+idJ;

            if(L < productList.length && J < productList.length){
            productPrint =
            `<div class="row d-flex justify-content-center">
            
            <div class="col-3 d-flex justify-content-center" style="margin-bottom:2em">
            <div class=\"card d-flex justify-content-center\" style=\"width: 50%;\">
            <img class=\"card-img-top\" style="width: 100%" src=\"img/${productList[i].name}.jpg\" alt=\"${productList[i].name} billede\">
            <div class=\"card-body d-flex flex-column justify-content-end \">
            <p class=\"card-text \">

            <div class="d-flex justify-content-center\" ">${productList[i].name} ${productList[i].price} kr.
            </div>
            <button class="d-flex justify-content-center" id="${idi}" onclick="addToCalc(${productList[i].name},${productList[i].price})">Tilføj</button>
            <button class="d-flex justify-content-center" onclick=\"window.location.href='http://127.0.0.1:5601/update-product.html?id=${productList[i].id}'\">Rediger</button>
            </p> 
            </div> 
            </div>
            </div>

            <div class="col-3 d-flex justify-content-center" style="margin-bottom:2em">
            <div class=\"card d-flex justify-content-center\" style=\"width: 50%;\">
            <img class=\"card-img-top\" style="width: 100%" src=\"img/${productList[L].name}.jpg\" alt=\"${productList[L].name} billede\">

            <div class=\"card-body d-flex flex-column justify-content-end \"> 
            
            <p class=\"card-text \">
            <div class="d-flex justify-content-center\">${productList[L].name} ${productList[L].price} kr.
            </div>
            <button class="d-flex justify-content-center" id="${idL}" >Tilføj</button>
            <button class="d-flex justify-content-center" onclick=\"window.location.href='http://127.0.0.1:5601/update-product.html?id=${productList[i].id}'\">Rediger</button>
            </p> 
            </div> 
            </div>
            </div>
            
            <div class="col-3 d-flex justify-content-center" style="margin-bottom:2em;">
            <div class="card d-flex justify-content-center" style="width: 50%;">
            <img class= "card-img-top " style="width: 100%" src="img/${productList[J].name}.jpg" alt="${productList[J].name} billede">
            
            <div class="card-body d-flex flex-column justify-content-end" > 
            
            <p class="card-text ">
            <div class="d-flex justify-content-center\" >${productList[J].name} ${productList[J].price} kr.</div>
            <button class="d-flex justify-content-center" id="${idJ}">Tilføj</button>
            <button class="d-flex justify-content-center" onclick=\"window.location.href='http://127.0.0.1:5601/update-product.html?id=${productList[J].id}'">Rediger</button>
            </p> 
            
            </div> 
            </div>
            </div>
            </div>`
            $(idiElement).click(this.addToCalc(productList[i].name,productList[i].price))
                $(idLElement).click(this.addToCalc(productList[L].name,productList[L].price))
                $(idJElement).click(this.addToCalc(productList[J].name,productList[J].price))
            ;
        
            $("#product").append(productPrint)
        }else{

        if(i == productList.length){
            productPrint =
            `<div class="row d-flex justify-content-center">
            
            <div class="col-3 d-flex justify-content-center" style="margin-bottom:2em">
            <div class=\"card d-flex justify-content-center\" style=\"width: 50%;\">
            <img class=\"card-img-top\" style="width: 100%" src=\"img/${productList[i].name}.jpg\" alt=\"${productList[i].name} billede\">
            <div class=\"card-body d-flex flex-column justify-content-end \">
            <p class=\"card-text \">

            <div class="d-flex justify-content-center\">${productList[i].name} ${productList[i].price} kr.
            </div>
            <button class="d-flex justify-content-center" id="${idi}">Tilføj</button>
            <button class="d-flex justify-content-center" onclick=\"window.location.href='http://127.0.0.1:5601/update-product.html?id=${productList[i].id}'\">Rediger</button>
            </p> 
            </div> 
            </div>
            </div>

            <div class="col-3 d-flex justify-content-center" style="margin-bottom:2em">
            <div class=\"card d-flex justify-content-center\" style=\"width: 50%;\">
            <img class=\"card-img-top\" style="width: 100%">

            <div class=\"card-body d-flex flex-column justify-content-end \"> 
            
            <p class=\"card-text \">
            <div class="d-flex justify-content-center\">
            </div>
            </p> 
            </div> 
            </div>
            </div>
            
            <div class="col-3 d-flex justify-content-center" style="margin-bottom:2em;">
            <div class="card d-flex justify-content-center" style="width: 50%;">
            <img>
            
            <div class="card-body d-flex flex-column justify-content-end" > 
            
            <p class="card-text ">
            <div class="d-flex justify-content-center\" ></div>
            </p> 
            
            </div> 
            </div>
            </div>
            </div>`
            
            $(idiElement).click(this.addToCalc(productList[i].name,productList[i].price))
            ;

            $("#product").append(productPrint);
        }else{

            if(true) {
                productPrint =
            `<div class="row d-flex justify-content-center">
            
            <div class="col-3 d-flex justify-content-center" style="margin-bottom:2em">
            <div class=\"card d-flex justify-content-center\" style=\"width: 50%;\">
            <img class=\"card-img-top\" style="width: 100%" src=\"img/${productList[i].name}.jpg\" alt=\"${productList[i].name} billede\">
            <div class=\"card-body d-flex flex-column justify-content-end \">
            <p class=\"card-text \">

            <div class="d-flex justify-content-center\">${productList[i].name} ${productList[i].price} kr.
            </div>
            <button class="d-flex justify-content-center" id="${idi}">Tilføj</button>
            <button class="d-flex justify-content-center" onclick=\"window.location.href='http://127.0.0.1:5601/update-product.html?id=${productList[i].id}'\">Rediger</button>
            </p> 
            </div> 
            </div>
            </div>

            <div class="col-3 d-flex justify-content-center" style="margin-bottom:2em">
            <div class=\"card d-flex justify-content-center\" style=\"width: 50%;\">
            <img class=\"card-img-top\" style="width: 100%" src=\"img/${productList[L].name}.jpg\" alt=\"${productList[L].name} billede\">

            <div class=\"card-body d-flex flex-column justify-content-end \"> 
            
            <p class=\"card-text \">
            <div class="d-flex justify-content-center\">${productList[L].name} ${productList[L].price} kr.
            </div>
            <button class="d-flex justify-content-center" id="${idL}">Tilføj</button>
            <button class="d-flex justify-content-center" onclick=\"window.location.href='http://127.0.0.1:5601/update-product.html?id=${productList[i].id}'\">Rediger</button>
            </p> 
            </div> 
            </div>
            </div>
            
            <div class="col-3 d-flex justify-content-center" style="margin-bottom:2em;">
            <div class="card d-flex justify-content-center" style="width: 50%;">
            <img>
            
            <div class="card-body d-flex flex-column justify-content-end" > 
            
            <p class="card-text ">
            <div class="d-flex justify-content-center\" ></div>
            </p> 
            
            </div> 
            </div>
            </div>
            </div>`
            $(idiElement).click(this.addToCalc(productList[i].name,productList[i].price))
                $(idLElement).click(this.addToCalc(productList[L].name,productList[L].price))
            ;

                
                

            $("#product").append(productPrint)

            
            }}}   
            
        }



    }

    



}
var product = new Product(); 