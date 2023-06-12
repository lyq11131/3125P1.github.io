function initMap() {
    // 创建一个新的地图实例
    var map = new google.maps.Map(document.querySelector('map'), {
        center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
        zoom: ZOOM_LEVEL
    });

    // 添加标记（可选）
    var marker = new google.maps.Marker({
        position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
        map: map,
        title: 'Marker Title'
    });
}