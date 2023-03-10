let lat  , lng; 
const loc_container = document.querySelector('#d-loc') ; 
window.navigator.geolocation.getCurrentPosition( function( position  ) { 
     
    const {latitude , longitude} = position.coords ; 
    const coords  = [ latitude , longitude ] ; 
   
    fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
    .then( Response => Response.json( ))
    .then( data => { 
        
        loc_container.innerHTML = data.display_name  ; 
    })
    .catch(err=>alert('Unable to get Your Location'))
 

} , function ( ){ 
     alert('Unable to get Your Location') ; 
})

// console.log( coords) ; 