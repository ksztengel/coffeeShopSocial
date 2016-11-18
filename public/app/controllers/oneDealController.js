'use strict'
app.controller('oneDealController', function($scope, DealService, $routeParams, $location) {
    console.log('in oneDeal controller');
    $scope.view = {}

    var id = $routeParams.id
    DealService.one(id).then(results => {
        $scope.oneDeal = results.data
    })

    mapboxgl.accessToken = 'pk.eyJ1IjoiY291cnRuZXlzYW5kZXJzIiwiYSI6ImNpdm10ZmF5dzAwMGUydGs0bGNkeXU4eXIifQ.sOriWj2-8p2AX_FkDR-sfQ';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
        center: [-74.50, 40], // starting position
        zoom: 9 // starting zoom
    });

    map.addControl(new mapboxgl.GeolocateControl());

    map.addControl(new mapboxgl.NavigationControl());
    var marker = new mapboxgl.Marker()
        .setLngLat([-74.50, 40])
        .addTo(map);

        // var marker = L.marker([40.047050, -105.272148]).addTo(map);

    // $scope.submitNew = function() {
    //     DealService.new($scope.deal).then(newDeal => {
    //         $scope.deals.push($scope.deal),
    //             $scope.deal = {},
    //             $scope.dealForm.$setPristine(),
    //             $scope.newDeal = {}
    //
    //     })
    // }

    // $scope.submitEdit = function(id) {
    //         const editDeal = $scope.oneDeal
    //         DealService.update(editdeal).then(results => {
    //             $location.url('/')
    //         })
    //     }

})
