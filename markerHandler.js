AFRAME.registerComponent('markerHandler', {
    init: async function () {
        this.el.addEventListener("markerFound", () => {
            var markerId = this.el.id;      
            this.handleMarkerFound(toys, markerId);
        });

        this.el.addEventListener("markerLost", () => {
            this.handleMarkerLost();
        });
    },
    handleMarkerFound: function (toys, markerId) {
        // Changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";
    
        var ratingButton = document.getElementById("rating-button");
        var orderButtton = document.getElementById("order-button");
    
        // Handling Click Events
        ratingButton.addEventListener("click", function () {
          swal({
            icon: "warning",
            title: "Rate Toy",
            text: "Work In Progress"
          });
        });
        orderButtton.addEventListener("click", () => {
            swal({
              icon: "https://i.imgur.com/4NZ6uLY.jpg",
              title: "Thanks For Order !",
              text: "Your order will serve soon on your table!"
            });
          });
    },
    handleMarkerLost: function () {
        // Changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
});