Ext.define('Ext.jsv.BlindPanel', {
    extend: 'Ext.Container',
	xtype : 'BlindPanel',

    config: {
		layout: 'fit',
		items : { 
			xtype : 'container',
			layout: 'hbox'
		},
		top   : 0,
		zIndex: 0,
		width   : '100%',
		height  : 150,
		duration: 300,
    }

    
});
