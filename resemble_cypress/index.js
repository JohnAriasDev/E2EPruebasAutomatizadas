const fs = require('fs');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");

const { viewportHeight, viewportWidth, scenarios, options } = config;

async function executeTest(){
    if(scenarios.length === 0){
      return;
    }	
	let resultInfo = {};
	let resultSend=[]
	let steps_by_scen=[];
	var i=0;
	let datetime = new Date().toISOString().replace(/:/g,".");

	for(dir of scenarios){
        if (!fs.existsSync(`./results/${datetime}/${config.scenarios[i]}`)){
            fs.mkdirSync(`./results/${datetime}/${config.scenarios[i]}`, { recursive: true });
        }

		let ScenFiles= getFiles(`../cypressGhost/cypress/screenshots/version3/${config.scenarios[i]}.spec.js`);
		var j=0;
		for(file of ScenFiles){
			const data = await compareImages(
				fs.readFileSync(`../cypressGhost/cypress/screenshots/version3/${config.scenarios[i]}.spec.js/${config.scenarios[i]}-${j}.png`),
				fs.readFileSync(`../cypressGhost/cypress/screenshots/version4/${config.scenarios[i]}.spec.js/${config.scenarios[i]}-${j}.png`),
				options
			);
			resultInfo[file] = {
				isSameDimensions: data.isSameDimensions,
				dimensionDifference: data.dimensionDifference,
				rawMisMatchPercentage: data.rawMisMatchPercentage,
				misMatchPercentage: data.misMatchPercentage,
				diffBounds: data.diffBounds,
				analysisTime: data.analysisTime
			}
			resultSend[i]=resultInfo;
			fs.writeFileSync(`./results/${datetime}/${config.scenarios[i]}/compare-${config.scenarios[i]}-${j}.png`, data.getBuffer());			
			steps_by_scen[i]=j;
			j++;
		}
		fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultSend,steps_by_scen));
		fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
		fs.copyFileSync('./bootstrap.min.css', `./results/${datetime}/bootstrap.min.css`);
		i++;
	}
}
(async ()=>console.log(await executeTest()))();

function getDirectories(path, files_) {
	files_ = files_ || [];
	var files = fs.readdirSync(path);
	  for (var i in files){
		  var name = path + '/' + files[i];
		  if (fs.statSync(name).isDirectory()){
			files_.push(name);  
		  }
	  }
	return files_;
}

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(files[i]);
        }
    }
    return files_;
}
function steps(b,step){
    return `
	<h4>Compare STEP ${step}</h4>
	<div class="row" id="step_${step}">
		<div class="col-md-4">
			  <div class="imgcontainer">
				<span class="imgname">Ghost version 3</span>
				<img class="img2" src="../../../cypressGhost/cypress/screenshots/version3/${config.scenarios[config.scenarios.indexOf(b)]}.spec.js/${config.scenarios[config.scenarios.indexOf(b)]}-${step}.png" id="refImage" label="Reference">
			  </div>		
		</div>
		<div class="col-md-4">
			  <div class="imgcontainer">
				<span class="imgname">Ghost version 4</span>
				<img class="img2" src="../../../cypressGhost/cypress/screenshots/version4/${config.scenarios[config.scenarios.indexOf(b)]}.spec.js/${config.scenarios[config.scenarios.indexOf(b)]}-${step}.png" id="refImage" label="Reference">
			  </div>
		</div>
		<div class="col-md-4">
			  <div class="imgcontainer">
				<span class="imgname">Difference</span>
				<img class="imgfull" src="./${config.scenarios[config.scenarios.indexOf(b)]}/compare-${config.scenarios[config.scenarios.indexOf(b)]}-${step}.png" id="diffImage" label="Diff">
			  </div>		
		</div>
  </div>`
	
}

function browser(b, stepsArray){
    let stepsScen=[];
		for (let h = 0; h < stepsArray[config.scenarios.indexOf(b)]; h++) {
			stepsScen[h]=h;
		}
    return `<div class="browser" id="escenario${config.scenarios.indexOf(b)}">
    <div class=" btitle">
        <h2>Escenario: ${b}</h2>
    </div class="container">
			${stepsScen.map(st=>steps(b,st))}
    </div> 
  </div>`
}

function createReport(datetime, resInfo, steps){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
			<link href="bootstrap.min.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h2>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h2>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.scenarios.map(b=>browser(b, steps))}
            </div>
            <p><strong>DATA ANALYSIS:</strong><br> ${JSON.stringify(resInfo[0],null,'  ')}</p>				
        </body>
    </html>`
}