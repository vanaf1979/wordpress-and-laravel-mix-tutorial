

var Example = {

    settings: {
        setting: 'Initial value'
    },

    init: function( options ) {

        // Do some init stuff like process settings.
        this.settings.setting = options.setting;

        // Run your custom code.
        this.startRunningYourCode()

    },


    startRunningYourCode: function() {
        
        // Your custom code goes here.
        console.log( this.settings.setting );
    }
}

 
export default Example;
