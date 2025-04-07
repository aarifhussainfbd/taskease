// Google Maps Integration
function initMap() {
    // For job posting page
    if (document.getElementById('map')) {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
        
        const geocoder = new google.maps.Geocoder();
        const locationInput = document.getElementById('jobLocation');
        
        // Autocomplete for location input
        const autocomplete = new google.maps.places.Autocomplete(locationInput);
        autocomplete.bindTo('bounds', map);
        
        autocomplete.addListener('place_changed', function() {
            const place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }
            
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
        });
    }
    
    // For worker profile page
    if (document.getElementById('profile-map')) {
        const profileMap = new google.maps.Map(document.getElementById('profile-map'), {
            center: {lat: 12.9352, lng: 77.6245}, // Koramangala coordinates
            zoom: 14
        });
        
        new google.maps.Marker({
            position: {lat: 12.9352, lng: 77.6245},
            map: profileMap,
            title: "Rajesh's Location"
        });
    }
}

// Load Google Maps API
function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Call loadGoogleMaps when needed
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('map') || document.getElementById('profile-map')) {
        loadGoogleMaps();
    }
});