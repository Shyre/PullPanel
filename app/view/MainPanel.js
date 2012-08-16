Ext.define('BlindPanel.view.MainPanel', {
	extend: 'Ext.navigation.View',
	xtype : 'MainPanel',
	
	config: {
		items: { xtype: 'ViewPanel' },
		draggable: {
            direction : 'vertical',
			constraint: {
                min: { x: 0, y: 0 },
                max: { x: 0, y: 200 },
			},
			listeners: {
			    dragstart: {
			        
			        fn: function(component, e, target, record, eventObject, options) {
			        console.log(this);
			        
			        node = e.target;
			        while (node = node.parentNode) {
			            if (node.className && node.className.indexOf('x-toolbar') > -1) {
			                return true;
			            }
			        }
			        return false;
			       

			        },
			        order: 'before',
			    }
                ,
			    dragend: function (component, index, target, record, eventObject, options) {
			        //console.log(component);
                    
			        function moveContainer(offsetY, duration) {
			            var duration = 200,
                            draggable = component;
        
			            draggable.setOffset(0, offsetY, {
			                duration: 200
			            });
			        };

			        var velocity = Math.abs(index.deltaY / index.deltaTime),
                        direction = (index.deltaY > 0) ? "down" : "up",
                        offset = Ext.clone(component.offset),
                        threshold = parseInt(200 * .70);

			        switch (direction) {
			            case "down":
			                console.log('down');
			                offset.y = (velocity > 0.75 || offset.y > threshold) ? 200 : 0;
			                break;
			            case "up":
			                console.log('up');
			                offset.y = (velocity > 0.75 || offset.y < threshold) ? 0 : 200;
			                break;
			        }

			        moveContainer(offset.y);
			    }
			}
        },
		autoDestroy  : false,
		navigationBar: {
		    items: {
				xtype   : 'button',
				iconCls : 'eject',
				iconMask: true,
				align   : 'right'
			}
		}
	}
});


/*
DRAG bottom panel up

dragend: function (component, index, target, record, eventObject, options) {
			        //console.log(component);
                    
			        function moveContainer(offsetY, duration) {
			            var duration = 200,
                            draggable = component;
        
			            draggable.setOffset(0, offsetY, {
			                duration: 200
			            });
			        };

			        var velocity = Math.abs(index.deltaY / index.deltaTime),
                        direction = (index.deltaY > 0) ? "down" : "up",
                        offset = Ext.clone(component.offset),
                        threshold = parseInt(200 * .70);

			        console.log(offset.y);
			        console.log(threshold);
			        switch (direction) {
			            case "down":
			                console.log('down');
			                offset.y = (velocity > 0.75 || offset.y < threshold) ? 0 : -200;
			                break;
			            case "up":
			                console.log('up');
			                offset.y = (velocity > 0.75 || offset.y > threshold) ? -200 : 0;
			                break;
			        }

			        moveContainer(offset.y);
			    }




*/

/*
DRAG top panel down

dragend: function (component, index, target, record, eventObject, options) {
			        //console.log(component);
                    
			        function moveContainer(offsetY, duration) {
			            var duration = 200,
                            draggable = component;
        
			            draggable.setOffset(0, offsetY, {
			                duration: 200
			            });
			        };

			        var velocity = Math.abs(index.deltaY / index.deltaTime),
                        direction = (index.deltaY > 0) ? "down" : "up",
                        offset = Ext.clone(component.offset),
                        threshold = parseInt(200 * .70);

			        switch (direction) {
			            case "down":
			                console.log('down');
			                offset.y = (velocity > 0.75 || offset.y > threshold) ? 200 : 0;
			                break;
			            case "up":
			                console.log('up');
			                offset.y = (velocity > 0.75 || offset.y < threshold) ? 0 : 200;
			                break;
			        }

			        moveContainer(offset.y);
			    }

*/