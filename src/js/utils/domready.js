
var functions = [];

export default function domReady( callback ) {

    functions.push( callback );

    if ( document.readyState != 'loading' ) {
        
        load();
    
    } else if ( document.addEventListener ) {
        
        addEvent( document , 'DOMContentLoaded' , function loadedEvent() {

            removeEvent( document , 'DOMContentLoaded' , loadedEvent );

            load();

        });
    
    } else {
        
        addEvent( document , 'onreadystatechange' , function readyListner() {
            
            if ( document.readyState != 'loading' ) {

                removeEvent( document , 'onreadystatechange' , readyListner );
                
                load();

            }

        })
    }
}


const load = ( ) => {

    functions.forEach( ( callback ) => { 
        
        functions.splice( functions.indexOf( callback ) , 1 );
        callback();
    
    });

}


const addEvent = ( ellement , type , callback ) => {
    
    if ( ellement.attachEvent ) {
      
        ellement.attachEvent( 'on' + type , callback );
    
    } else {
      
        ellement.addEventListener( type , callback );
    
    }
}


const removeEvent = ( ellement , type , callback ) => {

    if ( ellement.detachEvent ) {
        
        ellement.detachEvent( 'on' + type , callback );

    } else {

        ellement.removeEventListener( type , callback );

    }
}