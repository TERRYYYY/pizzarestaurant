//business logic
function PizzaOrder(name){
    this.name=name;
    this.orders=[];
}
PizzaOrder.prototype.fullOrder=function(){
    return this.name + " . " 
}
function PizzaIngredients(size,toppings,crust){
    this.size=size;
    this.toppings=toppings;
    this.crust=crust;
}
PizzaIngredients.prototype.fullIngredients=function(){
    return this.size + " , " + this.toppings + " , " + this.crust;
}
//user interface logic
$ (document).ready(function(){
    $("#add-order").click(function(){
        $("#order-ingredients").append('<div class="col-md-11">'+ 
                '<label for="pizza-name"> Pizza Name</label>'+
                '<input type ="text" id="pizza-name" style="width: 400px;">'+
                '</div>'+ 
            '<div class="col-md-11">'+ 
            '<div id="order-ingredients>' + '<div class="pizza ingredients">'+
                '<label for="pizza-size"> Pizza Size</label>'+
        '<select id="pizza-size" style= "width: 400px;;"  >'+
            '<option value="small"> Small - ksh 1000 </option>'+
            '<option value="medium"> Medium - ksh 1400 </option>'+
            '<option value="large"> Large - ksh 2000 </option>'+
        '</select>'+
            '</div>'+'<div class="col-md-11">'+
        '<label for="pizza-toppings"> Toppings </label>'+
        '<select id ="pizza-toppings" style="width: 400px;">'+
            '<option value="pepperoni"> Pepperoni - ksh 700</option>'+
            '<option value="mushroom"> Mushroom - ksh 700</option>'+
            '<option value="onions"> Onions - ksh 300 </option>'+
            '<option value="sausage"> Sausage - ksh 300 </option>'+
            '<option value="bacon "> Bacon - ksh 500</option>'+
            '<option value="cheese"> Cheese - ksh 500</option>'+
            '</select>'+
            '</div>'+'<div class="col-md-11">'+
        '<label for="pizza-crust"> Pizza Crust</label>'+
        '<select id="pizza-crust" style= "width: 400px;;"  >' +
            '<option value="crispy"> Crispy - ksh 400 </option>' +
            '<option value="stuffed"> Stuffed - ksh 300 </option>' +
            '<option value="gluten-free"> Gluten Free - ksh 200 </option>' + '</select>' +'</div>'+'</div>')
    });
    $("form#new-order").submit(function(event){
        event.preventDefault();
        var inputtedPizzaName= $("input#pizza-name").val();
        var newPizza = new PizzaOrder(inputtedPizzaName);
    });
    $(".pizza-ingredients").each (function(){
        var inputtedPizzaSize = $(this).find("input#pizza-size").val();
        var inputtedPizzaToppings = $(this).find("input#pizza-toppings").val();
        var inputtedPizzaCrust = $(this).find("input#pizza-crust").val();
        var newIngredients=new PizzaIngredients(inputtedPizzaSize, inputtedPizzaToppings, inputtedPizzaCrust)
        newPizza.orders.push(newIngredients)
    });
    $("ul#the-order").append("<li><span class='an-order'>" + newPizza.fullOrder() + "</span></li>");

    $( ".an-order").last().click(function(){
        $("#show-order").show();
        $("#show-order h2").text(newContact.fullOrder());
        $(".first-order").text(newPizza.name);
        newPizza.orders.forEach(function(order){
            $("ul#orders").append("<li" + orders.fullIngredients() + "</li>");

        });
    });

    $("input#pizza-name").val("");
    $("input#pizza-size").val("");
    $("input#pizza-toppings").val("");
    $("input#pizza-crust").val("");

    });



