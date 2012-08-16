Ext.define('BlindPanel.controller.BlindPanel', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			MainPanel  : 'MainPanel',
			BlindPanel : 'BlindPanel',
			ViewPanel  : 'ViewPanel',
			BlindButton: 'MainPanel button[iconCls=eject]'
		},
		
		control: {
			BlindPanel: {
				initialize: 'onInitBlindPanel',
				_posterTap: 'onPosterTap'
			},
			
			BlindButton: {
				tap: 'onButtonTap'
			}
		}
	},
	
	init: function() {
		this.component = [];
		this.movies = [{
			poster   : 'avengers.jpg',
			poster_hd: 'avengers_hd.jpg'
		}, {
			poster   : 'battleship.jpg',
			poster_hd: 'battleship_hd.jpg'
		}, {
			poster   : 'total-recall.jpg',
			poster_hd: 'total-recall_hd.jpg'
		}, {
			poster   : 'amazing-spider-man.jpg',
			poster_hd: 'amazing-spider-man_hd.jpg'
		}, {
			poster   : 'g-i-joe-2.jpg',
			poster_hd: 'g-i-joe-2_hd.jpg'
		}];
	},
	
	onPosterTap: function(cmp, el) {
		var view = this.getViewPanel(),
			src  = el.attributes['poster'].nodeValue;
		
		view.setHtml([
			'<img src="resources/images/' + src + '" width="290" height="450" />'
		].join(''));
		
		this.toggleBlindPanelBefore();
	},
	
	onInitBlindPanel: function(cmp) {		
		var wrapper   = cmp.getAt(0),
			compWidth = 50;
					
		wrapper.setScrollable('horizontal');
		
		this.addItemWapper(wrapper);
	},
	
	addItemWapper: function(wrapper) {
		var blind = this.getBlindPanel();
		
		for(var i = 0, len = this.movies.length; i < len; i += 1) {
			var component = Ext.create('Ext.Component', {
				html : [
					'<img src="',
					'resources/images/' + this.movies[i].poster + '"',
					' poster="' + this.movies[i].poster_hd + '"',
					' width="100" height="150" />'
				].join('')
			});
			
			wrapper.add(component);

			component.element.on('tap', function(e, el) {
				blind.fireEvent('_posterTap', component, el);
			});
		}
	},
	
	onButtonTap: function(btn) {			
		this.toggleBlindPanelBefore();
	},
	
	toggleBlindPanelBefore: function() {
		var main   = this.getMainPanel(),
			blind  = this.getBlindPanel(),
			height = blind.getHeight();
		
		// open	
		if(!this.flag) {
			this.toggleBlindPanel(main, 0, height);
			this.flag = true;
		} 
		
		// close
		else {
			this.toggleBlindPanel(main, height, 0);
			this.flag = false;
		}
	},
	
	toggleBlindPanel: function(main, startHeight, endHeight) {	
		var duration   = this.getBlindPanel().getDuration(),
			draggable  = main.getDraggable(),
			constraint = draggable.getConstraint();
		
		constraint.min.y = endHeight;
        constraint.max.y = endHeight;

        draggable.setOffset(startHeight, endHeight, {
            duration: duration
        });
	}
})