canvas.style.width = 500;
canvas.style.height = 500;
canvas.width = parseInt(canvas.style.width)*2;
canvas.height = parseInt(canvas.style.height)*2;

PEEP_STATE_COLORS[2] = "#8b9dc3";

var initData = {
	"contagion":1/4,
	"peeps":[[50,263,2],[141,274,1],[204,353,1],[452,264,1],[301,341,1],[364,271,1],[204,195,1],[301,206,1]],
	"connections":[[0,1],[1,2],[1,6],[6,7],[7,5],[5,3],[5,4],[4,2]]
}
_makeUncuttable(initData.connections);

// Add peeps!
loadNetwork(initData);

// Update
update();

// SHOW CONTAGION UI
showContagionUI();