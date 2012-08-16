Ext.define('BlindPanel.controller.Application', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			MainWrapper: 'MainWrapper'
		},
		
		control: {
			MainWrapper: {
				initialize: 'onLaunched'
			}
		}
	},
	
	onLaunched: function(cmp) {
		var main = cmp.down('MainPanel');
			
		cmp.setActiveItem(main);
	}
})