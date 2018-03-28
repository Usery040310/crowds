// 1 - NETWORKS
SLIDES.push(

// PLAY AROUND: how to connect & disconnect
{

	chapter: "Networks",

	clear:true,
	add:[

		// The top instructions
		{
			type:"box",
			text:"_1_tutorial_start", x:280, y:0, w:400, h:70, align:"center"
		},

		// The fullscreen simulation
		{
			type:"sim",
			x:0, y:10,
			fullscreen: true,
			network: {"contagion":0,"peeps":[[44,184,0],[155,215,0],[237,105,0],[309,213,0],[646,211,0],[328,305,0],[629,308,0],[417,111,0],[539,375,0],[216,299,0],[107,311,0],[-61,220,0],[87,452,0],[733,147,0],[760,293,0],[753,448,0],[744,46,0],[134,33,0],[929,181,0],[848,111,0],[1013,330,0],[880,269,0],[538,128,0],[208,391,0],[853,356,0]],"connections":[[5,6]]}
		},

		// "Connect" instruction (words & picture)
		{
			type:"box",
			id:"connect_words",
			text:"_1_tutorial_connect", x:280, y:183, w:400, align:"center", color:"#ccc"
		},
		{
			type:"box",
			id:"connect_pic",
			img:"sprites/tutorial_connect.png", x:330, y:150, w:300, h:100
		},

		// "Disconnect" instruction (words & picture)
		{
			type:"box",
			id:"disconnect_words",
			text:"_1_tutorial_disconnect", x:280, y:280, w:400, align:"center", color:"#ccc"
		},
		{
			type:"box",
			id:"disconnect_pic",
			img:"sprites/tutorial_disconnect.png", x:327, y:245, w:300, h:100
		},

		// The bottom instructions & button (hidden at first)
		{
			type:"box",
			id:"end_words",
			text:"_1_tutorial_end", x:230, y:425, w:500, h:70, align:"center",
			hidden:true
		},
		{
			type:"box",
			id:"end_button",
			button:"large", wiggle:true,
			text:"_1_tutorial_next", x:330, y:440,
			hidden:true,
			onclick:function(){
				slideshow.next();
			}
		},

	],

	// Logic to fade in/out words & stuff
	onupdate:function(slideshow, state){

		// Count number of connections this & last time
		var sim = slideshow.simulations.sims[0];
		var numConnections = sim.connections.length;
		if(state.lastConnections===undefined) state.lastConnections=numConnections;
		state.currConnections = numConnections;

		// SHOW/HIDE INSTRUCTIONS
		var boxes = slideshow.boxes;
		// If connections went UP, hide "connect" instructions
		if(state.currConnections > state.lastConnections){
			state.canConnect = true;
			boxes.hideChildByID("connect_words");
			boxes.hideChildByID("connect_pic");
		}
		// If connections went DOWN, hide "connect" instructions
		if(state.currConnections < state.lastConnections){
			state.canDisconnect = true;
			boxes.hideChildByID("disconnect_words");
			boxes.hideChildByID("disconnect_pic");
		}
		// If did both, show end
		if(state.canConnect && state.canDisconnect){
			boxes.showChildByID("end_words");
			boxes.showChildByID("end_button");
		}

		// update # of connections in state
		state.lastConnections = state.currConnections;

	}

},

// PLAY AROUND: how the "threshold" model workds
{
	clear:true,
	add:[
	]
},

// PUZZLE: The "Majority Illusion" puzzle
{
	clear:true
},

// post-puzzle ramble
{
	clear:true
}

);