// Initialize and add the map
function initMap() {
    // The location of the Wedding
    const position = { lat: 41.095992, lng: 29.053962 };
    // The map, centered at the Wedding
    const map = new google.maps.Map(document.getElementById("mapWeddingLocation"), {
      zoom: 16,
      center: position,
    });
    // The marker, positioned at the Wedding
    const marker = new google.maps.Marker({
      position: position,
      map: map,
    });
  }