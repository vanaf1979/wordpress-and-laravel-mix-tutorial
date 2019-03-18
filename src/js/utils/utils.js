
var utils = {

    /*
    --  ### MISC
    */
  
  
    /*
    --  Find a DOM ellement.
    */
    find: function( selector , context )
    {
      return ( context || document ).querySelector( selector );
    },
  
  
    /*
    --  Find multiple DOM ellement.
    */
    findAll: function( selector , context )
    {
      return ( context || document ).querySelectorAll( selector );
    },
  
  
    /*
    --  Convert a value to a bool.
    */
    parseBool: function( value )
    {
      return value == "true" || value == true || value == 1 ? true : false;
    },
  
    /*
    --  ### ARRAYS
    */
  
  
    /*
    --  Is a value in an array?
    */
    inArray: function( needle , haystack )
    {
      for( var i = 0 ; i < haystack.length ; i++ )
      {
        if( haystack[i] == needle ) return i;
      }
      return -1;
    },
  
  
    /*
    --  Loop throu an array/;ist
    */
    loop: function( list , callback )
    {
      for ( var i = 0 ; i < list.length ; i++ )
      {
        callback( list[i] );
      }
    },
  
    /*
    --  ### COOKIES
    */
  
  
    /*
    --  Set cookie value.
    */
    getCookie: function( name )
    {
      var v = document.cookie.match( '(^|;) ?' + name + '=([^;]*)(;|$)' );
      return v ? v[2] : null;
    },
  
  
    /*
    --  Get cookie value.
    */
    setCookie: function( name , value , days )
    {
      var d = new Date;
      d.setTime( d.getTime() + 24 * 60 * 60 * 1000 * days );
      document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    },
  
  
    /*
    --  Delete cookie value.
    */
    deleteCookie: function( name )
    {
      setCookie( name, '' , -1 );
    },
  
  
    /*
    --  ### EVENTS
    */
  
  
    /*
    --  Add event listner.
    */
    addEvent: function( ellement , type , callback )
    {
      if ( ellement.attachEvent )
      {
        ellement.attachEvent( 'on' + type , callback );
      }
      else
      {
        ellement.addEventListener( type , callback );
      }
    },
  
  
    /*
    --  Remove event listner.
    */
    removeEvent: function( ellement , type , callback )
    {
      if ( ellement.detachEvent )
      {
        ellement.detachEvent( 'on' + type , callback );
      }
      else
      {
        ellement.removeEventListener( type , callback );
      }
    },
  
  
    /*
    --  Trigger events.
    */
    triggerEvent: function( el , type )
    {
      if ( 'createEvent' in document )
      {
        // modern browsers, IE9+
        var e = document.createEvent( 'HTMLEvents' );
        e.initEvent( type , false , true );
        el.dispatchEvent( e );
      }
      else
      {
        // IE 8
        var e = document.createEventObject();
        e.eventType = type;
        el.fireEvent( 'on' + e.eventType , e );
      }
    },
  
  
    /*
    --  Fire on document ready.
    */
    domready: function( fn )
    {
      if ( document.readyState != 'loading' )
      {
        fn();
      }
      else if ( document.addEventListener )
      {
        this.addEvent( document , 'DOMContentLoaded' , fn );
      }
      else
      {
        this.addEvent( document , 'onreadystatechange' , function(){
          if ( document.readyState != 'loading' )
          {
            fn();
          }
        })
      }
    },
  
  
    /*
    --  trim leading and trailing whitespace
    */
    trim: function( string )
    {
      if ( typeof string === "string" )
      {
        return string.replace( /^\s+|\s+$/g , '' );
      }
      else
      {
        return string;
      }
    },
  
  
    /*
    --  ### Ajax
    */
  
  
    /*
    --  Add a stylesheet to the dom.
    */
    addStyle: function( style = null, parent = null, callback = null )
    {
      var element = document.createElement( 'link' );
      element.type = 'text/css';
      element.rel = 'stylesheet';
      element.href = style;
  
      if ( ! parent )
      {
        parent = 'head';
      }
      
      if( callback != null && typeof callback === "function" )
      {
        element.onload = function()
        {
          callback()
        };
      }
  
      document[parent].appendChild(element);
    },
  
  
    /*
    --  Add a script file to the dom.
    */
    addScript: function( script = null, callback = null )
    {
      var element = document.createElement( 'script' );
      element.type = 'text/javascript';
      element.async = true;
      element.src = script;
      parent = 'body';
  
      if( callback != null && typeof callback === "function" )
      {
        element.onload = function()
        {
          callback()
        };
      }
  
      document[parent].appendChild(element);
    }
  
  };
    
export default utils;
  
  
  // var w = document.querySelector("#width"),
  //       h = document.querySelector("#height"),
  //   c = document.querySelector("#calls"),
  //   timeout = false, // holder for timeout id
  //   delay = 250, // delay after event is "complete" to run callback
  //   calls = 0;
  
  // // window.resize callback function
  // function getDimensions() {
  // w.innerHTML = window.innerWidth;
  // h.innerHTML = window.innerHeight;
  // calls += 1;
  // c.innerHTML = calls;
  // }
  
  // // window.resize event listener
  // window.addEventListener('resize', function() {
  //   // clear the timeout
  // clearTimeout(timeout);
  // // start timing for event "completion"
  // timeout = setTimeout(getDimensions, delay);
  // });
  
  // getDimensions();
  
  
  // var w = document.querySelector("#width"),
  //     h = document.querySelector("#height"),
  // c = document.querySelector("#calls"),
  // delay = 250, // delay between calls
  // throttled = false, // are we currently throttled?
  // calls = 0;
  
  // // window.resize callback function
  // function getDimensions() {
  // w.innerHTML = window.innerWidth;
  // h.innerHTML = window.innerHeight;
  // calls += 1;
  // c.innerHTML = calls;
  // }
  
  // // window.resize event listener
  // window.addEventListener('resize', function() {
  // // only run if we're not throttled
  // if (!throttled) {
  // // actual callback action
  // getDimensions();
  // // we're throttled!
  // throttled = true;
  // // set a timeout to un-throttle
  // setTimeout(function() {
  //   throttled = false;
  // }, delay);
  // }  
  // });
  
  // getDimensions();