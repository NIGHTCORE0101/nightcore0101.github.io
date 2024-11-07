function initMap() {
  // Lokasi Kota Jogja
  const jogja = { lat: -7.7956, lng: 110.3695 }; // Koordinat Yogyakarta
  // Membuat peta
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: jogja,
  });
  // Menambahkan marker
  const marker = new google.maps.Marker({
    position: jogja,
    map: map,
    title: "Kota Jogja",
  });
}