// Import the domReady Utility.
import domReady from './utils/domready.js';


// Import components.
import Example from './components/example.js';


// Initialize your components on DOM Ready.
domReady( () => {
    
    Example.init({
        setting: 'New setting'
    });

});