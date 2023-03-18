var handle

alreadyRunning = 0
var jumpto
var second
var mint
var showmsg
var insidequiz
var resvar
var id2;

var visitedonce = 0

var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;

var movieWidth;
var movieHeight;

function hinit() {
	canvas = document.getElementById("canvas");
	images = images || {};

	var manifest = [
	{
		src: "images/Sand.jpg",
		id: "Sand"
	}];
	var loader = new createjs.PreloadJS(false);
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);
}

function handleFileLoad(o) {
	if (o.type == "image") {
		images[o.id] = o.result;
	}
}

function handleComplete() {
	exportRoot = new lib.Hourglasshtml();
	//console.log("M inside handleCompleter")
	exportRoot.bg.hourglassinstance.introAnim_mc.visible = true;
	exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
	exportRoot.bg.showmethemsg_bg.visible = false;
	if (insidequiz == "true") {
		//this must be enable only for inside quizscope
		if (parent.cpInQuizScope == false) {
			exportRoot.bg.showtime.visible = false
			exportRoot.bg.showtime_1.visible = false
			exportRoot.bg.showmessage.visible = false
			exportRoot.bg.showmethemsg_bg.visible = false;
			exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
			exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
		}
	}

	//change to timeinsecs
	CreateTimer(timeInSecs);

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(25);
	createjs.Ticker.addListener(stage);

}
var initresultDoc;
var Timer;
var TotalSeconds;
var timecheck;
var timeoutscene = 0;

function Tick() {
	if (TotalSeconds <= 0) {
		varHandle[this.myVar1] = "1";
		alreadyRunning = 0;
		exportRoot.bg.showtime.text = "00:00";
		exportRoot.bg.showmessage.text = showmsg;
		exportRoot.bg.showmethemsg_bg.visible = true;
		clearInterval(id2);
		if (insidequiz == "true") {
			//this must be enable only for inside quizscope
			if (parent.cpInQuizScope == false) {
				clearInterval(id2);
				exportRoot.bg.showtime.visible = false
				exportRoot.bg.showtime_1.visible = false
				exportRoot.bg.showmessage.visible = false
				exportRoot.bg.showmethemsg_bg.visible = false;
				exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
				exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
			} else {
				exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
				exportRoot.bg.hourglassinstance.introAnim_mc.visible = true;
				exportRoot.bg.hourglassinstance.introAnim_mc.gotoAndStop(1);
			}
		} else {
			exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
			exportRoot.bg.hourglassinstance.introAnim_mc.visible = true;
			exportRoot.bg.hourglassinstance.introAnim_mc.gotoAndStop(1);
		}
		if (jumpto != "") {
			exportRoot.bg.showmessage.visible = true;
			exportRoot.bg.showmethemsg_bg.visible = true;
			if (showmsg != ""){
				setTimeout(showmeafterjump, 2000);
			} else {
				exportRoot.bg.showmethemsg_bg.visible = false;
				showmeafterjump()
			}
		} else {
			exportRoot.bg.showmessage.visible = true;
			var minutehand = Math.floor(TotalSeconds / 60)
			if (minutehand < 10){
				 minutehand = "0" + minutehand.toString();
			}
			var sechand = parseInt(TotalSeconds % 60)
			if (sechand < 10){
				 sechand = "0" + sechand.toString();
			}
			exportRoot.bg.showtime.text = minutehand.toString() + ":" + sechand.toString();
		}
		//alert(exportRoot.bg.showtime.text)
		exportRoot.bg.showtime.text = "00:00";
		return;
	}
	TotalSeconds -= 1;
	UpdateTimer();
}

function showmeafterjump() {
	visitedonce = 1;
	timeoutscene = 1;

	clearInterval(id2);
	parent.cpCmndGotoSlideAndResume = parseInt(jumpto) - 1;
	if (insidequiz == "true") {
		if (parent.cpInQuizScope == false) {
			clearInterval(id2);
			exportRoot.bg.showtime.visible = false
			exportRoot.bg.showtime_1.visible = false
			exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
			exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
		}
	}
}

function CreateTimer(Time) {
	timeoutscene = 0;
	// Timer = self.document.getElementById(TimerID);
	if (insidequiz == "true") {
		//this must be enable only for inside quizscope
		if (parent.cpInQuizScope == false) {
			clearInterval(id2);
			exportRoot.bg.showtime.visible = false
			exportRoot.bg.showtime_1.visible = false
			exportRoot.bg.showmessage.visible = false
			exportRoot.bg.showmethemsg_bg.visible = false;
			exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
			exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
		}
	}
	TotalSeconds = parseInt(Time);
	UpdateTimer()
	id2 = window.setInterval("Tick()", 998);
}

var safe = 0;
var save = 0;

function UpdateTimer() {
	alreadyRunning = 1
	if (insidequiz == "true") {
		//this must be enable only for inside quizscope
		if (parent.cpInQuizScope == false) {
			alreadyRunning = 0;
			clearInterval(id2);
			// safe++;
			exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
			exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
			exportRoot.bg.showtime.visible = false
			exportRoot.bg.showtime_1.visible = false
			exportRoot.bg.showmessage.visible = false
			exportRoot.bg.showmethemsg_bg.visible = false;
		}
	}

	if (TotalSeconds == (timeInSecs - 1)) {
		if (insidequiz == "true") {
			//this must be enable only for inside quizscope
			if (parent.cpInQuizScope == false) {
				clearInterval(id2);
				exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
				exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
			} else {
				exportRoot.bg.hourglassinstance.playAnim_mc.visible = true;

				exportRoot.bg.hourglassinstance.playAnim_mc._reset();
				exportRoot.bg.hourglassinstance.playAnim_mc.loop = true;
				exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
			}
		} else {
			exportRoot.bg.hourglassinstance.playAnim_mc.visible = true;

			exportRoot.bg.hourglassinstance.playAnim_mc._reset();
			exportRoot.bg.hourglassinstance.playAnim_mc.loop = true;
			exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
		}
	}
	
	if (TotalSeconds + 1 <= timeInSecs)	{
		var minutehand = Math.floor((TotalSeconds + 1) / 60)
		if (minutehand < 10) minutehand = "0" + minutehand.toString();
		var sechand = parseInt((TotalSeconds + 1) % 60)
		if (sechand < 10) sechand = "0" + sechand.toString();
		exportRoot.bg.showtime.text = minutehand.toString() + ":" + sechand.toString();
	}
	this.myVar1 = resvar;
	var msg = timeInSecs - TotalSeconds;
	//msg = msg.replace(/\n/g,"<br />");
	if (exportRoot.bg.hourglassinstance.playAnim_mc.visible == true)
	//varHandle[this.myVar1] = Math.floor((msg)/60).toString() + ":" + parseInt((msg)%60).toString();
	//varHandle[this.myVar1] = parseInt(msg);
	varHandle[this.myVar1] = "0";
}

playbarUse1 = {
	onLoad: function() {
		if (!this.captivate) return;
		lcap = this.captivate;

		handle = this.captivate.CPMovieHandle;
		//if (handle.isWidgetVisible() == true) {

			lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();

			this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
			if (!this.movieProps) return;
			varHandle = this.movieProps.variablesHandle;
			this.eventDisp = this.movieProps.eventDispatcher;
			mainCPNamespace = this.movieProps.getCpHandle();
			isResponsiveProject = mainCPNamespace.responsive;
			this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
			var size = this.OpenAjax.getSize();
			width = size.width;
			height = size.height;
			this.internalImage = '';
			this.externalImage = '';
			this.instructions = '';
			this.buttonLabel = '';
			this.buttonContent = '';
			this.soundName = '';
			this.title = '';
			this.directions = '';
			this.currentTheme
			
			movieWidth = parseInt(size.width.split("px")[0]);
			movieHeight = parseInt(size.height.split("px")[0]);
		
			if (safe == 0) safe = varHandle["cpQuizInfoAttempts"]

			if (this.eventDisp) {
				function get_listener() {
					return function() {
					}
				}
				this.eventDisp.addEventListener(this.eventDisp.SLIDE_ENTER_EVENT, this.get_eventListener);
				//this.eventDisp.addEventListener( this.eventDisp.VARIABLECHANGEDEVENT , this.get_eventListener ) ;
				
				//Captivate Event listener
				this.eventDisp.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
				this.eventDisp.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
			}
			this.updateData();
			hinit();
			this.doUpdate();
		//}
	},

	get_eventListener: function(args) {
		var eventtype = args.cpName;
		var elem = document.getElementById('Widget_4769_enter_event'); // where eventlog_div is div in widget html file
		var eventAsString;
		if (!alreadyRunning && (varHandle["cpQuizInfoAttempts"] > safe) && insidequiz == "true") {
			clearInterval(id2);
			safe = varHandle["cpQuizInfoAttempts"]
			//console.log("safe value is " + safe);
			exportRoot.bg.showtime.visible = true;
			exportRoot.bg.showtime_1.visible = true
			exportRoot.bg.showmessage.visible = false;
			exportRoot.bg.showmethemsg_bg.visible = false;
			exportRoot.bg.showmessage.text = "";
			exportRoot.bg.hourglassinstance.introAnim_mc._reset();
			exportRoot.bg.hourglassinstance.introAnim_mc.loop = true;
			exportRoot.bg.hourglassinstance.introAnim_mc.startPosition = 0;
			exportRoot.bg.hourglassinstance.introAnim_mc.visible = true;
			exportRoot.bg.hourglassinstance.introAnim_mc.play();
			exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
			exportRoot.bg.hourglassinstance.introAnim_mc.startPosition = 0
			exportRoot.bg.hourglassinstance.playAnim_mc.startPosition = 0

			//this must be enable only for inside quizscope
			if (parent.cpInQuizScope == false) {
				clearInterval(id2);
				exportRoot.bg.showtime.visible = false
				exportRoot.bg.showtime_1.visible = false
				exportRoot.bg.showmessage.visible = false
				exportRoot.bg.showmethemsg_bg.visible = false;
				exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
				exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
			}
			visitedonce = 0;
			CreateTimer(timeInSecs);
		}

		if (exportRoot.bg.showtime.text == "00:00") if (insidequiz == "true") if (parent.cpInQuizScope == false) {
			clearInterval(id2);
			exportRoot.bg.showtime.visible = false
			exportRoot.bg.showtime_1.visible = false
			exportRoot.bg.showmessage.visible = false
			exportRoot.bg.showmethemsg_bg.visible = false;

			//alert(jumpto,parent.cpInfoCurrentSlide)
			if ((jumpto) == parent.cpInfoCurrentSlide && timeoutscene == 1 && visitedonce == 0) {
				visitedonce = 1
				//exportRoot.bg.showmessage.visible = true
			}
			exportRoot.bg.hourglassinstance.playAnim_mc.visible = false;
			exportRoot.bg.hourglassinstance.introAnim_mc.visible = false;
		}

	},

	updateData: function() {
		//var id = 0;
		var initresult = jQuery.parseXML(this.xmlStr);
		initresultDoc = jQuery(initresult);
		var thexml = initresultDoc.find('string').text();
		testXml(initresultDoc);
		
		
		var jumptoVar = initresultDoc.find('#jumpto');
        if (jumptoVar){
            if (jumptoVar.find('string')){
                jumpto = jumptoVar.find('string').text();
            }
        }
		//jumpto = initresult.getElementById("jumpto").textContent
		
		var secondVar = initresultDoc.find('#timeInSecs');
        if (secondVar){
            if (secondVar.find('string')){
                second = parseInt(secondVar.find('string').text());
            }
        }
		//second = parseInt(initresult.getElementById("timeInSecs").textContent);
		
		var mintVar = initresultDoc.find('#timeInMins');
        if (mintVar){
            if (mintVar.find('string')){
                mint = parseInt(mintVar.find('string').text());
            }
        }
		//mint = parseInt(initresult.getElementById("timeInMins").textContent);
		
		var showmsgVar = initresultDoc.find('#showmsg');
        if (showmsgVar){
            if (showmsgVar.find('string')){
                showmsg = showmsgVar.find('string').text();
            }
        }

		//showmsg = String(initresult.getElementById("showmsg").textContent);
		
		var insidequizVar = initresultDoc.find('#insidequiz');
        if (insidequizVar){
            if (insidequizVar.find('string')){
                insidequiz = insidequizVar.find('string').text();
            }
        }
		//insidequiz = initresult.getElementById("insidequiz").textContent
		
		var resvarVar = initresultDoc.find('#resultVariable');
        if (resvarVar){
            if (resvarVar.find('string')){
                resvar = resvarVar.find('string').text();
            }
        }
		//resvar = initresult.getElementById("resultVariable").textContent

		//if (!jQuery.browser.msie) 
		//}
		//if(!mint)mint=0;
		//if(!second)second=0;
		timeInSecs = mint * 60 + second;
	},

	doUpdate: function() {

		var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
		var myFrameName = window.name;
		//alert(myFrameName);
		var myWidgetiFrame = window.parent.document.getElementById(window.name);
		if (myWidgetiFrame) {
			canvas.style.width = myWidgetiFrame.parentElement.parentElement.style.width
			canvas.style.height = myWidgetiFrame.parentElement.parentElement.style.height
			//canvas.style.top = "-25px";
		}
	}
};
hourglass_use = function() {
	return playbarUse1;
}

function testXml(theXml) {
	//var theXml = "<test><item id='1'>one</item><item id='2'>two</item></test>";		
	theXml = parseXml(theXml);
	//console.log(theXml)

	$(theXml).find('property').each(function() {
		var theItem = $(this);
		var theId = theItem.attr("id");
		var theText = theItem.text();

		switch (theId) {
		case 'jumpto':
			jumpto = theText;
			break;

		case 'timeInSecs':
			second = theText;
			break;

		case 'timeInMins':
			mint = theText;
			break;

		case 'showmsg':
			showmsg = theText;
			break;

		case 'insidequiz':
			insidequiz = theText;
			break;

		case 'resultVariable':
			resvar = theText;
			break;
		}
	});
}

function parseXml(xml) {
	if ($.browser.msie=="true") {
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.loadXML(xml);
		xml = xmlDoc;
	}

	return xml;
}

function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}

function resizeInteraction(thewidth, theheight) {
	var scale = 0;
    thewidth = String(thewidth).replace("px", "");
    theheight = String(theheight).replace("px", "");
    if (thewidth < theheight){
        scale = thewidth / (movieWidth);
    } else{
        scale = theheight / (movieHeight);
    }
	var holdScale = scale
    var margins = Math.round(25 * scale);
    margins += "px"
    scale = "scale(" + scale + ")";
    $('#canvas').css('-webkit-transform', scale);
    $('#canvas').css('-moz-transform', scale);
    $('#canvas').css('-o-transform', scale);
    $('#canvas').css('-ms-transform', scale);
    $('#canvas').css('-webkit-transform-origin', '0 0');
	$('#canvas').css('-moz-transform-origin', '0 0');
    $('#canvas').css('-o-transform-origin', '0 0');
    $('#canvas').css('-ms-transform-origin', '0 0');
	$('#canvas').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
}