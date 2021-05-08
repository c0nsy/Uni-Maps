
//mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2xvZ2FuY3MiLCJhIjoiY2tuaTR3OGVsMHU3ODJ3cDVmMWZ5Z2tuciJ9.OquwBA2myFqOQCC9DiS6YQ';

//list of nodes for testing
var nodeList = ['laz_se','laz_n'];
//position array
var posArr = [];
//destination node
var dest_node = "";
//array of every object
var mapIcons = {
    'type': 'FeatureCollection',
    //array of json
    'features': [
        {
            //testing popup area
            'type': 'Feature',
            'properties':{
                'description': 'Lazaridis School of Business and Economics, South East Entrance.',
                'name': 'laz_se',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52859,43.475]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Lazaridis School of Business and Economics, North Entrance.',
                'name': 'laz_n',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530131,43.475478]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Lazaridis School of Business and Economics, South West Entrance.',
                'name': 'laz_sw',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529162,43.474775]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Music Building, North East Entrance.',
                'name': 'music_ne',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52833,43.474849]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Music Building, East Entrance.',
                'name': 'music_e',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528,43.4747]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Music Building, South West Entrance',
                'name': 'music_sw',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528302,43.474223]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dining Hall, East Entrance.',
                'name': 'dh_e',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528301,43.474222]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dining Hall, South Entrance.',
                'name': 'dh_s',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52855,43.4742]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dining Hall, West Entrance.',
                'name': 'dh_w',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529199,43.474145]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building E, East Entrance.',
                'name': 'artse_e',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529137,43.474109]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building E, West Entrance.',
                'name': 'artse_w',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.5296,43.473855]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building C, West Entrance.',
                'name': 'artsc_w',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529136,43.474108]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building C, East Entrance.',
                'name': 'artsc_e',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.5297,43.473854]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building C, North Entrance.',
                'name': 'artsc_n',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530201,43.473853]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Arts Building C, South Entrance.',
                'name': 'artsc_s',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530076,43.473616]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Peters Building, North East Entrance.',
                'name': 'peters_ne',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530535,43.473773]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Peters Building, South East Entrance.',
                'name': 'peters_se',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530288,43.473468]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Peters Building South West.',
                'name': 'peters_sw',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530446,43.473465]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Peters Building North West.',
                'name': 'peters_nw',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.531102,43.47364]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Schliegel Building, Entrance.',
                'name': 'schliegel_e',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530287,43.473469]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Schliegel Building, North West.',
                'name': 'schliegel_nw',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530447,43.473464]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dr. Alvin Woods Building (DAWB), North Entrance.',
                'name': 'dawb_n',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529416,43.473509]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Dr. Alvin Woods Building (DAWB), South Entrance.',
                'name': 'dawb_s',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529671,43.473256]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Library, East Entrance.',
                'name': 'library_e',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529749,43.472942]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Seminary, North Entrance.',
                'name': 'seminary_n',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528888,43.472112]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Seminary, South Entrance.',
                'name': 'seminary_s',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528637,43.471897]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Academic, North Entrance.',
                'name': 'brickeracademic_n',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.526549,43.472782]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Academic, South Entrance.',
                'name': 'brickeracademic_s',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.526412,43.472621]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Science Building, North West Entrance.',
                'name': 'science_nw',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525883,43.47349]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Science Building, North Entrance.',
                'name': 'science_ne',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525047,43.473593]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Science Building, South East Entrance.',
                'name': 'science_se',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524812,43.47326]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Science Building, South West Entrance.',
                'name': 'science_sw',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525437,43.472964]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Co-op Building, East Entrance.',
                'name': 'coop_e',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52426,43.473951]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Athletic Complex (AC), South Entrance.',
                'name': 'ac_s',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525896,43.474966]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Fred Nichols Building, East Entrance.',
                'name': 'frednichols_e',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528539,43.473764]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Southeast corner of University and Albert, on Albert.',
                'name': 'c_1',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.531674,43.473292]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Southeast corner of University and Albert, on University.',
                'name': 'c_2',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.531106,43.473848]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bus stop at University and Albert, north of Peters Building.',
                'name': 'c_3',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530304,43.474129]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Street lights between Lazaridis Hall and walkway to Solarium/Dining Hall/Arts E.',
                'name': 'c_4',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529473,43.474504]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Street lights at University and Hazel.',
                'name': 'c_5',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528081,43.475095]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Top of driveway into Conrad Hall, near garbage bins.',
                'name': 'c_6',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.527125,43.475561]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Southwest corner of University and King.',
                'name': 'c_7',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525176,43.476178]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Driveway entrace to AC parking lot off of King St',
                'name': 'c_8',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524815,43.47491]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Walkway between Alumni Field and AC.',
                'name': 'c_9',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525754,43.47456]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bottom of ramp down from Willison hall into parking lot.',
                'name': 'c_10',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52639,43.474409]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Crossing between walkway up to Fred Nichols and small parking lot.',
                'name': 'c_11',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.527389,43.474124]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Courtyard in front of Food Court and statue of Wilf.',
                'name': 'c_12',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528026,43.473784]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Walkway by patio outside of Food Court and back of Macdonald House.',
                'name': 'c_13',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528539,43.473764]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Stairs beside Alumni Hall up to parking lot.',
                'name': 'c_14',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528319,43.472619]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Path outside front of Library.',
                'name': 'c_15',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529388,43.472855]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Entrance to Peters, Scheigel, and Arts C.',
                'name': 'c_16',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530066,43.473351]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Entrance to Peters and Scheligel off of Albert St.',
                'name': 'c_17',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.531459,43.472971]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Back of Library on Albert St.',
                'name': 'c_18',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530715,43.472726]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Path from Albert St into parking lot.',
                'name': 'c_19',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.530097,43.472521]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Campus Directory sign near Library.',
                'name': 'c_20',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.529467,43.472706]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Northeast corner of Albert and Bricker.',
                'name': 'c_21',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.527147,43.471539]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Entrace to seminary from Bricker Ave.',
                'name': 'c_22',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528362,43.471883]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Top of pathway from Bricker Ave towards Leupold Residence.',
                'name': 'c_23',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.528142,43.472323]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Grassy area between Euler, Leopold, and Bricker Residences.',
                'name': 'c_24',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.527892,43.472828]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Ramp down from grassy are into parking lot by Bouckaert Residence.',
                'name': 'c_25',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.52742,43.473142]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Ave between Bricker Residence and Academic Building.',
                'name': 'c_26',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.5269,43.472106]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Ave entrance to southwest corner of Science Building.',
                'name': 'c_27',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.525464,43.472818]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Bricker Ave entrance to southeast corner of Science Building.',
                'name': 'c_28',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524646,43.472932]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'King St entrace to parking lot between Science Building and Alumni Field.',
                'name': 'c_29',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524515,43.473688]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Parking lot between Science Building and Alumni Field.',
                'name': 'c_30',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.524842,43.473828]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Parking lot between Willison Hall and Science Reseach/Receiving.',
                'name': 'c_31',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.526385,43.474013]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Top of parking lot outside Bricker Academic near Emergency Help Pole.',
                'name': 'c_32',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.526909,43.473267]
            }
        },
        {
            'type': 'Feature',
            'properties':{
                'description': 'Sidewalk between Little House and Willison Hall Residences.',
                'name': 'c_33',
                'iconSize': [15,15]
            },
            'geometry':{
                'type': 'Point',
                'coordinates':[-80.527229,43.473701]
            }
        },
    ]
};

//This adds map to the page
var map = new mapboxgl.Map({
    container: 'mapBox',
    center: [-80.5278, 43.4740],
    zoom: 16,
    style: 'mapbox://styles/mapbox/streets-v11'
    });


//this adds map control
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showAccuracyCircle: false
        
    }),
);


//Adds markers to the map
mapIcons.features.forEach(function(marker){
    //create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';   
    el.style.backgroundImage = 'url(images/inactive_node.png)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
    el.style.backgroundSize = '100%';
    
    //popup creation
    var popup = new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: false,
    }).setText(marker.properties.description);
    
    //GOD TIER GOD THAT SETS THE MOFKING NAME 
    popup.on('open', function(popup){
        dest_node = marker.properties.name;
        console.log('name is: ' + dest_node);
        //There needs to be a function here that takes in user starting posistion and then runs it through the algo
        //output is node list
        //nodeList = .... 
    });
    
    //adding marker to map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map)
        .setPopup(popup);
    
    //this update path sets all the nodes within nodeList to active nodes
    //nodelist must come from function call in the popup.on thing
    updatePath(el,marker,nodeList);
});


//getting user position into a variable
//on success
function success(position){
    lat = position.coords.latitude;
    long = position.coords.longitude;
    setPosition(long,lat);
}
//on failure
function failure(){
    console.log("error nerd");
}
//setting the position
function setPosition(long,lat){
    posArr.push(long);
    posArr.push(lat);
}

function updatePath(el,marker,nodeList){
    //console.log(el.className);
    //console.log(marker);
    console.log(nodeList);
    console.log(marker.geometry.coordinates);
    //if the markers name is in nodeList, itll change the image to a the active node
    if(nodeList.includes(marker.properties.name)){
        el.style.backgroundImage = 'url(images/active_node.png)';
    }
    //comparing user position to marker coordinates
    if(posArr[0] == marker.geometry.coordinates[0] && posArr[1] == marker.geometry.coordinates[1]){
        el.style.backgroundImage = 'url(images/completed_node_green.png)';
    }
}

navigator.geolocation.getCurrentPosition(success,failure);
console.log(posArr);
