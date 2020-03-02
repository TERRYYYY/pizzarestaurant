// business logic
function PizzaName(name) {
    this.pizzaName = name;
    this.pizzatype = [];
}

  PizzaName.prototype.fullName = function() {
    return this.pizzaName + " . " 
  }
  function PizzaIngredients(size, toppings, crust) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
  }
   PizzaIngredients.prototype.fullIngredients = function() {
    return this.size + ", " + this.toppings + ", " + this.crust;
  }
  
  // user interface logic;
  
  $(document).ready(function() {

    $("#add-order").click(function() {
      $("#new-order").append('<div class="order-ingredients">' +
                                   '<div class="form-group">' +
                                     '<label for="new-size">Size</label>' +
                                     '<input type="text" class="form-control new-size">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-toppings">Toppings</label>' +
                                     '<input type="text" class="form-control new-toppings">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-crust">Crust</label>' +
                                     '<input type="text" class="form-control new-crust">' +
                                   '</div>' +
                                 '</div>');
    });
  
    $("form#new-order").submit(function(event) {
      event.preventDefault();
  
      var inputtedPizzaName = $("input#new-pizza-name").val();
      var newPizza = new PizzaName(inputtedPizzaName,);
  
      $(".order-ingredients").each(function() {
        var inputtedSize = $(this).find("input#new-size").val();
        var inputtedToppings = $(this).find("input#new-toppings").val();
        var inputtedCrust = $(this).find("input#new-crust").val();
        var newIngredients = new PizzaIngredients(inputtedSize, inputtedToppings, inputtedCrust)
        newPizza.pizzatype.push(newIngredients)
      });
  
      $("ul#the-order").append("<li><span class='an-order'>" + newPizza.fullName() + "</span></li>");
  
      $(".an-order").last().click(function() {
        $("#show-order").show();
        $("#show-order h2").text(newPizza.fullName());
        $(".first-pizza").text(newPizza.pizzaName);
        $("ul#ingredients").text("");
        newPizza.pizzatype.forEach(function(type) {
        $("ul#ingredients").append("<li>" + type.fullIngredients() + "</li>");
        });
      });
  
      $("input#new-pizza-name").val("");
      $("input.new-size").val("");
      $("input.new-toppings").val("");
      $("input.new-crust").val("");
  
    });
  });

  //$(document).ready(function(){
    //document.getElementById("yourdelivery").addEventListener("submit",popUp);
    //function popUp(){

      //alert("Thankyou. We have received your order. Your delivery will be made at" + location )

    //}
  //})
  
  function myFunction() {
    var person = prompt("Please enter your name:");
    var location = prompt("Please enter your location")
    if (person == null || person == "" , location == null || location == "") {
      alert("Please fill in your details!");
    } else {
      alert("Hello " + person + "! We have received your order and your delivery will be made at "  + location );
    }
  
  }
    function calculate(){
      var field1 = document.getElementById("size-price").value ;
      var field2 = document.getElementById("toppings-price").value ;
      var field3 = document.getElementById("crust-price").value ;

      var result = parseFloat(field1) + parseFloat(field2) + parseFloat(field3);

      if (!isNaN(result)){
      document.getElementById("answer").innerHTML= " Your total is  " +  result  ;
      }
    }
  
    
  