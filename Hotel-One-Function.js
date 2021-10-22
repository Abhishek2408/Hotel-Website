const hotelBlock = (hotel, id) => {
  document.getElementById(
    "display-hotels"
  ).innerHTML += `<div class="grid-item featured-rooms">
                <div class="image-wrap">
                  <img
                    class="room-image"
                    src="${hotel.image}"
                    alt=""
                  />
                </div>
    
                <div class="hotel-info-wrap">
                  <h5 class="room-name">${hotel.name}</h5>
                  <span class="room-price"
                    >₹ ${hotel.price} / <span class="per-night">Per Night</span></span
                  >
                  <p class="paragraph">
                  ${hotel.details}
                  </p>
                  <p class="location">
                  ${hotel.location}
                  </p>
                  <div class="hotel-rating">
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star-half rating"></i>
                  </div>
                  <a href="./Hotel1.html?hotel=${id}" class="btn-rooms-btn"
                    >Book Now &rarr;</a
                  >
                </div>
              </div>`;
};

hotels.map((hotel, id) => {
  hotelBlock(hotel, id);
});

document.getElementById("top-filter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  filters.destination = document
    .getElementById("destination")
    .value.toLowerCase();
  
  filters.availableOn = document
  .getElementById("available-date")
  .value;
  console.log(filters.availableOn)

  filteredHotels = hotels.filter((hotel) => {
    let filter_1 =false
    let filter_2 =false
    if (filters.destination ==""||filters.destination ==" "||(hotel.location === filters.destination)) {
      filter_1 = true;
    }
    let date_1 = new Date(filters.availableOn)
    let date_2 = new  Date(hotel.dates)
    console.log("date_1"+ date_1);
    console.log("date_2"+ date_2);
    if (filters.availableOn&&(date_1 > date_2)){
      
      filter_2 =  true;
    }
    if(filters.availableOn){
      return filter_1&&filter_2;
    }
    else{
      return filter_1
    }
    // return filter_1&&filter_2;
  });

  document.getElementById("display-hotels").innerHTML = "";

  if (filteredHotels.length !== 0) {
    filteredHotels.map((hotel) => {
      hotelBlock(hotel);
    });
  } else {
    document.getElementById("display-hotels").innerHTML =
      " <h3>no hotels found for the mentioned destination</h3>";
  }
});
