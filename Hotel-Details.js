// this file is for Hotel1.html

var url = new URL(window.location.href);
var hotelId = url.searchParams.get("hotel");

// the detals tabs transition
$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

$("#hotel1_id").attr("src", hotels[hotelId].video);

hotels[hotelId].images.map((imgLink) => {
  document.getElementById(
    "hotel1_images-container"
  ).innerHTML += `<div id="first-image-div" class="row my-row">
  <div class="image-wrap">
      <img class="room-image" src="${imgLink}" alt="">
  </div>
  </div>`;
});


$("#booking_details").html(`<div class="text-start">
                                <span id="hot-name">${hotels[hotelId].name}</span>
                                <br>
                                <i class="fas fa-users"></i>
                                <span>King Room with Plaza Graden View</span>
                                <div class="rule">
                                    <div class="non-refund">
                                        <i class="fas fa-times"></i><span>Non-Refundable</span>
                                    </div>
                                    <div class="room-only">
                                        <i class="fas fa-check"></i><span>Room only</span>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-yellow px-5 py-2 main-btn">Book This Now</a>
                            </div>
                            <div class="price-section">
                                <p><span>per night </span>
                                    <br>
                                <h3>₹ ${hotels[hotelId].price}</h3><span>+ ₹803 taxes & fees</span></p>
                            </div>`)

$(".iframe_location").attr(`src`,hotels[hotelId].location_url);