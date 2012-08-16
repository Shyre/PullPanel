Ext.define('BlindPanel.view.MainWrapper', {
    extend: 'Ext.Container',
	xtype : 'MainWrapper',

    config: {
		layout: 'vbox',
		items : [{
			xtype: 'BlindPanel'
		}, {
			xtype: 'MainPanel',
			flex : 1
		}]
    }
});
