(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var dur ;
// stage content:
(lib.Hourglasshtml = function() {
	this.initialize();
dur = parseInt(timeInSecs) / 4;
	// runtime
	
	this.bg = new lib.interactionbg();
	this.bg.setTransform(233.5,236,2.022,1.18,0,0,0,115.5,200);

	this.addChild(this.bg)
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.9,-1.6,514.1,473.7);

(lib.interactionbg = function() {
	this.initialize();

	this.showtime = new cjs.Text("", "40px Arial");
	this.showtime.textAlign = "center";
	this.showtime.lineHeight = 22;
	this.showtime.lineWidth = 95;
	this.showtime.setTransform(164,339);
	
	this.showmessage = new cjs.Text("", "30px Arial", "#CC0000");
	this.showmessage.textAlign = "left";
	this.showmessage.lineHeight = 62;
	this.showmessage.lineWidth = 100;
	this.showmessage.setTransform(5,0);
	
this.showmethemsg_bg = new lib.showmethemsgBG();
	this.showmethemsg_bg.setTransform(70.7,85.7,0.95,1,0,0,0,70.5,85.5);
	
	this.showtime_1 = new lib.showtimer();
	this.showtime_1.setTransform(165,365,0.523,0.7,0,0,0,94,37.8);
	
	this.hourglassinstance = new lib.hourglass();
	this.hourglassinstance.setTransform(116,30,1,1,0,0,0,274.9,197.3);

	this.addChild(this.hourglassinstance,this.showtime_1,this.showtime,this.showmessage,this.showmethemsg_bg);


}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231.1,400);
// symbols:



(lib.showmethemsgBG = function() {
	this.initialize();



	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(214,214,214,0.247)").s().p("AIpsvQgTgngdAAIx0AAQgcAAgUAnQgUAnAAA3IAAWiQAAA3AUAnQAUAoAcAAIR0AAQAdAAATgoQAUgnAAg3IAAiNICDBJIiDj/IAAxfQAAg3gUgnIAAAA").cp();
	this.shape_11.setTransform(70.5,85.5);

	this.addChild(this.shape_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,141,171.1);




(lib.showtimer = function() {
	this.initialize();

	// Layer 1
	

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.459)").s("rgba(0,0,0,0.447)").ss(3,1,1).p("AN5lYI7xAAQgyAAAAAyIAAJNQAAAyAyAAIbxAAQAyAAAAgyIAApNQAAgygyAAIAAAA").cp();
	this.shape_10.setTransform(94,36.5);

	this.addChild(this.shape_10,this.showtime);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,188,75.5);


(lib.Sand = function() {
	this.initialize(img.Sand);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,374);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().bs(img.Sand).ss(5,1,0,60).p("AtGHEINEt8INJN8I6NAA").cp();
	this.shape.setTransform(1.6,-0.4,1,1,0,0,0,1.6,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.9,-44.6,167.9,89.4);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().bs(img.Sand).ss(3,1,0,60).p("AP/IbI/9AAIAAw1If9AAIAAQ1").cp();

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.3,-53.9,204.8,107.9);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00CCFF").ss(1,1,1).p("AMz28QgBgGgBgFIACgEIAAgCI4vAAAq6WzIWHAAADqklIABAAALb21QgBgEgBgDQgBgGgBgFAMz28QCoKrqgHzQgOAKgOAKQgDADgEACQgBAAAAABQgGAEgHAFQlTD7EnDaQATAOAWAOQAAAAABABIAAAAQLLH7isLBIhaAAArzWzIgyAAQixrGLOn9IABAAQAAAAABgBQASgMARgMQEnjXk5jyQgKgIgKgIQgHgEgHgFQAAAAAAgBQgRgMgRgNIgBAAQhuhRhXhWQgHgHgGgHQgHgGgGgHQgOgPgNgOQmGmqCKofIA0AAArxWzIA3AAArxWzIgCAAQACAFABAFAqzXOQgBgEgCgFQgBgEAAgEQgCgFgBgF");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(10,255,206,0.459)").s().p("Ak4XBIgCAAIgzAAQiwrGLMn9IAAAAQABAAAAgBQATgMAQgMQEpjXk6jyQgKgIgLgIQgGgEgHgFQAAAAAAgBQgSgMgRgNIAAAAQhuhRhVhWQgHgHgHgHQgHgGgGgHQgOgPgNgOQmGmqCKogIA1AAQiGIPFqGhQATAVAUAWQAGAGAGAGQAGAHAHAGQBNBQBjBMQAQANARAMIAAABQAHAEAGAFQALAIAKAHQAAABAAAAQAHAFBhBGQBhBGAAB7QAAB9i5ByQgSAMgRANQkaDSiFD0QiIDzAMEUQADA1AIA4QAJA3AOA5IAAAA").cp();
	this.shape_3.setTransform(-43.9,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,153,204,0.459)").s().p("AjGJbIg3AAQgOg4gJg4QgIg3gCg2QgNkUCJjwQCRj8ExjYQkgDjiFEAQh+D1AYEUQAFA1AKA3QAJAvANAuIAAAA").cp();
	this.shape_4.setTransform(-49.9,85.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(66,255,217,0.718)").s().p("AFz23QCoKrqeHzQgOAKgOAKQgEADgEACQAAAAgBABQgGAEgHAFQlVD5EpDcQATAOAWAPQABAAAAAAIABABQLIH6irLBIhaAAQCkqjqHnuQgUgPgVgPQgJgHhIg9QhIg9AFh9QAFh7BDhFQBDhGAGgEQABgBAAAAQAEgCAEgDQATgOASgNIAAAAQAYgTAXgSQJbniibqJIAjgHIA1AA").cp();
	this.shape_5.setTransform(44.9,-0.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.3,-148.6,170.7,297.4);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","#9DFFEC"],[0,0.71],-6.5,34,25,-47).s().p("AmHKmQAAgBgBAAQAlgrANgPQADgEADgDQJirbi0ouIEGAAQCyKlqmH5QgEADgEADQgGAFgHAFQhRA7hdA5QgIAFgIAFQgBAAgBABQgUANgOARIAAAA").cp();
	this.shape_6.setTransform(41.3,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(220,255,248,0)","#00FFCC"],[0,0.431],-2.8,-7.7,-2.8,-66.4).s().p("AFcJ8QAEAFAEAFQgDgCA6AtQABAAAAABQABAAAAAAQABABAAAAIgCAAIAAAAQgBgBgBAAQi0h4hehFQgHgEgGgFQqmn5CyqlIEHAAQi6I7KILzIAAAA").cp();
	this.shape_7.setTransform(-39.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,255,255,0.812)","rgba(0,204,255,0.18)"],[0,0.71],-1.2,-46.8,0,-1.2,-46.8,126.8).s().p("AAcKyQg4gtADACQgEgFgFgFQlCpwBZq+IIiAAIAAANQAvKbjzJ6IgEADIgBAEQgNAPglArIAAAA").cp();
	this.shape_8.setTransform(-0.7,-0.4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.6,-69.5,161.4,138.4);


(lib.TextInput_upSkin = function() {
	this.initialize();

	// skin
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_9.setTransform(76,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3D5D6").s().p("ArtgEIXbAAIAAAJI3bAAIAAgJ").cp();
	this.shape_10.setTransform(76,21.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D6F70").s().p("ALzgEIAAAJI3bAAIgKAAIAAgJIXlAA").cp();
	this.shape_11.setTransform(75.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C9CBCC").s().p("ALuhjIAAgKIAKAAIAADbIgKAAIAAgKIAAjHArtBkIAAAKIgKAAIAAjRIAKAAIAADH").cp();
	this.shape_12.setTransform(76,11);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextInput_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.298)").s().p("ALuhjIAADHI3bAAIAAjHIXbAA").cp();
	this.shape_13.setTransform(76,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(211,213,214,0.298)").s().p("ArtAFIAAgJIXbAAIAAAJI3bAA").cp();
	this.shape_14.setTransform(76,21.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(109,111,112,0.298)").s().p("ALzAFI3bAAIgKAAIAAgJIXlAAIAAAJ").cp();
	this.shape_15.setTransform(75.5,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(201,203,204,0.298)").s().p("Ar3hjIAKAAIAADHIAAAKIgKAAIAAjRALuhtIAKAAIAADbIgKAAIAAgKIAAjHIAAgK").cp();
	this.shape_16.setTransform(76,11);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_upSkin = function() {
	this.initialize();

	// skin
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ArtBkIAAjHIXbAAIAADHI3bAA").cp();
	this.shape_17.setTransform(76,11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D6F70").s().p("AryAFIAAgJIXlAAIAAAJI3bAAIgKAA").cp();
	this.shape_18.setTransform(75.5,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D3D5D6").s().p("ALuAFI3bAAIAAgJIXbAAIAAAJ").cp();
	this.shape_19.setTransform(76,21.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C9CBCC").s().p("ALuBkIAAjHIAAgKIAKAAIAADbIgKAAIAAgKArthjIAADHIAAAKIgKAAIAAjRIAKAA").cp();
	this.shape_20.setTransform(76,11);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.298)").s().p("ArtBkIAAjHIXbAAIAADHI3bAA").cp();
	this.shape_21.setTransform(76,11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(211,213,214,0.298)").s().p("ALuAFI3bAAIAAgJIXbAAIAAAJ").cp();
	this.shape_22.setTransform(76,21.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(109,111,112,0.298)").s().p("ALzgEIAAAJI3bAAIgKAAIAAgJIXlAA").cp();
	this.shape_23.setTransform(75.5,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(201,203,204,0.298)").s().p("ALuhjIAAgKIAKAAIAADbIgKAAIAAgKIAAjHArthjIAADHIAAAKIgKAAIAAjRIAKAA").cp();
	this.shape_24.setTransform(76,11);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.7,0,10.8).s().p("AGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACLAGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiL").cp();
	this.shape_25.setTransform(41,11);

	this.addChild(this.shape_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.arrowIcon = function() {
	this.initialize();

	// icon
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAjgTIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAAIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgK").cp();
	this.shape_26.setTransform(3.5,2);

	this.addChild(this.shape_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollTrack_skin = function() {
	this.initialize();

	// skin
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_27.setTransform(0.5,74);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#94999B","#E7E7E7"],[0,1],-6.4,7,7.5,6.8).s().p("ABBrjIAAXHIiBAAIAA3HICBAA").cp();
	this.shape_28.setTransform(7.5,74);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_29.setTransform(14.5,74);

	this.addChild(this.shape_29,this.shape_28,this.shape_27);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,148);


(lib.ScrollThumb_upSkin = function() {
	this.initialize();

	// skin
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AA3DbQAAAegdABIhQgBIAAnyIBQABQAdABAAAdIAAG1").cp();
	this.shape_30.setTransform(6.5,26);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_31.setTransform(7,49.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_32.setTransform(7,23.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_33.setTransform(14.5,26);

	this.addChild(this.shape_33,this.shape_32,this.shape_31,this.shape_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_overSkin = function() {
	this.initialize();

	// skin
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_34.setTransform(14.5,26);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_35.setTransform(7,49.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_36.setTransform(7,23.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AA3jbIAAG2QAAAegdABIhQAAIAAnzIBQAAQAdABAAAdIAAAA").cp();
	this.shape_37.setTransform(6.5,26);

	this.addChild(this.shape_37,this.shape_36,this.shape_35,this.shape_34);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_downSkin = function() {
	this.initialize();

	// skin
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],26.4,16,26.4,-5.9).s().p("AAaj4QAdABAAAdIAAG1QAAAegdABIhQgBIAAnyIBQAB").cp();
	this.shape_38.setTransform(6.5,26);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_39.setTransform(7,49.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_40.setTransform(7,23.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_41.setTransform(14.5,26);

	this.addChild(this.shape_41,this.shape_40,this.shape_39,this.shape_38);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollBar_thumbIcon = function() {
	this.initialize();

	// Layer 1
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_42.setTransform(2.5,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_43.setTransform(2.5,0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_44.setTransform(2.5,4.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_45.setTransform(2.5,6.5);

	this.addChild(this.shape_45,this.shape_44,this.shape_43,this.shape_42);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5,7);


(lib.ScrollArrowUp_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_46.setTransform(7.5,4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("AhAA8IAAh3ICBAAIAAB3IiBAAABLBGIAAiLIiVAAIAACLICVAA").cp();
	this.shape_47.setTransform(7.5,7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_48.setTransform(7.5,7);

	this.addChild(this.shape_48,this.shape_47,this.shape_46);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_49.setTransform(7.5,4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("AhAA8IAAh3ICBAAIAAB3IiBAAABLBGIAAiLIiVAAIAACLICVAA").cp();
	this.shape_50.setTransform(7.5,7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_51.setTransform(7.5,7);

	this.addChild(this.shape_51,this.shape_50,this.shape_49);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.Symbol2copy = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AMw23QCzLDrLH9QgBAAAAABQgHAEgGAFQlpEJFnDoQLJH6irLAI5KAAQiwrELNn9QFnjolpkJQgGgEgHgFQAAAAAAgBQrMn8CzrDIZhAAIAAACIgCAE").cp();

	// Layer 4
	this.instance = new lib.Symbol7("synched",0);
	this.instance.setTransform(1.4,101.7);

	this.instance.mask = mask;
	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AtGLXINEt9INJN9I6NAA").cp();
	mask_1.setTransform(1.4,72.7);

	// Layer 6
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.bf(img.Sand).bs(img.Sand).ss(26.5,1,0,60).p("AQpIIMghRAAAIAAwPMAhRAAAIAAQP").cp();
	this.shape_52.setTransform(0,93.4);

	this.shape_52.mask = mask_1;
	// Layer 1 copy
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AMy27IgCAEQCzLDrLH9QgBAAAAABQgHAEgGAFQlpEJFnDoQLJH6irLAI5KAAQiwrELNn9QFnjolpkJQgGgEgHgFQAAAAAAgBQrMn8CzrDIZhAAIAAAC").cp();

	this.addChild(this.shape_53,this.shape_52,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.4,-147,213,294.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AMw23QCzLDrLH9QgBAAAAABQgHAEgGAFQlpEJFnDoQLJH6irLAI5KAAQiwrELNn9QFnjolpkJQgGgEgHgFQAAAAAAgBQrMn8CzrDIZhAAIAAACIgCAE").cp();

	// Layer 8
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.setTransform(2.8,-55.6);

	this.instance_1.mask = mask_2;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.02,y:-0.6},dur).wait(1000));

	// Layer 2
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.bf(img.Sand).bs(img.Sand).ss(3,1,0,60).p("AP/IbI/9AAIAAw1If9AAIAAQ1").cp();
	this.shape_54.setTransform(2.8,-53.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.bf(img.Sand).bs(img.Sand).ss(3,1,0,60).p("Av+oUIf9AAIAAQpI/9AAIAAwp").cp();
	this.shape_55.setTransform(2.8,-53.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.bf(img.Sand).bs(img.Sand).ss(2.9,1,0,60).p("Av+oPIf9AAIAAQfI/9AAIAAwf").cp();
	this.shape_56.setTransform(2.8,-52.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.bf(img.Sand).bs(img.Sand).ss(2.9,1,0,60).p("Av+oKIf9AAIAAQVI/9AAIAAwV").cp();
	this.shape_57.setTransform(2.8,-52.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.bf(img.Sand).bs(img.Sand).ss(2.9,1,0,60).p("Av+oFIf9AAIAAQLI/9AAIAAwL").cp();
	this.shape_58.setTransform(2.8,-51.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.bf(img.Sand).bs(img.Sand).ss(2.9,1,0,60).p("Av+n/If9AAIAAP/I/9AAIAAv/").cp();
	this.shape_59.setTransform(2.8,-51.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.bf(img.Sand).bs(img.Sand).ss(2.8,1,0,60).p("Av+n6If9AAIAAP1I/9AAIAAv1").cp();
	this.shape_60.setTransform(2.8,-50.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.bf(img.Sand).bs(img.Sand).ss(2.8,1,0,60).p("Av+n1If9AAIAAPrI/9AAIAAvr").cp();
	this.shape_61.setTransform(2.8,-50.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.bf(img.Sand).bs(img.Sand).ss(2.8,1,0,60).p("Av+nvIf9AAIAAPfI/9AAIAAvf").cp();
	this.shape_62.setTransform(2.8,-49.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.bf(img.Sand).bs(img.Sand).ss(2.7,1,0,60).p("Av+nqIf9AAIAAPVI/9AAIAAvV").cp();
	this.shape_63.setTransform(2.8,-49);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.bf(img.Sand).bs(img.Sand).ss(2.7,1,0,60).p("Av+nlIf9AAIAAPLI/9AAIAAvL").cp();
	this.shape_64.setTransform(2.8,-48.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.bf(img.Sand).bs(img.Sand).ss(2.7,1,0,60).p("Av+nfIf9AAIAAO/I/9AAIAAu/").cp();
	this.shape_65.setTransform(2.8,-48);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.bf(img.Sand).bs(img.Sand).ss(2.7,1,0,60).p("Av+naIf9AAIAAO1I/9AAIAAu1").cp();
	this.shape_66.setTransform(2.8,-47.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.bf(img.Sand).bs(img.Sand).ss(2.6,1,0,60).p("Av+nVIf9AAIAAOrI/9AAIAAur").cp();
	this.shape_67.setTransform(2.8,-46.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.bf(img.Sand).bs(img.Sand).ss(2.6,1,0,60).p("Av+nPIf9AAIAAOfI/9AAIAAuf").cp();
	this.shape_68.setTransform(2.8,-46.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.bf(img.Sand).bs(img.Sand).ss(2.6,1,0,60).p("Av+nKIf9AAIAAOVI/9AAIAAuV").cp();
	this.shape_69.setTransform(2.8,-45.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.bf(img.Sand).bs(img.Sand).ss(2.5,1,0,60).p("Av+nFIf9AAIAAOLI/9AAIAAuL").cp();
	this.shape_70.setTransform(2.8,-45.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.bf(img.Sand).bs(img.Sand).ss(2.5,1,0,60).p("Av+m/If9AAIAAN/I/9AAIAAt/").cp();
	this.shape_71.setTransform(2.8,-44.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.bf(img.Sand).bs(img.Sand).ss(2.5,1,0,60).p("Av+m6If9AAIAAN1I/9AAIAAt1").cp();
	this.shape_72.setTransform(2.8,-44.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.bf(img.Sand).bs(img.Sand).ss(2.4,1,0,60).p("Av+m1If9AAIAANrI/9AAIAAtr").cp();
	this.shape_73.setTransform(2.8,-43.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.bf(img.Sand).bs(img.Sand).ss(2.4,1,0,60).p("Av+mwIf9AAIAANhI/9AAIAAth").cp();
	this.shape_74.setTransform(2.8,-43.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.bf(img.Sand).bs(img.Sand).ss(2.4,1,0,60).p("Av+mqIf9AAIAANVI/9AAIAAtV").cp();
	this.shape_75.setTransform(2.8,-42.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.bf(img.Sand).bs(img.Sand).ss(2.4,1,0,60).p("Av+mlIf9AAIAANLI/9AAIAAtL").cp();
	this.shape_76.setTransform(2.8,-42.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.bf(img.Sand).bs(img.Sand).ss(2.3,1,0,60).p("Av+mgIf9AAIAANBI/9AAIAAtB").cp();
	this.shape_77.setTransform(2.8,-41.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.bf(img.Sand).bs(img.Sand).ss(2.3,1,0,60).p("Av+maIf9AAIAAM1I/9AAIAAs1").cp();
	this.shape_78.setTransform(2.8,-41.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.bf(img.Sand).bs(img.Sand).ss(2.3,1,0,60).p("Av+mVIf9AAIAAMrI/9AAIAAsr").cp();
	this.shape_79.setTransform(2.8,-40.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.bf(img.Sand).bs(img.Sand).ss(2.2,1,0,60).p("Av+mQIf9AAIAAMhI/9AAIAAsh").cp();
	this.shape_80.setTransform(2.8,-40);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.bf(img.Sand).bs(img.Sand).ss(2.2,1,0,60).p("Av+mKIf9AAIAAMVI/9AAIAAsV").cp();
	this.shape_81.setTransform(2.8,-39.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.bf(img.Sand).bs(img.Sand).ss(2.2,1,0,60).p("Av+mFIf9AAIAAMLI/9AAIAAsL").cp();
	this.shape_82.setTransform(2.8,-39);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.bf(img.Sand).bs(img.Sand).ss(2.2,1,0,60).p("Av+mAIf9AAIAAMBI/9AAIAAsB").cp();
	this.shape_83.setTransform(2.8,-38.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.bf(img.Sand).bs(img.Sand).ss(2.1,1,0,60).p("Av+l6If9AAIAAL1I/9AAIAAr1").cp();
	this.shape_84.setTransform(2.8,-37.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.bf(img.Sand).bs(img.Sand).ss(2.1,1,0,60).p("Av+l1If9AAIAALrI/9AAIAArr").cp();
	this.shape_85.setTransform(2.8,-37.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.bf(img.Sand).bs(img.Sand).ss(2.1,1,0,60).p("Av+lwIf9AAIAALhI/9AAIAArh").cp();
	this.shape_86.setTransform(2.8,-36.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.bf(img.Sand).bs(img.Sand).ss(2,1,0,60).p("Av+lrIf9AAIAALXI/9AAIAArX").cp();
	this.shape_87.setTransform(2.8,-36.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.bf(img.Sand).bs(img.Sand).ss(2,1,0,60).p("Av+llIf9AAIAALLI/9AAIAArL").cp();
	this.shape_88.setTransform(2.8,-35.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.bf(img.Sand).bs(img.Sand).ss(2,1,0,60).p("Av+lgIf9AAIAALBI/9AAIAArB").cp();
	this.shape_89.setTransform(2.8,-35.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.bf(img.Sand).bs(img.Sand).ss(2,1,0,60).p("Av+lbIf9AAIAAK3I/9AAIAAq3").cp();
	this.shape_90.setTransform(2.8,-34.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.bf(img.Sand).bs(img.Sand).ss(1.9,1,0,60).p("Av+lVIf9AAIAAKrI/9AAIAAqr").cp();
	this.shape_91.setTransform(2.8,-34.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.bf(img.Sand).bs(img.Sand).ss(1.9,1,0,60).p("Av+lQIf9AAIAAKhI/9AAIAAqh").cp();
	this.shape_92.setTransform(2.8,-33.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.bf(img.Sand).bs(img.Sand).ss(1.9,1,0,60).p("Av+lLIf9AAIAAKXI/9AAIAAqX").cp();
	this.shape_93.setTransform(2.8,-33.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.bf(img.Sand).bs(img.Sand).ss(1.8,1,0,60).p("Av+lFIf9AAIAAKLI/9AAIAAqL").cp();
	this.shape_94.setTransform(2.8,-32.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.bf(img.Sand).bs(img.Sand).ss(1.8,1,0,60).p("Av+lAIf9AAIAAKBI/9AAIAAqB").cp();
	this.shape_95.setTransform(2.8,-32.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.bf(img.Sand).bs(img.Sand).ss(1.8,1,0,60).p("Av+k7If9AAIAAJ3I/9AAIAAp3").cp();
	this.shape_96.setTransform(2.8,-31.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.bf(img.Sand).bs(img.Sand).ss(1.8,1,0,60).p("Av+k1If9AAIAAJrI/9AAIAApr").cp();
	this.shape_97.setTransform(2.8,-31);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.bf(img.Sand).bs(img.Sand).ss(1.7,1,0,60).p("Av+kwIf9AAIAAJhI/9AAIAAph").cp();
	this.shape_98.setTransform(2.8,-30.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.bf(img.Sand).bs(img.Sand).ss(1.7,1,0,60).p("Av+krIf9AAIAAJXI/9AAIAApX").cp();
	this.shape_99.setTransform(2.8,-29.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.bf(img.Sand).bs(img.Sand).ss(1.7,1,0,60).p("Av+klIf9AAIAAJLI/9AAIAApL").cp();
	this.shape_100.setTransform(2.8,-29.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.bf(img.Sand).bs(img.Sand).ss(1.6,1,0,60).p("Av+kgIf9AAIAAJBI/9AAIAApB").cp();
	this.shape_101.setTransform(2.8,-28.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.bf(img.Sand).bs(img.Sand).ss(1.6,1,0,60).p("Av+kbIf9AAIAAI3I/9AAIAAo3").cp();
	this.shape_102.setTransform(2.8,-28.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.bf(img.Sand).bs(img.Sand).ss(1.6,1,0,60).p("Av+kWIf9AAIAAItI/9AAIAAot").cp();
	this.shape_103.setTransform(2.8,-27.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.bf(img.Sand).bs(img.Sand).ss(1.6,1,0,60).p("Av+kQIf9AAIAAIhI/9AAIAAoh").cp();
	this.shape_104.setTransform(2.8,-27.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.bf(img.Sand).bs(img.Sand).ss(1.5,1,0,60).p("Av+kLIf9AAIAAIXI/9AAIAAoX").cp();
	this.shape_105.setTransform(2.8,-26.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.bf(img.Sand).bs(img.Sand).ss(1.5,1,0,60).p("Av+kGIf9AAIAAINI/9AAIAAoN").cp();
	this.shape_106.setTransform(2.8,-26.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.bf(img.Sand).bs(img.Sand).ss(1.5,1,0,60).p("Av+kAIf9AAIAAIBI/9AAIAAoB").cp();
	this.shape_107.setTransform(2.8,-25.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.bf(img.Sand).bs(img.Sand).ss(1.4,1,0,60).p("Av+j7If9AAIAAH3I/9AAIAAn3").cp();
	this.shape_108.setTransform(2.8,-25.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.bf(img.Sand).bs(img.Sand).ss(1.4,1,0,60).p("Av+j2If9AAIAAHtI/9AAIAAnt").cp();
	this.shape_109.setTransform(2.8,-24.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.bf(img.Sand).bs(img.Sand).ss(1.4,1,0,60).p("Av+jwIf9AAIAAHhI/9AAIAAnh").cp();
	this.shape_110.setTransform(2.8,-24.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.bf(img.Sand).bs(img.Sand).ss(1.3,1,0,60).p("Av+jrIf9AAIAAHXI/9AAIAAnX").cp();
	this.shape_111.setTransform(2.8,-23.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.bf(img.Sand).bs(img.Sand).ss(1.3,1,0,60).p("Av+jmIf9AAIAAHNI/9AAIAAnN").cp();
	this.shape_112.setTransform(2.8,-23);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.bf(img.Sand).bs(img.Sand).ss(1.3,1,0,60).p("Av+jgIf9AAIAAHBI/9AAIAAnB").cp();
	this.shape_113.setTransform(2.8,-22.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.bf(img.Sand).bs(img.Sand).ss(1.3,1,0,60).p("Av+jbIf9AAIAAG3I/9AAIAAm3").cp();
	this.shape_114.setTransform(2.8,-22);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.bf(img.Sand).bs(img.Sand).ss(1.2,1,0,60).p("Av+jWIf9AAIAAGtI/9AAIAAmt").cp();
	this.shape_115.setTransform(2.8,-21.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.bf(img.Sand).bs(img.Sand).ss(1.2,1,0,60).p("Av+jRIf9AAIAAGjI/9AAIAAmj").cp();
	this.shape_116.setTransform(2.8,-20.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.bf(img.Sand).bs(img.Sand).ss(1.2,1,0,60).p("Av+jLIf9AAIAAGXI/9AAIAAmX").cp();
	this.shape_117.setTransform(2.8,-20.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.bf(img.Sand).bs(img.Sand).ss(1.1,1,0,60).p("Av+jGIf9AAIAAGNI/9AAIAAmN").cp();
	this.shape_118.setTransform(2.8,-19.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.bf(img.Sand).bs(img.Sand).ss(1.1,1,0,60).p("Av+jBIf9AAIAAGDI/9AAIAAmD").cp();
	this.shape_119.setTransform(2.8,-19.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.bf(img.Sand).bs(img.Sand).ss(1.1,1,0,60).p("Av+i7If9AAIAAF3I/9AAIAAl3").cp();
	this.shape_120.setTransform(2.8,-18.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.bf(img.Sand).bs(img.Sand).ss(1.1,1,0,60).p("Av+i2If9AAIAAFtI/9AAIAAlt").cp();
	this.shape_121.setTransform(2.8,-18.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.bf(img.Sand).bs(img.Sand).ss(1,1,0,60).p("Av+ixIf9AAIAAFjI/9AAIAAlj").cp();
	this.shape_122.setTransform(2.8,-17.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.bf(img.Sand).bs(img.Sand).ss(1,1,0,60).p("Av+irIf9AAIAAFXI/9AAIAAlX").cp();
	this.shape_123.setTransform(2.8,-17.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.bf(img.Sand).bs(img.Sand).ss(1,1,0,60).p("Av+imIf9AAIAAFNI/9AAIAAlN").cp();
	this.shape_124.setTransform(2.8,-16.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.bf(img.Sand).bs(img.Sand).ss(0.9,1,0,60).p("Av+ihIf9AAIAAFDI/9AAIAAlD").cp();
	this.shape_125.setTransform(2.8,-16.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.bf(img.Sand).bs(img.Sand).ss(0.9,1,0,60).p("Av+ibIf9AAIAAE3I/9AAIAAk3").cp();
	this.shape_126.setTransform(2.8,-15.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.bf(img.Sand).bs(img.Sand).ss(0.9,1,0,60).p("Av+iWIf9AAIAAEtI/9AAIAAkt").cp();
	this.shape_127.setTransform(2.8,-15.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.bf(img.Sand).bs(img.Sand).ss(0.9,1,0,60).p("Av+iRIf9AAIAAEjI/9AAIAAkj").cp();
	this.shape_128.setTransform(2.8,-14.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.bf(img.Sand).bs(img.Sand).ss(0.8,1,0,60).p("Av+iMIf9AAIAAEZI/9AAIAAkZ").cp();
	this.shape_129.setTransform(2.8,-14);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.bf(img.Sand).bs(img.Sand).ss(0.8,1,0,60).p("Av+iGIf9AAIAAENI/9AAIAAkN").cp();
	this.shape_130.setTransform(2.8,-13.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.bf(img.Sand).bs(img.Sand).ss(0.8,1,0,60).p("Av+iBIf9AAIAAEDI/9AAIAAkD").cp();
	this.shape_131.setTransform(2.8,-12.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.bf(img.Sand).bs(img.Sand).ss(0.7,1,0,60).p("Av+h8If9AAIAAD5I/9AAIAAj5").cp();
	this.shape_132.setTransform(2.8,-12.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.bf(img.Sand).bs(img.Sand).ss(0.7,1,0,60).p("Av+h2If9AAIAADtI/9AAIAAjt").cp();
	this.shape_133.setTransform(2.8,-11.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.bf(img.Sand).bs(img.Sand).ss(0.7,1,0,60).p("Av+hxIf9AAIAADjI/9AAIAAjj").cp();
	this.shape_134.setTransform(2.8,-11.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.bf(img.Sand).bs(img.Sand).ss(0.7,1,0,60).p("Av+hsIf9AAIAADZI/9AAIAAjZ").cp();
	this.shape_135.setTransform(2.8,-10.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.bf(img.Sand).bs(img.Sand).ss(0.6,1,0,60).p("Av+hmIf9AAIAADNI/9AAIAAjN").cp();
	this.shape_136.setTransform(2.8,-10.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.bf(img.Sand).bs(img.Sand).ss(0.6,1,0,60).p("Av+hhIf9AAIAADDI/9AAIAAjD").cp();
	this.shape_137.setTransform(2.8,-9.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.bf(img.Sand).bs(img.Sand).ss(0.6,1,0,60).p("Av+hcIf9AAIAAC5I/9AAIAAi5").cp();
	this.shape_138.setTransform(2.8,-9.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.bf(img.Sand).bs(img.Sand).ss(0.5,1,0,60).p("Av+hWIf9AAIAACtI/9AAIAAit").cp();
	this.shape_139.setTransform(2.8,-8.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.bf(img.Sand).bs(img.Sand).ss(0.5,1,0,60).p("Av+hRIf9AAIAACjI/9AAIAAij").cp();
	this.shape_140.setTransform(2.8,-8.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.bf(img.Sand).bs(img.Sand).ss(0.5,1,0,60).p("Av+hMIf9AAIAACZI/9AAIAAiZ").cp();
	this.shape_141.setTransform(2.8,-7.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.bf(img.Sand).bs(img.Sand).ss(0.4,1,0,60).p("Av+hGIf9AAIAACNI/9AAIAAiN").cp();
	this.shape_142.setTransform(2.8,-7.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.bf(img.Sand).bs(img.Sand).ss(0.4,1,0,60).p("Av+hBIf9AAIAACDI/9AAIAAiD").cp();
	this.shape_143.setTransform(2.8,-6.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.bf(img.Sand).bs(img.Sand).ss(0.4,1,0,60).p("Av+g8If9AAIAAB5I/9AAIAAh5").cp();
	this.shape_144.setTransform(2.8,-6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.bf(img.Sand).bs(img.Sand).ss(0.4,1,0,60).p("Av+g3If9AAIAABvI/9AAIAAhv").cp();
	this.shape_145.setTransform(2.8,-5.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.bf(img.Sand).bs(img.Sand).ss(0.3,1,0,60).p("Av+gxIf9AAIAABjI/9AAIAAhj").cp();
	this.shape_146.setTransform(2.8,-5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.bf(img.Sand).bs(img.Sand).ss(0.3,1,0,60).p("Av+gsIf9AAIAABZI/9AAIAAhZ").cp();
	this.shape_147.setTransform(2.8,-4.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.bf(img.Sand).bs(img.Sand).ss(0.3,1,0,60).p("Av+gnIf9AAIAABPI/9AAIAAhP").cp();
	this.shape_148.setTransform(2.8,-3.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.bf(img.Sand).bs(img.Sand).ss(0.2,1,0,60).p("Av+ghIf9AAIAABDI/9AAIAAhD").cp();
	this.shape_149.setTransform(2.8,-3.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.bf(img.Sand).bs(img.Sand).ss(0.2,1,0,60).p("Av+gcIf9AAIAAA5I/9AAIAAg5").cp();
	this.shape_150.setTransform(2.8,-2.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.bf(img.Sand).bs(img.Sand).ss(0.2,1,0,60).p("Av+gXIf9AAIAAAvI/9AAIAAgv").cp();
	this.shape_151.setTransform(2.8,-2.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.bf(img.Sand).bs(img.Sand).ss(0.2,1,0,60).p("Av+gRIf9AAIAAAjI/9AAIAAgj").cp();
	this.shape_152.setTransform(2.8,-1.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.bf(img.Sand).bs(img.Sand).ss(0.1,1,0,60).p("Av+gMIf9AAIAAAZI/9AAIAAgZ").cp();
	this.shape_153.setTransform(2.8,-1.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.bf(img.Sand).bs(img.Sand).ss(0.1,1,0,60).p("AP/gHIAAAPI/9AAIAAgPIf9AA").cp();
	this.shape_154.setTransform(2.8,-0.7);

	this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = mask_2;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54}]}).to({state:[{t:this.shape_55}]},dur).to({state:[{t:this.shape_56}]},dur).to({state:[{t:this.shape_57}]},dur).to({state:[{t:this.shape_58}]},dur).to({state:[{t:this.shape_59}]},dur).to({state:[{t:this.shape_60}]},dur).to({state:[{t:this.shape_61}]},dur).to({state:[{t:this.shape_62}]},dur).to({state:[{t:this.shape_63}]},dur).to({state:[{t:this.shape_64}]},dur).to({state:[{t:this.shape_65}]},dur).to({state:[{t:this.shape_66}]},dur).to({state:[{t:this.shape_67}]},dur).to({state:[{t:this.shape_68}]},dur).to({state:[{t:this.shape_69}]},dur).to({state:[{t:this.shape_70}]},dur).to({state:[{t:this.shape_71}]},dur).to({state:[{t:this.shape_72}]},dur).to({state:[{t:this.shape_73}]},dur).to({state:[{t:this.shape_74}]},dur).to({state:[{t:this.shape_75}]},dur).to({state:[{t:this.shape_76}]},dur).to({state:[{t:this.shape_77}]},dur).to({state:[{t:this.shape_78}]},dur).to({state:[{t:this.shape_79}]},dur).to({state:[{t:this.shape_80}]},dur).to({state:[{t:this.shape_81}]},dur).to({state:[{t:this.shape_82}]},dur).to({state:[{t:this.shape_83}]},dur).to({state:[{t:this.shape_84}]},dur).to({state:[{t:this.shape_85}]},dur).to({state:[{t:this.shape_86}]},dur).to({state:[{t:this.shape_87}]},dur).to({state:[{t:this.shape_88}]},dur).to({state:[{t:this.shape_89}]},dur).to({state:[{t:this.shape_90}]},dur).to({state:[{t:this.shape_91}]},dur).to({state:[{t:this.shape_92}]},dur).to({state:[{t:this.shape_93}]},dur).to({state:[{t:this.shape_94}]},dur).to({state:[{t:this.shape_95}]},dur).to({state:[{t:this.shape_96}]},dur).to({state:[{t:this.shape_97}]},dur).to({state:[{t:this.shape_98}]},dur).to({state:[{t:this.shape_99}]},dur).to({state:[{t:this.shape_100}]},dur).to({state:[{t:this.shape_101}]},dur).to({state:[{t:this.shape_102}]},dur).to({state:[{t:this.shape_103}]},dur).to({state:[{t:this.shape_104}]},dur).to({state:[{t:this.shape_105}]},dur).to({state:[{t:this.shape_106}]},dur).to({state:[{t:this.shape_107}]},dur).to({state:[{t:this.shape_108}]},dur).to({state:[{t:this.shape_109}]},dur).to({state:[{t:this.shape_110}]},dur).to({state:[{t:this.shape_111}]},dur).to({state:[{t:this.shape_112}]},dur).to({state:[{t:this.shape_113}]},dur).to({state:[{t:this.shape_114}]},dur).to({state:[{t:this.shape_115}]},dur).to({state:[{t:this.shape_116}]},dur).to({state:[{t:this.shape_117}]},dur).to({state:[{t:this.shape_118}]},dur).to({state:[{t:this.shape_119}]},dur).to({state:[{t:this.shape_120}]},dur).to({state:[{t:this.shape_121}]},dur).to({state:[{t:this.shape_122}]},dur).to({state:[{t:this.shape_123}]},dur).to({state:[{t:this.shape_124}]},dur).to({state:[{t:this.shape_125}]},dur).to({state:[{t:this.shape_126}]},dur).to({state:[{t:this.shape_127}]},dur).to({state:[{t:this.shape_128}]},dur).to({state:[{t:this.shape_129}]},dur).to({state:[{t:this.shape_130}]},dur).to({state:[{t:this.shape_131}]},dur).to({state:[{t:this.shape_132}]},dur).to({state:[{t:this.shape_133}]},dur).to({state:[{t:this.shape_134}]},dur).to({state:[{t:this.shape_135}]},dur).to({state:[{t:this.shape_136}]},dur).to({state:[{t:this.shape_137}]},dur).to({state:[{t:this.shape_138}]},dur).to({state:[{t:this.shape_139}]},dur).to({state:[{t:this.shape_140}]},dur).to({state:[{t:this.shape_141}]},dur).to({state:[{t:this.shape_142}]},dur).to({state:[{t:this.shape_143}]},dur).to({state:[{t:this.shape_144}]},dur).to({state:[{t:this.shape_145}]},dur).to({state:[{t:this.shape_146}]},dur).to({state:[{t:this.shape_147}]},dur).to({state:[{t:this.shape_148}]},dur).to({state:[{t:this.shape_149}]},dur).to({state:[{t:this.shape_150}]},dur).to({state:[{t:this.shape_151}]},dur).to({state:[{t:this.shape_152}]},dur).to({state:[{t:this.shape_153}]},dur).to({state:[{t:this.shape_154}]},dur).wait(1000));

	// Layer 3
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().bs(img.Sand).ss(5,1,0,60).p("AAAAgIAAg/");
	this.shape_155.setTransform(1.3,4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#996600").ss(1,1,0,60).p("AAmgCIgqACIghAD");
	this.shape_156.setTransform(0.7,-0.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.bf(img.Sand).s().p("AABq3IAOAAIAKAAIAAVvIgxAAIAA1vIATAAIAGAA").cp();
	this.shape_157.setTransform(1.1,76.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#996600").s().p("AAMArIgMAAIAAg/IAAA/IgIAAIgdhNIAbgDIAqgEIAGgBIgaBV").cp();
	this.shape_158.setTransform(1.3,2.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().bs(img.Sand).ss(5,1,0,60).p("AAAACIAAgD");
	this.shape_159.setTransform(-1.7,64);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.bf(img.Sand).s().p("AgFq3IAGAAIAOAAIAKAAIAAVvIgxAAIAA1vIATAA").cp();
	this.shape_160.setTransform(-1.8,133.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#996600").s().p("AALACIgMAAIgIAAIgCgDIAKAAIANAAIgBADAgBACIAAgDIAAAD").cp();
	this.shape_161.setTransform(-1.4,64);

	this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = mask_2;
	
	//sand pipe
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155}]}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159}]},1000).wait(1));

	// Layer 1 copy
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AMy27IgCAEQCzLDrLH9QgBAAAAABQgHAEgGAFQlpEJFnDoQLJH6irLAI5KAAQiwrELNn9QFnjolpkJQgGgEgHgFQAAAAAAgBQrMn8CzrDIZhAAIAAAC").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_162}]}).wait(1000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-147,204.8,294.1);


(lib.hourAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 2
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#9F5000","#FFCC66","#E49630","#EBA53F","#E3942E","#9C5003"],[0,0.431,0.667,0.78,0.882,1],-233.2,0,233.3,0).s().rr(-233.3,-39.05,466.6,78.1,5);
	this.shape_163.setTransform(273.4,378.1,0.41,0.091);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#9F5000","#FFCC66","#E49630","#EBA53F","#E3942E","#9C5003"],[0,0.431,0.667,0.78,0.882,1],-233.2,0,233.3,0).s().rr(-233.3,-39.05,466.6,78.1,5);
	this.shape_164.setTransform(273.9,16.5,0.412,0.091,0,0,180);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#753A00","#FFCC66","#A06D07","#E49630","#EBA53F","#E3942E","#9C5003"],[0,0.18,0.502,0.667,0.78,0.882,1],-233.2,0,233.3,0).s("#663300").ss(2,1,1).rr(-233.3,-39.05,466.6,78.1,5);
	this.shape_165.setTransform(274,366.4,0.417,0.416,0,180,0);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#CCCCCC","#FFFFFF","#A8A8A8","#343434","#E8E8E8","#000000"],[0,0.157,0.302,0.573,0.875,1],-205.8,0,206,0).s("#999999").ss(2,1,1).rr(-206,-23.25,412,46.5,15);
	this.shape_166.setTransform(274,352.9,0.416,0.416,180);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#9F5000","#FFCC66","#A06D07","#E49630","#EBA53F","#E3942E","#9C5003"],[0,0.18,0.502,0.667,0.78,0.882,1],-233.2,0,233.3,0).s("#663300").ss(2,1,0,3).rr(-233.3,-39.05,466.6,78.1,5);
	this.shape_167.setTransform(274,28.2,0.417,0.416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163}]}).wait(1000));

	// Layer 3
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#CCCCCC","#FFFFFF","#A8A8A8","#343434","#E8E8E8","#000000"],[0,0.157,0.302,0.573,0.875,1],-205.8,0,206,0).s("#999999").ss(2,1,1).rr(-206,-23.25,412,46.5,15);
	this.shape_168.setTransform(274,41.8,0.416,0.416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_168}]}).wait(1000));

	// Layer 4
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(275.2,275.4,1,1,180);
	this.instance_2.alpha = 0.352;

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(276.2,119.4);
	this.instance_3.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1000));

	// Layer 5
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(274.9,198.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(1000));

	// Layer 7
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.bf(img.Sand).s().p("ACDAjQiFgEiAgCQARgEATgDQALglA5gRQAEgCAGAAQAZAIAcAIIAAAOQAeAWAzAKQAEACAFAAIAEAF").cp();
	this.shape_169.setTransform(274.7,340.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.bf(img.Sand).s().p("AiIAhQAGgCAHgBQALgDANgCQAJgbAfgSQAGgDAHgDQAHgEAIgDQACgBACgBQAEgBAGAAQAFABAGABQADABADABQAHACAKACQAAAAABAAQAFABAEACQACABACAAQAEABAEACQAAADAAADQAAAAAAABIAAAEQAAACAAABQAFADAEAEQAEAAAEADQAJAFAKAEQANAHAPAEQADACADABQAFABAFABQACABACAAQAAAAABAAQAAAAAAAAQABABABAAQAEABADAAQABABABACQABABABABQgCAAgCAAQgRABgRAAQAAAAAAAAQgYAAgYAAQg2gBg3gBQgngBgngBIAAAA").cp();
	this.shape_170.setTransform(274.6,339.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.bf(img.Sand).s().p("AiOAlQAGgCAHgCQAMgEANgDQAKgcAhgTQAGgEAHgDQAIgEAIgEQACgBACgBQAEgCAGAAQAGABAGABQADABADABQAHABAKABQABAAABAAQAEACAFACQACABACAAQAEACAEABQAAAEABADQAAAAAAABIAAAEQAAACABABQAEAEAFADQADADAEABQAKAGALAEQANAIAQAFQADABADACQAFABAFABQACABACAAQABAAAAABQAAAAAAAAQABAAACAAQADABAEAAQABACABACQABABABABQgCAAgCAAQgPACgRACQAAAAAAAAQgZgBgZAAQg6AAg6gCQgqgBgpAAIAAAA").cp();
	this.shape_171.setTransform(274.5,339.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.bf(img.Sand).s().p("AiUApQAGgDAHgCQANgFANgDQAMgeAhgVQAHgDAHgEQAIgFAJgDQACgBACgCQAEgCAGAAQAGAAAGABQAEABADABQAHAAALABQAAAAABAAQAFACAGACQABABACABQAEABAEACQABADABADQAAABAAAAIAAAFQABACAAACQAFADAEAEQAEADAEADQAKAEAMAFQANAJARAFQADACADABQAFACAFABQADABACABQAAAAABAAQAAAAAAAAQABAAABABQAEABAEAAQABACABABQACACAAABQgBAAgCABQgPACgPADQAAAAAAAAQgbAAgbAAQg+gBg9gBQgsgBgrAAIAAAA").cp();
	this.shape_172.setTransform(274.4,339);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.bf(img.Sand).s().p("AiaAtQAGgDAIgDQAMgFAOgFQANgfAjgWQAHgEAIgEQAHgFAJgEQADgBACgCQAEgCAGgBQAGAAAHABQAEABADAAQAHAAALABQABAAABAAQAFACAGACQACABABABQAFACAEACQABADAAADQABABAAAAIAAAFQABACAAACQAFADAFAEQAEAEAEADQALAFAMAFQAOAJARAHQADABADACQAFACAGABQACABACABQABAAAAAAQAAAAAAAAQACABABAAQAEABAEABQABABABACQACABAAACQgBAAgCABQgNAEgPAEQAAAAAAAAQgcgBgdAAQhCAAg/gCQgugBguABIAAAA").cp();
	this.shape_173.setTransform(274.3,338.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.bf(img.Sand).s().p("AihAwQAHgDAIgDQANgGAOgFQAOghAlgXQAHgFAIgEQAIgGAJgEQACgBADgCQAEgCAHgBQAGAAAHAAQADABAEAAQAIgBALAAQABAAAAAAQAGACAGADQACABACABQAEACAEACQABAEABADQAAABABAAIAAAFQABACAAACQAFADAGAFQAEADAEAEQALAHANAEQAOAKASAHQADACADACQAFABAGACQACABADABQAAAAAAAAQABAAAAABQABAAACAAQAEACAEAAQABACACACQABABABACQgCAAgCABQgMAFgOAFQAAAAABAAQgeAAgeAAQhGAAhCgCQgxgBgwAAIgBAA").cp();
	this.shape_174.setTransform(274.2,338.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.bf(img.Sand).s().p("AinA1QAHgEAIgEQANgGAPgGQAQgiAlgZQAIgFAIgEQAIgHAKgEQACgBADgCQAEgDAHgBQAGAAAHAAQAEAAAEABQAIgDALABQABAAABAAQAGACAGACQACACACABQAEACAFADQABADABAEQAAAAABABIAAAFQABACAAACQAGADAGAFQADAEAFAEQALAHANAFQAPALATAHQADACACACQAGACAGABQADACACABQABAAAAAAQAAAAAAAAQACABABAAQAEACAFABQABACACABQABACABABQgCABgBABQgLAGgNAGQAAAAAAAAQgfAAggAAQhJAAhGgCQgzgBgzABIAAAA").cp();
	this.shape_175.setTransform(274.1,337.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.bf(img.Sand).s().p("AitA6QAHgFAIgEQAOgHAPgGQARgkAngaQAHgFAJgFQAJgHAKgEQACgCADgCQAEgDAHgCQAGAAAIAAQAEAAAEABQAIgEAMAAQABAAABAAQAGADAGACQACACACABQAEADAFACQABAEACADQAAABABAAIAAAGQABACABACQAFAEAGAEQAEAFAFAEQAMAIANAFQAPALAUAIQACADADACQAHACAGABQACACADABQAAAAAAAAQABABAAAAQABAAACABQAEABAFABQABACACACQABACABABQgBABgCABQgKAHgMAIQAAAAAAAAQghgBggAAQhNABhJgCQg2gCg1ACIAAAA").cp();
	this.shape_176.setTransform(274,337.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.bf(img.Sand).s().p("AizA+QAHgEAIgFQAPgIAPgHQASgmAogbQAIgFAKgFQAIgIAKgEQADgCADgCQAEgEAHgBQAHgBAIAAQAEAAAEAAQAIgEANAAQAAAAABAAQAHACAGADQACACACABQAEADAFADQACAEACADQAAABAAAAIABAGQABACABACQAGAEAGAFQAEAEAFAFQAMAIAOAGQAPAMAVAJQACACADADQAHACAGABQADACACABQABAAAAABQAAAAAAAAQACABABAAQAFACAFABQABACACACQABABABACQgBABgCABQgIAIgMAJQAAAAABAAQgjAAgiAAQhQABhNgDQg4gBg3ABIAAAA").cp();
	this.shape_177.setTransform(273.9,336.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.bf(img.Sand).s().p("Ai5BDQAHgFAJgFQAOgJAQgHQAUgpApgbQAIgGAKgFQAIgIALgFQADgCACgCQAFgEAHgCQAHgBAIAAQAFAAAEAAQAIgFANAAQABgBABAAQAGADAHADQACACACABQAEAEAGACQABAEACAEQABAAAAABIABAGQABACABACQAGAEAHAFQAEAFAEAFQAOAJAOAGQAQANAUAJQADADADADQAHABAHACQACACADABQAAAAAAABQABAAAAAAQACABABAAQAFACAFACQABACACABQABACABACQgBABgBABQgIAKgKAJQAAABAAAAQgkgBgkAAQhTAChQgDQg6gCg6ACIAAAA").cp();
	this.shape_178.setTransform(273.8,336.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.bf(img.Sand).s().p("Ai/BIQAIgGAIgFQAPgJAQgJQAVgrArgcQAIgGAKgFQAJgJALgEQACgDADgCQAGgEAHgCQAHgCAIAAQAFAAAEAAQAIgGAOgBQABAAABAAQAGADAHADQACACACABQAFAEAFADQACAEACADQABABAAABIABAGQABACABACQAHAEAGAFQAFAGAEAEQAOAKAPAIQAQANAVAJQADADADADQAHACAHACQADACACABQAAABAAAAQABAAABAAQABABACAAQAFADAEABQACACACACQABACABACQgBABgBABQgGALgKALQAAAAAAAAQglgBglABQhXABhUgDQg8gBg8ACIAAAA").cp();
	this.shape_179.setTransform(273.7,336);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.bf(img.Sand).s().p("AjGBMQAJgFAIgGQAPgKARgKQAWgsAsgdQAJgGAKgHQAJgIAMgFQACgDADgCQAGgFAHgCQAHgCAJAAQAEAAAFAAQAIgHAOgBQABgBABAAQAHADAHADQACACACACQAFAEAGADQACAEACAEQABABAAAAIABAHQABACABACQAHAEAHAGQAEAFAFAFQAOAKAQAJQAQANAWALQADADADADQAHACAHACQADACADABQAAABAAAAQAAAAABAAQACABABABQAFACAFACQACACACACQABACACACQgBABgBABQgGAMgJAMQABAAAAAAQgnAAgnAAQhaAChXgDQg/gCg+ACIgBAA").cp();
	this.shape_180.setTransform(273.6,335.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.bf(img.Sand).s().p("AjMBRQAJgGAIgGQAQgLARgKQAYguAtgfQAJgGAKgHQAKgJALgFQADgDADgDQAGgEAHgDQAHgCAJAAQAFgBAFAAQAIgHAPgCQABAAABAAQAHADAHADQACACACADQAFAEAGADQACAEADAEQAAAAABABIABAHQABACACACQAGAFAIAFQAEAGAFAFQAPALAQAJQAQAOAXALQADADACADQAIADAIACQADABACACQAAABAAAAQABAAABABQABAAACABQAFACAFACQACACACACQACACABACQgBACgBACQgEAMgIANQAAAAAAABQgogBgoABQheABhbgDQhBgChAADIgBAA").cp();
	this.shape_181.setTransform(273.5,335.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.bf(img.Sand).s().p("AjSBWQAJgHAJgGQAQgMARgLQAZgvAuggQAKgHALgHQAJgJAMgGQADgDADgDQAGgFAHgCQAIgDAJgBQAFAAAFAAQAIgIAPgCQABgBABAAQAIADAHAEQACACACADQAFAEAGADQADAFADADQAAABABABIABAHQABACACACQAHAFAIAFQAEAGAFAGQAPALARAKQARAPAXALQADAEACADQAIACAIACQADACADACQAAABAAAAQAAAAABABQACABACAAQAFADAFACQACACACACQACACABACQgBACgBACQgDANgHAPQAAAAABAAQgqgBgqABQhhAChegDQhEgChDADIAAAA").cp();
	this.shape_182.setTransform(273.4,334.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.bf(img.Sand).s().p("AjYBaQAJgHAJgGQAQgNASgLQAagxAwgiQAKgHALgHQAJgKANgFQADgEADgDQAGgFAHgDQAIgDAKgBQAFAAAFAAQAIgJAQgDQABAAABAAQAIADAIAEQABACACADQAFAEAHAEQACAEADAEQABABABAAIABAIQACACABACQAHAFAIAGQAFAGAFAGQAPALARALQASAPAYAMQADAEACAEQAIACAIACQADACADACQAAABAAAAQABABABAAQACABABAAQAGADAFACQACACACADQACACABACQgBACAAACQgCAOgHAQQABAAAAAAQgrAAgsAAQhkADhhgEQhGgChGADIAAAA").cp();
	this.shape_183.setTransform(273.3,334.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.bf(img.Sand).s().p("AjeBfQAJgHAJgIQARgNASgMQAbgyAxgjQALgIALgHQAKgLANgFQADgEADgDQAGgFAHgEQAJgCAJgCQAGAAAFAAQAIgKAQgDQABgBACAAQAIAEAIAEQABACACADQAGAFAGADQADAFADAEQABAAABABIABAIQACACABACQAIAFAIAGQAFAHAEAGQARAMARALQASAQAZANQADADACAEQAIADAJACQADACADACQAAABAAAAQAAABABAAQACABACAAQAGADAFADQACACACACQACADABACQAAACgBACQgBAPgFARQAAAAAAABQgsgBgtABQhoAChlgDQhIgChIADIAAAA").cp();
	this.shape_184.setTransform(273.2,333.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.bf(img.Sand).s().p("AjkBkQAJgIAJgIQASgOASgMQAdg1AygkQAKgIAMgHQAKgLANgGQADgEAEgDQAGgGAIgDQAIgDAKgCQAGgBAFAAQAIgKARgEQABAAABAAQAIADAJAEQABADACADQAGAFAHAEQACAEAEAEQABABABABIABAIQACACABACQAIAFAJAGQAEAHAFAHQARAMASAMQASARAaANQACAEADAEQAJACAIADQADACADACQAAABAAABQABAAABAAQACABACABQAFADAGACQACADACACQACACABADQAAACgBACQABARgFARQAAABABAAQgvgBguABQhrADhogEQhLgChKAEIAAAA").cp();
	this.shape_185.setTransform(273.1,333.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.bf(img.Sand).s().p("AjqBoQAJgIAJgIQASgPATgNQAeg2A0glQAKgIANgIQAKgMANgGQADgEAEgDQAGgGAIgEQAIgDAKgCQAGgBAGAAQAIgLARgEQACgBABAAQAIAEAJAEQACADABADQAGAFAHAEQADAFAEAEQABABAAAAIACAJQACACACACQAIAFAJAHQAEAHAFAHQASAMASAMQASASAbAOQACAEADAFQAJACAJADQADACADACQAAABgBABQABAAABAAQACABACABQAGADAGADQACACACACQACADABACQAAADAAACQABASgEATQABAAAAAAQgwAAgvAAQhvAEhsgEQhNgDhMAEIAAAA").cp();
	this.shape_186.setTransform(273,332.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.bf(img.Sand).s().p("AjxBtQAJgJAKgIQATgQATgOQAfg3A1gnQALgIANgIQAKgMAOgHQADgEADgEQAGgGAJgEQAIgDALgCQAGgBAGAAQAIgNASgEQABAAABAAQAJAEAJAEQABADACADQAGAFAHAFQADAFAEAEQABAAABABIACAJQACACACACQAIAFAJAHQAFAIAFAHQASANATAMQASATAbAOQADAFACAEQAKADAJACQADADADACQAAABAAABQABAAABAAQACABACABQAGAEAGACQACADACACQACADABACQAAADAAACQACATgDAUQABAAAAABQgxgBgxABQhyADhvgEQhQgChPAEIAAAA").cp();
	this.shape_187.setTransform(272.9,332.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.bf(img.Sand).s().p("Aj4BxQAKgIAKgJQASgQAUgPQAhg5A2goQALgJANgIQAKgNAPgGQADgFAEgEQAGgGAIgEQAJgEALgCQAGgBAHgBQAHgNATgEQABgBABAAQAJAEAJAFQACADABADQAGAGAIAEQADAFAFAEQAAABABABIACAJQACACACACQAJAFAJAHQAFAIAFAIQASANAUANQATAUAcAPQACAEADAFQAJADAJACQAEADADACQAAABgBABQABAAABABQADABACAAQAGAEAGADQACACACADQACACACADQAAACgBADQAEAUgCAVQAAABABAAQgzgBgzABQh1AEhzgEQhRgDhRAEIgBAA").cp();
	this.shape_188.setTransform(272.9,332);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.bf(img.Sand).s().p("Aj/B2QAKgJAKgJQATgRAUgQQAig6A3gqQAMgJANgIQALgOAOgGQAEgFADgEQAHgHAIgEQAJgEALgCQAHgBAHgBQAHgOATgFQABAAACAAQAJAEAJAEQACAEABADQAHAGAHAFQAEAFAEAEQABABABAAIACAJQACADACACQAJAGAKAHQAEAIAGAHQATAPAUANQATAVAcAPQADAFACAEQAKADAKADQADADADACQAAABAAABQABAAABABQACABACAAQAGAEAHADQACADACACQACADACADQAAACAAADQAEAVgBAXQABAAAAAAQg0AAg0ABQh5AEh2gFQhUgDhUAFIAAAA").cp();
	this.shape_189.setTransform(272.9,331.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.bf(img.Sand).s().p("AkGB7QAKgKAKgJQATgSAVgQQAjg8A5grQAMgKANgIQALgOAPgHQADgFAEgEQAHgHAIgEQAKgFALgCQAGgCAIAAQAHgPATgFQACgBABAAQAKAEAJAFQACAEABADQAHAGAHAFQAEAFAFAFQABAAABABIACAJQACADACACQAJAGAKAHQAFAIAFAIQAUAPAUAOQAUAVAdAQQADAFACAFQAKADAKADQADADAEACQgBABAAABQABAAABABQACABADABQAGAEAGADQADACACADQACADACADQAAACAAADQAGAWgBAYQABAAAAAAQg1AAg2ABQh8AEh6gFQhWgChWAFIAAAA").cp();
	this.shape_190.setTransform(272.9,331.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.bf(img.Sand).s().p("AkOB/QALgKAKgKQAUgSAVgRQAkg+A6gsQAMgJAOgKQALgOAQgHQADgFAEgEQAHgHAIgFQAKgFAMgDQAGgBAIgBQAHgPAUgGQABAAACAAQAJAEAKAFQACADABAEQAHAHAIAFQAEAFAFAEQABABABABIACAJQACADACACQAKAGAKAHQAFAJAFAIQAUAPAVAOQAUAXAeAQQACAFADAGQAKADAKADQAEADADACQAAABgBABQABABACAAQACABACABQAHAEAGADQADADACADQACACACADQAAADAAADQAHAXABAZQAAAAABABQg4gBg3ABQh/AFh9gFQhZgDhYAFIgBAA").cp();
	this.shape_191.setTransform(272.9,330.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.bf(img.Sand).s().p("AkVCEQAKgLALgKQAUgTAWgSQAmg/A7gtQAMgKAPgKQALgOAPgHQAEgGAEgEQAGgIAJgFQAKgFAMgDQAHgBAIgBQAHgQAUgGQACgBABAAQAKAFAKAFQACADABAEQAHAHAIAFQAEAGAFAEQABABABAAIADAKQACADADACQAJAGAKAIQAFAJAGAIQAUAQAWAOQAUAYAfAQQACAGADAFQAKADAKADQAEADAEADQgBABAAABQABABABAAQACABADABQAGAEAHAEQADADACACQACADACADQAAADAAADQAJAYABAaQAAABABAAQg5gBg4ACQiEAEiAgFQhbgChaAFIgBAA").cp();
	this.shape_192.setTransform(272.9,330.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.bf(img.Sand).s().p("AkcCJQAKgLALgLQAVgUAWgSQAnhBA8gvQANgKAPgKQALgPAQgHQAEgGAEgFQAGgHAKgFQAJgGANgDQAHgBAHgBQAIgRAVgHQABgBACAAQAKAFAKAFQACAEABAEQAHAHAIAFQAFAGAFAFQABAAABABIADAKQACACADADQAJAGALAIQAFAJAGAJQAVAQAWAPQAUAYAgASQACAFACAGQALADALADQADADAEADQAAABgBABQABABABAAQADABACABQAHAFAHADQADADACADQACADACADQAAADABADQAJAZACAcQABAAAAAAQg6AAg6ABQiHAFiDgFQhegDhdAGIAAAA").cp();
	this.shape_193.setTransform(273,329.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.bf(img.Sand).s().p("AkjCNQAKgLAMgLQAUgVAXgTQAohCA+gwQANgLAPgKQALgQARgHQADgGAEgFQAHgIAKgFQAKgGAMgDQAHgCAIgBQAIgSAVgGQACgBABAAQALAFAKAFQACAEABAEQAHAHAJAGQAEAGAGAEQABABABAAIADALQACACADADQAKAGALAIQAFAKAFAJQAWAQAXAQQAUAZAhASQACAGACAFQALAEALADQAEADAEADQgBABgBABQACABABAAQACABADABQAHAFAHAEQACADADACQACADACAEQABADAAADQAKAbADAcQABAAAAABQg7gBg8ABQiKAGiHgGQhggDhfAGIAAAA").cp();
	this.shape_194.setTransform(273,329.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.bf(img.Sand).s().p("AkrCSQALgMAMgLQAVgWAXgUQAphDA/gyQAOgLAPgKQALgQARgIQAEgGAEgFQAHgIAKgGQAKgGANgDQAHgCAIgBQAIgTAWgHQABgBACAAQAKAFALAGQACAEABAEQAHAIAJAFQAFAGAFAFQABABACAAIACALQADACADADQAKAGALAJQAGAJAFAKQAWAQAXARQAWAZAgATQADAGACAGQALADALAEQAEADAEADQgBABgBABQACABABAAQADACACAAQAIAFAGAEQADADADADQACADACADQABAEAAADQAMAcADAdQABAAABABQg9gBg+ACQiNAFiKgGQhjgChhAGIgBAA").cp();
	this.shape_195.setTransform(273,328.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.bf(img.Sand).s().p("AkyCWQALgMAMgLQAVgXAYgUQAqhGBBgyQANgMAQgKQAMgRARgIQAEgGAEgFQAHgJAKgGQAKgGANgDQAIgCAIgBQAJgUAVgHQACgBABAAQALAFALAGQACAEABAEQAHAIAJAGQAFAGAGAEQABABACABIACALQADACADADQAKAGAMAJQAFAKAGAKQAWARAYAQQAWAbAhATQACAGADAHQALADALADQAEAEAEADQAAABgBABQABABACAAQACACADAAQAHAGAHAEQADADADACQACAEACADQABAEAAADQANAdAFAeQAAABABAAQg/gBg+ACQiRAGiOgGQhlgDhjAGIgBAA").cp();
	this.shape_196.setTransform(273,328.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.bf(img.Sand).s().p("Ak5CbQALgNAMgMQAWgXAYgVQAshHBBg0QAOgMAQgKQAMgSASgIQADgGAFgGQAHgIAKgGQALgHANgEQAIgCAIgBQAKgUAUgIQACgBACAAQALAFALAGQABAFACAEQAHAIAJAGQAFAGAHAFQABABABAAIADAMQADACADADQALAGAMAJQAFAKAGAKQAXASAYARQAWAcAiATQACAHACAGQAMAEAMADQAEAEAEADQgBABgBABQACABABABQADABADABQAHAFAHAEQADADADADQACADACAEQABADAAAEQAOAeAGAfQAAABABAAQhAAAhAABQiUAGiRgGQhngDhnAHIAAAA").cp();
	this.shape_197.setTransform(273,328);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.bf(img.Sand).s().p("AlACfQALgMAMgNQAWgYAYgVQAuhJBDg1QAOgMAQgLQAMgSASgIQAEgHAFgGQAHgJAKgGQALgHANgEQAIgCAJgBQAKgVAVgJQABAAACAAQAMAFALAGQABAFACAEQAHAIAKAHQAFAGAHAFQABAAABABIADALQADADADADQALAGAMAJQAGALAFAKQAYASAZASQAWAcAjAVQACAGACAHQAMADAMAEQAEAEAEADQgBABgBABQACABACABQACABADABQAIAFAHAFQADADADADQACADACAEQABADABAEQAPAfAGAhQABAAAAABQhBgBhCACQiXAGiVgGQhpgEhpAHIAAAA").cp();
	this.shape_198.setTransform(273,327.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.bf(img.Sand).s().p("AlICkQAMgNAMgNQAXgZAYgWQAvhKBEg3QAPgMAQgMQANgSASgIQAEgHAEgGQAIgJAKgHQALgHAOgEQAIgCAJgBQAKgWAVgJQACgBACAAQALAGAMAGQABAEACAFQAHAJAKAGQAFAGAHAFQABABACAAIADAMQADADADADQALAHANAJQAFALAGAKQAYATAZASQAXAdAkAVQACAGACAHQAMAEAMAEQAEAEAFADQgBABgBABQABABACABQADABADABQAHAFAIAFQADADADADQACAEACADQABAEABAEQAQAgAHAiQABAAABABQhDgBhDACQibAGiZgGQhrgDhrAHIgBAA").cp();
	this.shape_199.setTransform(273,327.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.bf(img.Sand).s().p("AlPCpQAMgOAMgNQAXgaAZgXQAwhLBGg4QAOgNASgMQAMgTATgIQAEgHAEgGQAIgKAKgGQALgIAPgEQAIgCAJgCQAKgXAWgJQABgBACAAQAMAGAMAGQABAFACAFQAHAJAKAGQAGAHAHAFQABABACAAIADAMQADADADADQAMAHAMAJQAGALAGALQAYATAaASQAXAfAkAVQACAHADAHQAMAEAMADQAFAEAEAEQgBABgBACQACAAABABQADABADABQAIAGAIAEQADAEADADQACADADAEQABAEAAAEQASAhAIAjQAAABABAAQhFgBhEACQifAHibgHQhugDhtAIIgBAA").cp();
	this.shape_200.setTransform(273,326.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.bf(img.Sand).s().p("AlWCtQAMgOAMgNQAYgaAZgYQAxhOBHg5QAPgNASgMQAMgTATgJQAEgHAFgHQAIgJAKgHQAMgIAOgEQAIgDAKgBQAKgYAWgJQACgBACAAQAMAGAMAGQABAFACAFQAIAJAKAHQAFAGAIAFQABABACABIADAMQADADADADQAMAHANAJQAGAMAGALQAZATAaATQAXAfAlAWQACAHACAHQANAEANAEQAEAEAEAEQgBABgBACQACAAACABQADABADABQAIAGAHAFQAEADADADQACAEADAEQABAEAAAEQATAiAJAkQAAABABAAQhGAAhGACQiiAHifgHQhwgEhwAIIAAAA").cp();
	this.shape_201.setTransform(273.1,326.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.bf(img.Sand).s().p("AldCyQAMgPANgOQAYgaAZgZQAzhPBIg7QAPgNASgMQAMgUAUgJQAEgHAFgHQAIgKAKgHQAMgIAPgEQAIgDAKgBQAKgZAXgKQABgBACAAQANAGAMAHQABAFACAFQAIAJAKAHQAGAHAHAFQACABABAAIAEANQADADADADQAMAHAOAKQAFALAGAMQAaAUAbATQAXAgAmAWQACAIACAHQANAEANAEQAEAEAFAEQgBABgBACQACAAABABQADABADABQAIAGAIAFQAEAEADADQACAEADAEQABAEABAEQATAjAKAmQABAAABABQhIgBhHACQimAHiigHQhzgDhyAIIAAAA").cp();
	this.shape_202.setTransform(273.1,325.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.bf(img.Sand).s().p("AllC2QANgPANgOQAYgbAagaQA0hQBJg8QAQgOASgMQANgVATgJQAFgHAFgHQAIgKAKgHQAMgJAPgFQAJgCAKgCQAKgZAXgKQACgBACAAQAMAGANAHQABAFACAFQAIAKAKAHQAGAGAIAGQABABACAAIAEANQADACAEAEQALAHAOAKQAGAMAGALQAaAVAbAUQAYAgAnAXQACAIACAHQANAFANAEQAFAEAEAEQgBABgBACQACAAACABQADABADABQAIAHAIAFQADADAEADQACAEADAEQABAFABAEQAVAkAKAnQABAAABABQhJgBhJACQipAIimgHQh1gEh0AIIgBAA").cp();
	this.shape_203.setTransform(273.1,325.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.bf(img.Sand).s().p("AlsC7QANgPANgPQAZgcAagaQA1hSBKg+QARgOASgMQANgVAUgJQAEgIAFgHQAJgLAKgHQANgJAPgFQAJgCAKgCQAKgaAYgLQABgBADAAQAMAGANAHQABAGACAFQAIAKAKAHQAHAHAIAFQABABACAAIADAOQAEACAEADQAMAIAOAKQAGAMAGAMQAbAVAbAUQAZAiAnAYQACAHACAIQANAEAOAEQAEAFAFAEQgBABgCACQACAAACABQADABADACQAJAGAIAFQADAEAEADQACAEADAEQABAEABAFQAWAlALAoQABABABAAQhKgBhLADQisAHipgHQh4gEh2AJIgBAA").cp();
	this.shape_204.setTransform(273.1,325);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.bf(img.Sand).s().p("AlzC/QAMgPAOgPQAZgdAbgbQA2hUBMg+QAQgPATgNQANgVAVgJQAEgIAFgHQAIgLALgIQANgJAPgFQAJgDALgBQAKgbAYgLQACgBACAAQANAGANAHQABAFACAGQAIAKALAIQAGAHAIAFQACABACAAIADAOQAEACAEADQAMAIAPAKQAFANAHAMQAbAVAcAVQAZAjAnAYQACAIACAIQAOAEAOAEQAEAFAFAEQgBABgBACQACAAACABQADACADABQAIAGAJAGQADADAEADQACAFADAEQABAEABAFQAXAmANApQAAABABAAQhMAAhMACQivAIitgIQh6gDh5AIIAAAA").cp();
	this.shape_205.setTransform(273.1,324.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.bf(img.Sand).s().p("Al7DEQANgQAOgPQAageAbgcQA4hVBMhAQARgOATgOQAOgWAUgJQAFgIAFgIQAIgLALgIQANgJAQgFQAJgDALgCQAJgcAZgLQACgBADAAQANAGANAIQABAFABAGQAJAKALAIQAHAHAIAFQACABABABIAEANQAEADAEADQAMAIAPALQAGAMAGANQAcAWAdAVQAZAjAoAZQACAIACAIQAOAFAOAEQAFAFAEAEQgBABgBACQACAAACABQADACAEABQAIAHAIAFQAEAEADADQADAEADAFQABAEACAFQAYAnANAqQABABABABQhOgBhNACQizAIiwgHQh9gEh7AJIgBAA").cp();
	this.shape_206.setTransform(273.1,324.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.bf(img.Sand).s().p("AmCDJQANgRAOgQQAageAcgcQA5hXBOhBQARgPATgOQAOgWAVgKQAFgIAFgIQAIgLAMgIQAMgKAQgFQAKgDAKgCQAKgdAagLQACgCACAAQANAHAOAIQABAFABAGQAJALALAHQAHAIAJAFQABABACAAIAEAOQAEADAEADQANAIAPALQAGANAGANQAcAWAeAWQAZAkApAZQACAIACAJQAOAEAOAFQAFAEAFAFQgBABgCACQACABACAAQAEACADABQAJAHAIAGQAEADADAEQADAEADAEQACAFABAFQAZAoAOAsQABAAABABQhPgBhPADQi2AIi0gIQh/gEh9AKIgBAA").cp();
	this.shape_207.setTransform(273.1,323.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.bf(img.Sand).s().p("AmJDNQANgRAOgQQAbgfAcgdQA6hYBPhDQASgPAUgOQANgXAWgKQAEgJAGgHQAIgMAMgIQANgKAQgFQAKgEAKgCQAKgdAagMQACgBADAAQANAHAOAHQABAGABAGQAJALAMAIQAHAHAJAFQABACACAAIAEAOQAEADAEADQANAIAPALQAGAOAHANQAdAWAdAWQAaAlAqAaQACAJACAIQAOAFAPAEQAEAFAFAFQgBABgBACQACABACAAQADACAEABQAIAHAJAGQAEAEADADQADAEADAFQACAFABAFQAbAqAOAsQABABABAAQhQgBhRADQi6AJi2gIQiBgEiAAJIgBAA").cp();
	this.shape_208.setTransform(273.1,323.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.bf(img.Sand).s().p("AmQDSQANgRAOgRQAbggAdgeQA7hZBRhEQARgQAVgOQAOgYAVgKQAFgJAFgHQAJgMAMgJQANgKARgGQAJgDALgCQAKgeAbgNQACgBACAAQAOAHAOAIQABAGABAGQAJALAMAIQAHAIAJAFQACABACAAIAEAPQAEADAEADQANAIAQAMQAGANAHANQAdAYAeAWQAaAmArAbQABAIACAJQAPAFAPAEQAFAFAFAFQgCABgBACQACABACAAQAEACADABQAJAIAJAGQAEADADAEQADAEADAFQACAFABAFQAcArAQAtQAAABABAAQhSAAhRACQi+AJi6gIQiDgEiDAKIAAAA").cp();
	this.shape_209.setTransform(273.1,322.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.bf(img.Sand).s().p("AmYDWQAOgRAOgRQAcghAdgeQA8hcBShFQASgQAVgOQAOgYAWgKQAFgKAFgIQAJgMAMgIQANgLARgGQAKgDALgCQAKgfAbgNQACgBADAAQAOAHAOAIQABAGABAGQAJALAMAJQAIAHAJAGQACABACAAIAEAPQAEADAEADQAOAIAQAMQAGAOAGANQAeAYAfAXQAaAnArAbQACAJACAIQAPAFAPAFQAFAFAFAFQgBABgCACQACABADABQADABAEABQAJAIAJAGQAEAEADADQADAFADAEQACAGACAFQAcAsARAuQABABABABQhUgBhTADQjBAJi+gJQiFgEiFAKIgBAA").cp();
	this.shape_210.setTransform(273.2,322.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.bf(img.Sand).s().p("AmfDbQAOgSAPgRQAbgiAdgfQA/hdBThHQASgQAVgOQAOgZAXgKQAEgKAGgIQAJgMAMgJQAOgLARgGQAKgDALgDQAKgfAcgOQACgBACAAQAOAHAPAIQABAHABAGQAJAMAMAIQAIAIAKAFQABABACABIAFAPQAEADAEADQAOAIAQAMQAGAOAHAOQAeAYAgAYQAaAnAsAcQACAJACAJQAPAFAPAFQAFAFAGAFQgCABgBACQACABACABQAEABADABQAJAIAKAHQADADAEAEQADAEADAFQACAGACAFQAeAtARAwQABAAABABQhVgBhVADQjEAJjBgIQiIgEiHAKIgBAA").cp();
	this.shape_211.setTransform(273.2,321.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.bf(img.Sand).s().p("AmmDgQAOgTAPgSQAcgiAdggQBAheBUhIQATgRAVgPQAOgZAXgKQAFgKAGgIQAJgNAMgJQAOgLARgGQAKgEAMgCQAKghAcgNQACgCADAAQAOAIAPAIQABAGABAHQAKAMAMAIQAIAIAJAGQACABACAAIAFAQQAEADAEADQAOAJARALQAGAPAHAOQAfAZAfAYQAbAoAtAcQACAJACAKQAPAEAQAFQAFAGAFAFQgCABgBACQACABADABQADABAEACQAJAHAJAHQAEAEAEADQADAFADAFQACAFACAGQAfAuASAxQABAAABABQhWgBhXADQjHAKjFgJQiKgEiJALIgBAA").cp();
	this.shape_212.setTransform(273.2,321.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.bf(img.Sand).s().p("AmtDkQAOgTAPgSQAcgjAeggQBBhgBWhKQATgQAVgQQAPgZAXgLQAFgKAGgIQAJgNAMgJQAOgMASgGQAKgEAMgCQAKgiAcgOQADgBACAAQAPAHAPAJQABAGABAHQAKAMAMAJQAIAIAKAFQACACACAAIAEAPQAFAEAFADQAOAJAQAMQAHAOAHAPQAfAZAgAYQAcAqAtAcQACAKABAJQAQAFAQAFQAFAGAFAEQgBACgCACQADABACABQAEABADACQAKAIAJAGQAEAEAEAEQADAFADAFQADAFABAGQAhAvASAyQABABABAAQhXAAhYACQjLAKjIgIQiNgFiMALIAAAA").cp();
	this.shape_213.setTransform(273.2,321);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.bf(img.Sand).s().p("Am1DpQAPgUAPgSQAdgkAeghQBChiBXhKQATgRAWgQQAPgaAYgLQAFgKAFgIQAKgOAMgJQAOgMASgGQALgEAMgDQAKgiAdgOQACgCADAAQAPAIAPAJQABAGABAHQAKAMAMAJQAIAIALAGQACABACABIAEAPQAFADAFAEQAOAJARAMQAHAPAGAPQAgAZAhAZQAcAqAuAdQABAKACAKQAQAFAQAFQAFAFAGAFQgCACgCACQADABACABQAEACAEABQAKAIAJAHQAEAEAEADQADAFADAFQADAGACAGQAhAwAUAzQABABABABQhagBhZADQjOAKjMgJQiPgEiOALIgBAA").cp();
	this.shape_214.setTransform(273.2,320.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.bf(img.Sand).s().p("Am8DtQAPgTAPgTQAdglAfghQBDhkBZhMQATgRAWgQQAPgbAYgLQAFgKAGgJQAKgNAMgKQAPgMASgHQALgEAMgCQAKgjAdgPQACgBADAAQAPAIAQAIQABAHABAHQAKANANAJQAIAIAKAGQACABADAAIAEAQQAFADAFAEQAOAJASAMQAGAQAHAPQAgAZAiAaQAcArAvAeQABAJACAKQAQAFAQAGQAGAFAFAFQgBACgCACQACABADABQAEACADABQAKAIAKAHQAEAEAEAEQADAFADAFQADAGACAGQAiAxAVA0QABABABABQhbgBhbADQjRALjPgKQiSgEiQALIgBAA").cp();
	this.shape_215.setTransform(273.2,320.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.bf(img.Sand).s().p("AnDDyQAPgUAPgTQAegmAfgiQBFhlBZhNQAUgSAXgQQAPgbAYgLQAFgLAGgJQAKgOAMgKQAPgMASgHQALgEANgCQAKgkAegPQACgCADAAQAPAIAQAJQABAHABAHQAKANANAJQAIAIALAGQACABACABIAFAQQAFADAFAEQAPAJARANQAHAPAHAPQAhAbAhAaQAdAsAvAeQACAKABAKQARAFARAFQAFAGAGAFQgCACgCACQADABACABQAEACAEABQAKAJAKAHQAEAEAEAEQADAFADAFQADAGACAGQAkAyAVA2QABAAABABQhcgBhcADQjWALjSgJQiUgFiSAMIgBAA").cp();
	this.shape_216.setTransform(273.2,319.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.bf(img.Sand).s().p("AnKD2QAOgUAQgTQAegnAggjQBGhmBbhPQAUgSAXgQQAPgcAZgLQAFgLAGgJQAJgOANgKQAPgNATgHQALgEANgDQAKgkAegQQACgBADAAQAQAIAQAJQABAHABAHQAKANANAKQAJAIALAGQACABACAAIAFARQAFADAFAEQAPAJASANQAHAQAHAPQAhAbAiAaQAdAuAwAeQACAKABAKQARAGARAFQAFAGAGAFQgCACgCACQADABADABQAEACAEABQAKAJAJAHQAFAEAEAEQADAFAEAGQACAGACAGQAlAzAWA3QABABABAAQhdAAheADQjZALjVgKQiXgEiVALIAAAA").cp();
	this.shape_217.setTransform(273.2,319.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.bf(img.Sand).s().p("AnSD7QAPgVAQgUQAfgnAggjQBHhoBchQQAUgTAYgQQAPgdAZgLQAGgLAGgJQAJgPANgKQAPgNAUgHQALgEANgDQAKgmAfgPQACgCADAAQAQAIAQAJQABAIABAHQAKANANAKQAJAIAMAGQACACACAAIAFARQAFADAFAEQAPAJATANQAGAQAHAQQAiAbAjAbQAdAvAxAeQABALACAKQARAFARAGQAGAGAFAFQgBACgCACQACABADABQAEACAEABQAKAJAKAIQAFAEAEAEQADAFAEAFQACAHADAGQAlA0AYA4QABABABABQhggBhfADQjcALjZgJQiYgFiYAMIgBAA").cp();
	this.shape_218.setTransform(273.3,318.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.bf(img.Sand).s().p("AnZEAQAPgWAQgUQAfgnAhglQBIhqBehRQAUgTAYgRQAQgcAZgMQAFgLAHgKQAJgOANgLQAQgMATgIQALgFAOgCQAKgnAfgQQACgCADAAQARAJAQAJQABAHABAIQAKAOAOAJQAJAJALAGQACABADABIAFARQAFADAFAEQAQAJASANQAHARAHAQQAjAcAjAbQAdAwAyAeQABALACALQARAFASAGQAFAGAGAFQgCACgCACQADABADABQAEACAEACQAKAJAKAHQAFAFAEADQADAGAEAFQACAGADAHQAnA1AYA5QABABABABQhhgBhgADQjgAMjcgKQibgFiaANIgBAA").cp();
	this.shape_219.setTransform(273.3,318.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.bf(img.Sand).s().p("AngEEQAPgVARgVQAfgoAhgmQBJhrBfhTQAVgTAYgRQAQgdAagMQAFgLAGgKQAKgOANgLQAQgNAUgJQALgEAOgDQAKgnAggRQACgBADAAQAQAIARAKQABAHABAIQAKAOAOAKQAJAJAMAGQACABADAAIAFASQAFADAFAEQAQAJATAOQAHAQAHARQAjAcAkAcQAdAxAzAfQABAKACALQARAGASAFQAFAHAGAFQgCACgCACQADABADABQAEACAEACQALAJAKAIQAEAEAFAEQADAFAEAGQADAGACAHQAoA2AZA7QABAAABABQhigBhiAEQjjALjggKQidgFicANIgBAA").cp();
	this.shape_220.setTransform(273.3,317.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.bf(img.Sand).s().p("AnoEJQAQgWARgVQAfgpAigmQBLhtBghUQAVgTAYgSQAQgeAagMQAGgLAGgKQAKgPAOgLQAPgNAUgJQAMgEANgDQALgoAggRQACgCADAAQARAJARAKQABAHABAIQAKAOAOAKQAKAJAMAGQACACACAAIAGARQAFAEAFAEQAQAJATAOQAHARAHARQAkAcAkAcQAeAzAzAfQACALABALQASAFASAGQAGAGAGAGQgCACgCACQADABACABQAFACAEACQAKAJALAIQAEAFAFADQADAGAEAGQADAGACAHQAqA3AZA8QABABACAAQhkAAhkADQjmAMjjgKQiggFieANIgCAA").cp();
	this.shape_221.setTransform(273.3,317.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.bf(img.Sand).s().p("AnvENQAQgWARgVQAggqAignQBMhuBhhWQAWgTAYgSQAQgeAbgMQAFgMAHgKQAKgPAOgMQAQgNAUgJQAMgEANgDQALgpAggSQADgBADAAQARAIARAKQABAIABAIQAKAOAPALQAJAJAMAGQACABADAAIAFASQAGAEAFAEQARAJATAOQAHARAHARQAkAeAlAcQAfAzAzAgQACALABALQASAGASAGQAGAGAGAGQgCACgCACQADABADACQAEABAEACQALAKAKAIQAFAEAFAEQADAGAEAFQADAHACAHQArA4AaA9QABABACABQhlgBhmADQjpAMjngKQiigFihANIgBAA").cp();
	this.shape_222.setTransform(273.3,317.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.bf(img.Sand).s().p("An2ESQAQgXARgWQAggqAjgoQBNhvBjhXQAVgUAZgSQARgfAbgMQAFgMAHgLQAKgPAOgLQAQgOAUgJQAMgFAOgDQALgqAhgRQACgCADAAQASAJARAKQABAIABAIQALAPAOAKQAKAJAMAGQACACADAAIAFASQAGAEAGAEQAQAJAUAPQAHARAHARQAlAeAlAdQAfA0A0AgQABALACAMQASAGATAGQAFAGAGAGQgBACgDACQADACADABQAFABAEACQALAKAKAIQAFAFAFAEQADAFAEAGQADAHADAHQArA6AcA9QABABABABQhngBhmAEQjtAMjrgKQikgGijAOIgBAA").cp();
	this.shape_223.setTransform(273.3,316.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.bf(img.Sand).s().p("An9EWQAQgXARgWQAhgrAigoQBPhyBkhYQAWgUAagSQAQggAbgMQAGgMAHgLQAKgPAOgMQAQgOAVgJQAMgFAOgDQALgrAhgSQADgBADAAQARAJASAKQABAIABAIQALAPAOALQAKAJANAGQACABADABIAFASQAGADAGAEQAQAKAUAPQAHASAIARQAlAeAmAeQAfA0A1AhQABAMACALQASAGATAGQAGAHAGAGQgCACgCACQADACADABQAEACAEABQALAKALAJQAFAEAFAEQADAGAEAGQADAHADAHQAtA7AcA+QABABABABQhogBhoAEQjxANjtgLQingFilANIgBAA").cp();
	this.shape_224.setTransform(273.3,316.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.bf(img.Sand).s().p("AoFEbQARgYARgWQAhgsAjgpQBQhzBlhZQAXgVAagSQAQggAcgNQAGgMAGgLQALgQAOgMQAQgOAWgJQAMgFAOgEQALgrAigSQACgCAEAAQARAJASAKQABAJABAIQALAPAPALQAKAJAMAHQADABADAAIAFATQAGADAGAEQARAKAUAPQAHASAHASQAmAeAmAeQAgA2A2AhQABAMABAMQATAGATAGQAGAHAGAGQgCACgCADQADABADABQAFACAEABQALALALAIQAFAFAFAEQADAFAEAHQADAHADAHQAuA8AdBAQABABACAAQhqAAhqADQj0ANjxgLQipgFinAOIgCAA").cp();
	this.shape_225.setTransform(273.3,315.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.bf(img.Sand).s().p("AoMEgQARgYARgXQAigtAjgqQBSh0BmhbQAXgVAagTQARggAcgNQAFgMAHgLQALgQAOgMQARgPAVgKQANgFAOgDQALgsAigTQADgCADAAQASAKASAKQABAIABAJQALAPAPALQAKAKANAGQACACADAAIAGATQAGADAGAEQARALAVAOQAHATAHASQAmAfAnAeQAgA3A2AiQACAMABALQATAHATAGQAGAHAHAGQgCACgDADQADABAEABQAEACAEACQAMAKALAIQAFAFAFAEQADAGAEAGQAEAHACAIQAvA9AeBBQABABACABQhrgBhrAEQj4ANj0gLQisgGiqAPIgBAA").cp();
	this.shape_226.setTransform(273.4,315.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.bf(img.Sand).s().p("AoTEkQARgYARgXQAiguAkgqQBTh2BnhcQAYgWAagTQARghAcgNQAGgMAHgLQALgRAOgMQARgPAWgKQAMgFAPgDQAKgtAkgTQACgCAEAAQASAJASALQABAIAAAJQAMAQAPALQALAJANAHQACABADAAIAGAUQAGADAGAEQARALAVAPQAHASAIATQAnAfAnAfQAgA3A3AjQACAMABAMQATAGAUAHQAGAHAGAGQgCACgCADQADABADABQAFACAEACQALAKAMAJQAFAFAEAEQAEAGAEAGQAEAHADAIQAwA+AeBCQACABABABQhsgBhtAEQj7ANj4gLQiugFisAOIgBAA").cp();
	this.shape_227.setTransform(273.4,314.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.bf(img.Sand).s().p("AoaEpQARgZARgYQAjguAkgrQBUh4BphdQAXgWAbgTQARghAdgNQAGgNAHgMQALgQAOgNQARgPAWgKQANgFAPgEQAKgtAkgUQADgCADAAQASAKATALQABAIAAAJQAMAQAPALQALAKAOAGQACACADAAIAGAUQAGADAGAEQASALAVAPQAHATAIATQAnAfAoAgQAgA4A4AjQABAMACANQATAGAUAGQAGAHAHAHQgDACgCADQADABADABQAFACAFACQALAKALAJQAGAFAEAEQAEAGAEAHQAEAHADAIQAxA/AgBDQABABABABQhugBhuAEQj+AOj7gMQiwgFivAPIgBAA").cp();
	this.shape_228.setTransform(273.4,314.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.bf(img.Sand).s().p("AoiEtQASgZASgYQAigvAlgsQBVh5BqhfQAYgVAbgUQARgiAdgNQAGgNAIgMQALgRAOgNQASgPAWgKQANgFAPgEQAKgvAkgTQADgCAEAAQASAJATALQABAJAAAJQAMAQAQAMQALAJANAHQADABADABIAGATQAGAEAGAEQASALAVAPQAIATAHATQAoAhAoAgQAhA5A5AjQABANABAMQAUAHAUAGQAGAHAHAHQgCACgDADQAEABADABQAEACAFACQAMALALAJQAFAFAFAEQAEAGAEAGQAEAIADAIQAzBAAgBFQABAAACABQhwAAhwAEQkBANj/gLQiygGixAPIgCAA").cp();
	this.shape_229.setTransform(273.4,314);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.bf(img.Sand).s().p("AopEyQARgaATgYQAjgwAlgsQBXh7BrhgQAYgWAbgUQASgjAdgNQAGgOAHgLQALgRAPgNQASgQAWgKQANgGAQgDQAKgwAlgUQADgCADAAQATAKATALQABAJAAAJQAMAQAQAMQALAKAOAHQACABADAAIAHAUQAGAEAGAEQASALAWAQQAHATAIATQAoAhApAgQAhA6A6AkQABANABANQAUAGAUAHQAHAHAGAHQgCACgCADQADABADABQAFACAFACQALALAMAJQAFAFAFAEQAEAHAEAGQAEAIADAIQA0BBAhBGQABABACABQhxgBhxAEQkFAOkCgMQi1gFi0APIgBAA").cp();
	this.shape_230.setTransform(273.4,313.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.bf(img.Sand).s().p("AowE2QARgZATgZQAjgxAmgtQBYh8BshiQAZgWAbgUQASgjAegOQAGgOAHgLQALgSAPgNQASgQAXgKQANgGAQgEQAKgwAlgVQADgBAEAAQATAKATALQABAJAAAJQAMARAQAMQAMAJAOAHQACACADAAIAHAUQAGAEAGAEQATALAWAQQAHAUAIATQApAhApAhQAhA7A7AlQABAMABANQAUAHAVAHQAGAHAHAHQgDACgCADQADABAEABQAEACAFACQAMALAMAKQAFAFAFAEQAEAGAEAHQAEAIAEAIQA0BCAiBHQACABABABQhygBhzAEQkIAPkGgMQi3gGi2APIgBAA").cp();
	this.shape_231.setTransform(273.4,313.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.bf(img.Sand).s().p("Ao3E7QARgaATgZQAkgyAmgtQBZh+BuhjQAYgXAdgUQARgkAegOQAHgOAHgMQALgRAPgOQASgQAXgLQAOgFAQgEQAKgxAmgVQADgCADAAQATAKAUALQAAAKABAJQAMARARAMQALAKAOAHQADABADAAIAGAVQAHAEAGAEQATALAWAQQAIAUAIAUQApAiAqAhQAiA7A6AmQABANACANQAUAHAVAGQAGAIAHAHQgCACgDADQAEABADABQAFACAFACQAMAMAMAJQAFAFAFAFQAEAGAEAHQAEAIAEAIQA2BDAjBIQABABABABQh0gBh0AFQkMAOkIgMQi6gGi4AQIgBAA").cp();
	this.shape_232.setTransform(273.4,312.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.bf(img.Sand).s().p("Ao/FAQASgbATgaQAkgyAnguQBaiABvhkQAZgXAdgVQASgkAegOQAGgOAIgMQALgSAPgNQATgRAXgLQAOgGAQgDQAKgyAmgWQADgCAEAAQATALAUALQAAAJABAKQAMARARAMQALALAPAGQADACADAAIAGAVQAHAEAHAEQASALAXAQQAIAVAHAUQAqAiArAiQAiA8A7AmQABANABANQAVAHAVAHQAHAIAHAHQgDACgDADQAEABAEABQAEADAFABQANAMALAKQAGAFAFAEQAEAHAEAGQAFAJADAIQA3BEAkBJQABABACABQh2AAh1AEQkQAPkMgNQi8gFi6AQIgCAA").cp();
	this.shape_233.setTransform(273.4,312.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.bf(img.Sand).s().p("ApGFEQASgbATgaQAlgzAngvQBbiBBxhlQAZgYAdgVQASgkAfgOQAGgPAIgMQALgSAQgOQASgRAYgLQANgGAQgEQALgyAngWQACgCAEAAQAUAKAUAMQAAAJABAKQAMARARANQAMAKAPAHQACABAEABIAGAVQAHAEAHAEQATALAWARQAIAUAIAVQAqAiArAiQAjA+A8AmQABAOABANQAVAHAVAHQAHAIAHAHQgCACgDADQADABAEACQAFACAFACQAMALAMAKQAGAFAFAFQAEAGAFAHQAEAIADAJQA5BFAkBLQABABACABQh3gBh3AEQkTAPkQgMQi+gGi9AQIgBAA").cp();
	this.shape_234.setTransform(273.4,311.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.bf(img.Sand).s().p("ApNFJQASgcATgaQAlg0AogvQBdiDBxhnQAagYAdgVQASglAfgOQAHgPAHgMQAMgTAQgOQASgRAYgLQAOgGAQgEQALg0AogWQACgCAEAAQAUALAUAMQAAAJABAKQANASAQAMQAMALAPAHQADABADAAIAHAWQAHADAHAFQATALAXARQAIAVAIAUQArAjArAjQAjA+A9AnQABAOABAOQAVAHAWAHQAGAHAHAIQgCACgDADQAEABADACQAFACAFACQANAMAMAKQAGAFAFAEQAEAHAFAHQAEAIAEAJQA5BGAlBMQACABABABQh4gBh5AFQkWAPkTgNQjBgGi/ARIgBAA").cp();
	this.shape_235.setTransform(273.5,311.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.bf(img.Sand).s().p("ApVFNQATgcATgaQAmg1AogwQBeiEBzhoQAagYAdgWQATgmAfgOQAGgPAIgMQAMgTAQgOQATgSAYgLQAOgGAQgEQALg1ApgWQABgCAEAAQAUAKAVAMQAAAKABAKQANASARANQAMAKAPAHQADACADAAIAHAVQAHAEAHAFQATALAYARQAIAVAIAVQArAkAsAjQAjA/A+AnQABAOAAAOQAWAHAWAHQAHAIAHAIQgDACgDADQAEABAEACQAFACAFACQANAMAMAKQAGAFAFAFQAEAHAFAHQAEAIAEAJQA6BHAmBNQACABACABQh6gBh6AFQkaAPkXgMQjDgGjBAQIgCAA").cp();
	this.shape_236.setTransform(273.5,310.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.bf(img.Sand).s().p("ApcFSQATgcATgbQAmg1AogyQBgiGB0hpQAagYAegWQATgmAggPQAGgPAIgNQAMgTAQgOQATgSAYgLQAPgHAQgEQALg1AqgXQABgCAEAAQAUALAVAMQAAAKABAKQANASARANQAMALAQAHQADABADAAIAHAWQAHAEAHAFQAUALAXARQAIAWAIAVQAsAkAtAkQAjA/A+ApQABAOABAOQAWAHAWAHQAHAIAHAIQgCACgDADQADABAEACQAFACAGACQAMAMANALQAGAFAFAEQAEAHAFAHQAEAJAEAJQA8BJAnBNQABABACABQh8AAh7AEQkdAQkagNQjGgGjDARIgCAA").cp();
	this.shape_237.setTransform(273.5,310.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.bf(img.Sand).s().p("ApjFWQATgcAUgbQAmg2AogyQBhiIB2hrQAagYAegWQATgnAggPQAHgPAIgNQAMgTAQgPQATgSAZgMQAOgGARgEQALg2AqgXQABgCAEAAQAVAKAVANQAAAKABAKQANASARAOQANAKAQAHQACACAEAAIAHAWQAHAEAHAFQAUALAYASQAIAVAIAWQAtAkAsAkQAkBBA/ApQABAOABAOQAWAIAXAHQAGAIAIAHQgDADgDADQAEABAEACQAFACAFACQANANANAKQAFAFAGAFQAEAHAFAHQAEAJAEAJQA9BKAoBPQABABACABQh9gBh9AFQkgAQkegOQjHgGjHARIgBAA").cp();
	this.shape_238.setTransform(273.5,310);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.bf(img.Sand).s().p("ApqFbQATgdAUgcQAmg2ApgzQBiiJB3hsQAbgZAegXQATgnAhgPQAHgPAIgNQAMgUAQgPQATgSAZgMQAPgGARgEQALg3ArgYQABgCAEAAQAVALAVAMQAAAKABALQANATASANQAMALAQAHQADACAEAAIAHAWQAHAEAHAFQAUAMAZARQAIAWAIAWQAtAlAtAkQAkBCBAApQABAOABAPQAWAHAXAIQAHAIAHAHQgDADgDADQAEABAEACQAFACAGACQANANAMAKQAGAGAGAEQAEAIAFAHQAFAJAEAJQA9BLApBQQACABABABQh+gBh/AFQkjAQkhgNQjKgGjJARIgBAA").cp();
	this.shape_239.setTransform(273.5,309.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.bf(img.Sand).s().p("ApyFgQAUgeAUgcQAng3Apg0QBkiKB4huQAbgZAfgXQATgnAhgPQAGgQAIgNQANgUAQgPQAUgTAZgMQAPgGARgFQALg3ArgYQACgDADAAQAVAMAWAMQAAAKABALQANATASANQANALAQAIQADABADAAIAIAXQAHAEAHAFQAVAMAYARQAIAXAJAWQAtAlAuAlQAkBCBBAqQABAPABAOQAWAIAXAHQAHAJAHAHQgCADgDADQAEACAEABQAFACAFACQANANANALQAGAFAGAFQAEAHAFAIQAFAJAEAJQA/BMApBRQACABACABQiAgBiAAFQkoARkkgOQjMgGjLASIgCAA").cp();
	this.shape_240.setTransform(273.5,309.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.bf(img.Sand).s().p("Ap5FkQAUgeAUgcQAng4Aqg0QBliMB5hvQAbgaAggXQATgoAhgPQAHgQAIgOQANgUAQgPQAUgTAZgMQAPgHASgEQALg5AsgYQACgCADAAQAVALAWANQAAAKABALQANATASAOQANALARAHQADACADAAIAHAXQAIAEAHAFQAVAMAZASQAIAWAIAWQAuAmAvAmQAlBDBBAqQAAAPABAPQAXAIAXAHQAHAJAIAHQgDADgDADQAEACAEABQAFACAGADQANAMANALQAGAGAGAFQAEAHAFAHQAFAJAEAKQBABNArBSQABABACABQiCAAiBAFQkrAQkngNQjPgHjNASIgCAA").cp();
	this.shape_241.setTransform(273.5,308.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.bf(img.Sand).s().p("AqAFpQAUgeAUgdQAog5Aqg1QBmiOB7hwQAbgaAggXQATgpAigPQAHgQAIgOQANgUAQgQQAUgTAagMQAPgHASgFQALg5AsgZQADgCACAAQAWAMAWANQAAAKABALQANATASAOQAOALAQAIQADABAEAAIAHAYQAIAEAHAFQAVAMAZASQAJAXAIAWQAvAnAuAlQAmBFBBArQABAPABAPQAXAHAYAIQAHAIAHAIQgDADgDADQAEACAEABQAGACAFADQAOANANALQAGAFAGAFQAEAHAFAIQAFAJAEAKQBCBOArBTQABACACABQiDgBiDAFQkuARkrgOQjRgHjQATIgBAA").cp();
	this.shape_242.setTransform(273.5,308.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.bf(img.Sand).s().p("AqHFtQATgeAVgdQAog6Arg2QBniPB8hxQAcgbAggXQAUgpAigQQAHgQAIgOQAMgVARgPQAUgUAbgMQAPgHASgFQALg6AtgZQADgCACAAQAWALAWANQAAALABALQANAUATAOQANALARAHQADACAEAAIAHAYQAIAEAIAFQAVAMAZASQAIAXAJAXQAvAnAvAmQAmBFBCAsQABAPABAPQAXAIAYAIQAHAIAIAIQgDADgDADQAEACAEABQAFADAGACQANANAOALQAGAGAGAFQAEAHAFAIQAFAJAFAKQBCBPAsBVQACABABABQiEgBiEAFQkyARkugOQjUgGjSASIgBAA").cp();
	this.shape_243.setTransform(273.6,307.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.bf(img.Sand).s().p("AqPFyQAUgfAVgeQApg6Arg2QBoiRB+hzQAcgaAggYQAUgqAigQQAHgQAJgOQAMgVARgQQAVgUAagNQAQgHASgEQALg7AtgaQADgCACAAQAWAMAXANQAAALABAKQANAVATAOQAOALARAIQADACAEAAIAHAXQAIAFAIAEQAVANAaASQAIAYAJAXQAvAnAwAnQAmBGBDAsQABAPABAQQAXAHAYAIQAHAJAIAIQgDADgDADQAEACAEABQAGADAFACQAOANANAMQAHAFAGAFQAEAIAFAIQAFAJAFAJQBDBRAtBWQACABACABQiGgBiGAFQk1ASkygOQjWgHjUATIgCAA").cp();
	this.shape_244.setTransform(273.6,307.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.bf(img.Sand).s().p("AqWF3QAUggAVgeQApg7Asg3QBqiSB+h0QAdgbAggYQAUgrAjgQQAHgQAIgPQANgVARgQQAVgUAbgNQAPgHATgFQALg7AtgaQAEgDACAAQAWAMAXAOQAAALABAKQANAVATAOQAOAMARAIQADABAEAAIAIAYQAIAEAIAFQAVANAaATQAJAXAIAYQAwAnAxAoQAmBGBEAtQABAQAAAPQAYAIAYAIQAIAJAIAIQgDADgEADQAEACAFABQAFADAGACQAOAOANALQAHAGAGAFQAEAHAFAIQAFAKAFAJQBFBSAtBXQACABACABQiHAAiIAFQk4ASk2gPQjYgHjWAUIgCAA").cp();
	this.shape_245.setTransform(273.6,307);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.bf(img.Sand).s().p("AqdF7QAUggAVgeQAqg8Asg4QBriTB/h2QAdgbAhgZQAVgqAjgQQAHgRAIgPQANgVARgQQAVgVAbgNQAQgHATgFQALg8AugbQADgCADAAQAWAMAXANQAAALABALQAOAVATAPQAOALARAIQADACAEAAIAIAYQAIAEAIAFQAWANAaATQAIAYAJAYQAxAoAxAnQAmBIBFAtQAAAQABAQQAYAIAZAIQAHAJAIAIQgDADgDADQAEACAEABQAGADAFACQAOAOAOAMQAHAFAGAFQAEAIAFAIQAGAKAEAJQBGBTAvBYQABACACABQiJgBiJAFQk7ASk5gOQjbgHjZATIgBAA").cp();
	this.shape_246.setTransform(273.6,306.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.bf(img.Sand).s().p("AqkGAQAUghAWgeQApg9Atg4QBsiWCBh3QAdgbAhgZQAVgrAjgQQAHgRAJgPQANgWARgQQAWgVAbgNQAQgHATgFQALg+AugaQAEgDACAAQAXAMAXAOQAAALABALQAOAWATAOQAOAMASAIQADABAEABIAIAYQAIAEAIAFQAWANAbATQAIAYAJAZQAxAoAxAoQAnBJBFAtQABAQABAQQAYAIAZAJQAHAJAIAIQgDADgDADQAEACAFACQAFACAGACQAOAOAOAMQAGAGAHAFQAEAIAFAIQAGAKAEAJQBHBUAwBaQABABACABQiKgBiKAFQk/ATk9gPQjdgHjbAUIgBAA").cp();
	this.shape_247.setTransform(273.6,306.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.bf(img.Sand).s().p("AqsGEQAVggAWgfQAqg+Atg5QBtiXCCh4QAegcAigZQAUgsAkgQQAHgRAJgPQANgWASgRQAVgVAbgNQARgIASgFQALg+AwgbQADgCADAAQAWAMAYAOQAAALAAALQAPAWATAPQAPAMASAHQADACAEAAIAIAZQAIAEAIAFQAWANAbAUQAJAYAJAYQAxApAyApQAnBJBGAvQABAQABAQQAYAIAZAIQAIAKAIAIQgDADgEADQAFACAEACQAGACAGADQAOAOAOAMQAGAFAGAGQAFAHAFAJQAGAJAFAKQBIBVAwBbQACABACABQiMgBiMAGQlDASk/gPQjfgHjeAUIgCAA").cp();
	this.shape_248.setTransform(273.6,305.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.bf(img.Sand).s().p("AqzGJQAVghAWggQAqg+Atg5QBwiZCDh6QAegcAigZQAUgsAlgRQAHgRAJgPQANgXASgRQAVgVAcgNQAQgIATgFQALg/AwgbQAEgDADAAQAWANAYAOQAAALAAALQAPAWATAPQAPAMASAIQADACAEAAIAJAZQAIAEAIAFQAXANAbAUQAIAZAJAYQAyAqAzApQAnBKBHAvQABAQAAARQAZAIAZAIQAIAJAIAJQgDADgDADQAEACAEACQAGACAGADQAOAOAPAMQAGAGAGAFQAFAIAFAIQAGAKAFAKQBJBWAxBcQACABACABQiNAAiOAFQlGATlDgPQjhgHjgAUIgCAA").cp();
	this.shape_249.setTransform(273.6,305.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.bf(img.Sand).s().p("Aq6GNQAVghAWggQArg/Atg6QBxiaCEh7QAegdAjgZQAVgtAkgRQAIgRAIgQQAOgWASgRQAVgWAcgOQARgHATgFQALhAAxgcQADgCAEAAQAWAMAYAOQAAAMAAALQAPAWAUAQQAPAMASAIQADABAEAAIAIAaQAJAEAIAFQAXANAbAUQAJAZAJAZQAzAqAzAqQAoBLBHAvQAAARABAQQAZAIAaAJQAHAJAJAJQgEADgDAEQAEABAFACQAGACAGADQAOAOAOAMQAHAGAGAGQAFAIAFAIQAGAKAFAKQBLBXAyBdQABABACACQiPgBiOAFQlKATlGgPQjkgHjjAUIgBAA").cp();
	this.shape_250.setTransform(273.6,304.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.bf(img.Sand).s().p("ArBGSQAVgiAWggQArhAAug7QByicCGh8QAegcAjgaQAVguAlgRQAHgRAJgQQAOgXASgRQAWgWAcgOQARgIATgFQALhAAxgcQADgDAFAAQAWANAYAOQAAAMAAALQAPAXAUAPQAPAMATAIQADACAEAAIAIAZQAJAFAIAFQAXANAcAUQAJAaAJAZQAzAqAzAqQApBMBIAwQAAARABARQAZAIAaAJQAIAJAIAJQgDADgEAEQAFABAEACQAGACAGADQAPAPAOAMQAHAGAGAFQAFAIAGAJQAFAKAFAKQBMBZAzBdQABACACABQiQgBiQAGQlNATlKgPQjmgIjlAVIgBAA").cp();
	this.shape_251.setTransform(273.6,304.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.bf(img.Sand).s().p("ArJGXQAWgjAWggQAshBAug7QBzieCHh9QAfgdAjgaQAVguAmgRQAHgTAJgPQAOgXASgSQAWgWAdgOQAQgIAUgFQALhCAygcQADgDAFAAQAVANAZAPQAAAMAAALQAPAXAUAPQAPANATAIQAEABAEABIAIAZQAJAFAIAFQAYAOAcAUQAJAZAJAaQAzAqA0ArQApBNBJAwQAAARABARQAZAJAaAIQAIAKAIAJQgDADgEAEQAFABAFACQAGADAGACQAPAPAOAMQAHAHAGAFQAFAIAGAIQAGALAFAKQBMBaA0BfQACABACABQiSgBiSAGQlQAUlNgQQjpgHjnAVIgCAA").cp();
	this.shape_252.setTransform(273.7,303.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.bf(img.Sand).s().p("ArQGbQAWgiAWghQAshCAvg8QB0ifCJh/QAfgdAjgbQAWguAlgRQAIgTAJgPQAOgXASgSQAWgXAdgOQARgIAUgFQALhDAygdQADgCAFAAQAWANAZAOQAAAMAAAMQAPAXAVAQQAPAMATAIQADACAFAAIAIAaQAJAFAJAFQAXAOAcAUQAJAaAJAaQA1ArA0ArQApBNBJAyQABARAAARQAaAIAbAJQAHAKAJAJQgDADgEAEQAEABAFACQAGADAGACQAPAPAPANQAHAGAGAFQAFAJAGAIQAGALAFAKQBOBbA0BgQACABACABQiTAAiTAFQlUAUlRgQQjrgHjpAVIgCAA").cp();
	this.shape_253.setTransform(273.7,303.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.bf(img.Sand).s().p("ArXGgQAWgjAWgiQAthCAvg9QB2igCJiAQAggeAjgbQAWguAmgSQAHgTAKgQQAOgXASgSQAXgXAdgOQARgIAUgGQALhDAygdQAEgDAFAAQAWANAZAPQAAAMAAAMQAPAXAVAQQAPANAUAIQADACAEAAIAJAaQAJAFAJAFQAXAOAdAUQAJAaAJAaQA1AsA1AsQApBOBKAyQABARAAARQAaAJAbAJQAIAKAIAJQgDADgEAEQAFABAFACQAGADAGACQAPAPAPANQAHAHAGAFQAFAIAGAJQAGALAFAKQBPBcA1BhQACABACACQiUgBiVAGQlXAUlUgQQjugIjsAWIgBAA").cp();
	this.shape_254.setTransform(273.7,303);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.bf(img.Sand).s().p("ArfGkQAXgjAXgiQAshCAwg+QB3iiCLiCQAfgeAkgbQAWgvAmgSQAIgTAKgQQAOgXASgTQAXgXAdgPQASgIAUgFQALhEAzgeQADgCAFAAQAXANAZAPQAAAMAAAMQAPAYAVAQQAQAMATAJQAEABAEAAIAJAbQAJAEAJAGQAYAOAcAVQAKAaAJAaQA1AsA1AsQAqBQBLAyQAAARABASQAaAJAbAJQAIAKAJAJQgEADgEAEQAFABAFACQAGADAGACQAQAQAOANQAHAGAHAFQAFAJAGAJQAGALAFAKQBRBdA2BiQABACADABQiXgBiWAGQlaAUlYgQQjwgHjuAVIgCAA").cp();
	this.shape_255.setTransform(273.7,302.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.bf(img.Sand).s().p("ArmGpQAWgkAYgiQAthDAwg/QB4ikCMiDQAggeAlgbQAVgwAngSQAIgTAJgQQAOgYATgSQAXgYAegPQARgIAVgGQALhEAzgeQAEgDAFAAQAWAOAaAPQAAAMAAAMQAPAYAWAQQAPANAUAIQAEACAEAAIAJAbQAJAEAJAGQAYAOAdAVQAJAbAKAaQA1AtA2AsQAqBQBMAzQAAASABARQAaAJAbAJQAIAKAJAKQgDADgEAEQAFACAEABQAHADAGADQAPAPAPANQAHAHAHAFQAFAIAGAJQAGALAGALQBRBeA3BkQACABACABQiYgBiYAGQleAVlagQQjzgIjwAWIgCAA").cp();
	this.shape_256.setTransform(273.7,302.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.bf(img.Sand).s().p("ArtGtQAWgkAYgiQAthEAxhAQB5ilCOiEQAggfAlgbQAWgwAngTQAIgTAJgQQAOgYATgTQAXgYAegPQASgIAVgGQALhFA0gfQADgCAFAAQAXANAaAPQAAANAAAMQAQAYAVARQAQAMAUAJQADACAFAAIAJAbQAJAEAJAGQAYAOAeAVQAJAbAJAbQA3AtA2AtQAqBRBNAzQAAASAAASQAbAJAcAJQAIAKAIAKQgDADgEAEQAFACAFABQAGADAGADQAQAPAPAOQAHAGAHAGQAFAIAGAJQAGALAGALQBSBfA4BlQACABACABQiZAAiZAGQliAUlegQQj1gIjyAWIgCAA").cp();
	this.shape_257.setTransform(273.7,301.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.bf(img.Sand).s().p("Ar0GyQAWglAYgiQAuhFAxhAQB6inCPiGQAhgfAlgbQAWgxAngSQAIgUAKgQQAOgZATgTQAYgYAegPQASgIAVgGQALhHA0geQAEgDAFAAQAXAOAaAPQAAANAAAMQAQAYAVARQAQANAVAIQADACAFAAIAJAcQAJAEAJAGQAZAOAdAVQAKAcAJAbQA3AtA3AuQAqBSBNAzQABATAAASQAbAJAcAJQAIAKAJAKQgEADgEAEQAFACAFABQAHADAGADQAQAQAPANQAHAHAHAFQAFAJAGAJQAGALAGALQBUBgA4BmQACABACACQiagBibAGQllAVligRQj2gHj2AWIgBAA").cp();
	this.shape_258.setTransform(273.7,301.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.bf(img.Sand).s().p("Ar8G3QAXglAYgkQAuhFAyhBQB8ioCQiHQAggfAmgcQAWgyAogSQAIgUAKgRQAOgYATgTQAYgZAegPQASgJAWgGQALhHA1gfQADgDAFAAQAYAOAaAQQAAANAAAMQAQAZAVAQQARANAUAJQAEACAEAAIAJAbQAKAFAJAGQAZAOAeAWQAJAbAKAcQA3AuA4AtQArBTBNA1QAAASABASQAbAJAcAKQAIAKAJAKQgDADgEAEQAFACAFACQAGACAHADQAPAQAQAOQAHAGAHAGQAFAIAGAKQAHALAFALQBVBhA6BnQABACADABQidgBicAGQloAWllgRQj5gIj4AXIgCAA").cp();
	this.shape_259.setTransform(273.7,300.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.bf(img.Sand).s().p("AsDG7QAXglAYgkQAvhGAyhCQB9iqCRiIQAhgfAmgdQAXgxAogTQAIgUAKgRQAOgZATgTQAYgZAfgPQASgJAWgGQALhIA1gfQAEgDAFAAQAXAOAbAQQAAAMAAANQAQAZAWARQAQANAVAIQAEACAEAAIAJAcQAKAFAJAGQAZAOAfAWQAJAcAKAcQA3AuA4AuQAsBUBOA1QAAASABATQAbAJAcAJQAJALAJAKQgEADgEAEQAFACAFACQAHACAGADQAQAQAPAOQAIAHAHAFQAFAJAGAJQAHAMAGALQBVBiA7BoQACACACABQiegBidAHQlsAVlpgRQj7gIj6AXIgCAA").cp();
	this.shape_260.setTransform(273.8,300.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.bf(img.Sand).s().p("AsKHAQAXgmAYgkQAvhHAzhCQB+isCTiJQAhggAmgdQAXgyAogTQAIgUAKgRQAPgZATgUQAZgZAfgQQASgIAWgGQALhJA1ggQAEgDAFAAQAYAOAbAQQAAANAAANQAQAZAWARQARAOAVAIQADACAFAAIAJAcQAKAFAJAGQAaAOAeAWQAKAcAJAcQA5AvA4AvQAsBUBPA2QAAATAAASQAcAKAdAJQAIALAJAKQgEADgEAEQAFACAGACQAGADAHACQAQARAPAOQAIAGAHAGQAFAJAGAJQAHAMAGALQBXBjA7BqQACABACABQifAAifAGQlvAWlsgSQj+gHj8AXIgCAA").cp();
	this.shape_261.setTransform(273.8,299.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.bf(img.Sand).s().p("AsRHEQAXgmAYgkQAwhIAyhDQCAitCUiLQAiggAmgdQAXgzApgTQAIgUAKgRQAPgaAUgUQAYgZAfgQQATgJAVgGQAMhJA2ggQAEgDAFAAQAYAOAbAQQAAANAAANQAQAZAWASQARANAVAJQAEACAFAAIAJAcQAKAFAJAGQAaAOAfAXQAJAcAKAcQA5AvA5AwQAsBVBQA2QAAATAAATQAcAJAdAKQAIALAKAJQgEAEgEAEQAFACAFACQAHADAGACQAQARAQAOQAIAHAHAFQAFAJAGAKQAHAMAGALQBYBkA8BrQACABACACQiggBihAGQlyAWlwgRQkAgIj/AXIgBAA").cp();
	this.shape_262.setTransform(273.8,299.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.bf(img.Sand).s().p("AsZHJQAYgnAYgkQAwhJAzhEQCBiuCWiMQAighAmgdQAYgzApgUQAIgUAKgSQAPgZAUgUQAYgaAggQQASgJAWgGQAMhKA2ghQAEgDAFAAQAZAOAbARQAAANAAANQAQAaAXARQARAOAVAIQAEACAFAAIAJAdQAKAFAKAGQAZAOAfAXQAKAcAKAdQA5AwA6AvQAsBXBQA2QABATAAATQAcAKAdAKQAJAKAJAKQgEAEgEAEQAFACAFACQAHADAHADQAQAQAQAOQAIAHAHAGQAFAJAGAKQAHALAGAMQBaBlA8BsQACACADABQiigBiiAHQl2AWlzgSQkDgIkBAYIgCAA").cp();
	this.shape_263.setTransform(273.8,299.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.bf(img.Sand).s().p("AsgHNQAYgmAZglQAwhKAzhEQCDiwCWiOQAighAogdQAXg0ApgTQAJgVAKgSQAPgaAUgUQAYgaAggQQATgJAWgGQAMhMA3ghQAEgCAFAAQAYAOAcAQQAAAOAAANQAQAaAXASQARANAWAJQAEACAEAAIAKAdQAKAFAKAFQAaAPAfAXQAKAdAKAdQA5AwA6AwQAtBXBRA4QAAATABATQAcAKAdAJQAJALAJAKQgDAEgFAEQAGACAFACQAHADAGADQARARAQAOQAHAHAIAGQAFAJAGAJQAHAMAHAMQBaBmA+BtQACACACABQikgBijAHQl6AWl2gRQkFgJkDAYIgCAA").cp();
	this.shape_264.setTransform(273.8,298.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.bf(img.Sand).s().p("AsnHSQAYgnAZgmQAwhKA0hFQCEiyCYiPQAighAogdQAXg1AqgTQAIgVALgSQAPgaAUgVQAZgaAggQQATgJAWgHQAMhMA3ghQAEgDAFAAQAZAPAcAQQAAAOAAANQAQAaAXASQASAOAVAIQAEACAFAAIAKAeQAKAFAKAFQAaAQAgAWQAJAeAKAdQA7AwA6AxQAtBYBSA4QAAATAAAUQAdAJAeAKQAIALAKAKQgEAEgEAEQAFACAFACQAHADAHADQAQARARAOQAHAHAIAGQAFAJAGAKQAIAMAGAMQBbBoA/BuQACABACABQilAAilAGQl9AXl5gSQkIgIkFAYIgCAA").cp();
	this.shape_265.setTransform(273.8,298.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.bf(img.Sand).s().p("AsuHXQAYgoAZgmQAxhLA0hFQCFi0CZiQQAjgiAogdQAXg1ArgUQAIgVAKgSQAQgbAUgUQAZgbAggQQAUgKAWgGQAMhNA4giQAEgDAFAAQAZAPAcARQAAAOAAANQAQAaAXASQASAOAWAJQAEACAFAAIAKAeQAKAEAKAGQAaAQAgAXQAKAdAKAeQA7AxA7AxQAtBZBTA4QAAAUAAATQAdAKAeAKQAJALAJAKQgEAEgEAEQAFACAGACQAHADAGADQARARAQAPQAIAHAIAGQAFAJAGAKQAIAMAGAMQBdBpA/BvQACABACACQimgBinAHQmAAXl9gTQkKgIkIAZIgBAA").cp();
	this.shape_266.setTransform(273.8,297.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.bf(img.Sand).s().p("As2HbQAZgoAZgmQAxhMA1hGQCGi1CbiSQAjghAogfQAYg1AqgUQAJgVAKgTQAQgaAUgVQAZgbAhgRQATgJAXgGQAMhOA4giQAEgDAFAAQAaAPAcARQAAANAAAOQAQAbAYASQASAOAWAJQAEACAFAAIAKAdQAKAFAKAGQAbAQAgAXQAKAeAKAdQA7AyA8AxQAtBaBUA5QAAAUAAAUQAdAKAeAKQAJALAKAKQgEAEgFAEQAGACAFACQAHADAHADQARARAQAPQAIAHAIAGQAFAKAGAKQAIAMAGAMQBeBqBABwQACACADABQiogBioAHQmEAXmAgSQkNgJkKAZIgCAA").cp();
	this.shape_267.setTransform(273.8,297.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.bf(img.Sand).s().p("AM+HEQiqgBipAHQmHAYmEgTQkQgIkNAZQAYgpAagmQCxkQDZjNQAjgiApgfQAYg2ArgUQAkhcBNgoQAUgJAXgHQALhOA5gjQAEgDAGAAQAZAPAcARIAAAcQAeAwAzAUQAEACAFAAIAKAeQAkASAsAgIAUA8IB4BkQAuBbBUA5IAAAoIA8AUQAKAMAJAKIgJAIIAZAKQAZAaAZAUQANAVAMAXQBfBrBBBxQACACADABIAAAA").cp();
	this.shape_268.setTransform(273.9,296.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169}]}).to({state:[{t:this.shape_170}]},dur).to({state:[{t:this.shape_171}]},dur).to({state:[{t:this.shape_172}]},dur).to({state:[{t:this.shape_173}]},dur).to({state:[{t:this.shape_174}]},dur).to({state:[{t:this.shape_175}]},dur).to({state:[{t:this.shape_176}]},dur).to({state:[{t:this.shape_177}]},dur).to({state:[{t:this.shape_178}]},dur).to({state:[{t:this.shape_179}]},dur).to({state:[{t:this.shape_180}]},dur).to({state:[{t:this.shape_181}]},dur).to({state:[{t:this.shape_182}]},dur).to({state:[{t:this.shape_183}]},dur).to({state:[{t:this.shape_184}]},dur).to({state:[{t:this.shape_185}]},dur).to({state:[{t:this.shape_186}]},dur).to({state:[{t:this.shape_187}]},dur).to({state:[{t:this.shape_188}]},dur).to({state:[{t:this.shape_189}]},dur).to({state:[{t:this.shape_190}]},dur).to({state:[{t:this.shape_191}]},dur).to({state:[{t:this.shape_192}]},dur).to({state:[{t:this.shape_193}]},dur).to({state:[{t:this.shape_194}]},dur).to({state:[{t:this.shape_195}]},dur).to({state:[{t:this.shape_196}]},dur).to({state:[{t:this.shape_197}]},dur).to({state:[{t:this.shape_198}]},dur).to({state:[{t:this.shape_199}]},dur).to({state:[{t:this.shape_200}]},dur).to({state:[{t:this.shape_201}]},dur).to({state:[{t:this.shape_202}]},dur).to({state:[{t:this.shape_203}]},dur).to({state:[{t:this.shape_204}]},dur).to({state:[{t:this.shape_205}]},dur).to({state:[{t:this.shape_206}]},dur).to({state:[{t:this.shape_207}]},dur).to({state:[{t:this.shape_208}]},dur).to({state:[{t:this.shape_209}]},dur).to({state:[{t:this.shape_210}]},dur).to({state:[{t:this.shape_211}]},dur).to({state:[{t:this.shape_212}]},dur).to({state:[{t:this.shape_213}]},dur).to({state:[{t:this.shape_214}]},dur).to({state:[{t:this.shape_215}]},dur).to({state:[{t:this.shape_216}]},dur).to({state:[{t:this.shape_217}]},dur).to({state:[{t:this.shape_218}]},dur).to({state:[{t:this.shape_219}]},dur).to({state:[{t:this.shape_220}]},dur).to({state:[{t:this.shape_221}]},dur).to({state:[{t:this.shape_222}]},dur).to({state:[{t:this.shape_223}]},dur).to({state:[{t:this.shape_224}]},dur).to({state:[{t:this.shape_225}]},dur).to({state:[{t:this.shape_226}]},dur).to({state:[{t:this.shape_227}]},dur).to({state:[{t:this.shape_228}]},dur).to({state:[{t:this.shape_229}]},dur).to({state:[{t:this.shape_230}]},dur).to({state:[{t:this.shape_231}]},dur).to({state:[{t:this.shape_232}]},dur).to({state:[{t:this.shape_233}]},dur).to({state:[{t:this.shape_234}]},dur).to({state:[{t:this.shape_235}]},dur).to({state:[{t:this.shape_236}]},dur).to({state:[{t:this.shape_237}]},dur).to({state:[{t:this.shape_238}]},dur).to({state:[{t:this.shape_239}]},dur).to({state:[{t:this.shape_240}]},dur).to({state:[{t:this.shape_241}]},dur).to({state:[{t:this.shape_242}]},dur).to({state:[{t:this.shape_243}]},dur).to({state:[{t:this.shape_244}]},dur).to({state:[{t:this.shape_245}]},dur).to({state:[{t:this.shape_246}]},dur).to({state:[{t:this.shape_247}]},dur).to({state:[{t:this.shape_248}]},dur).to({state:[{t:this.shape_249}]},dur).to({state:[{t:this.shape_250}]},dur).to({state:[{t:this.shape_251}]},dur).to({state:[{t:this.shape_252}]},dur).to({state:[{t:this.shape_253}]},dur).to({state:[{t:this.shape_254}]},dur).to({state:[{t:this.shape_255}]},dur).to({state:[{t:this.shape_256}]},dur).to({state:[{t:this.shape_257}]},dur).to({state:[{t:this.shape_258}]},dur).to({state:[{t:this.shape_259}]},dur).to({state:[{t:this.shape_260}]},dur).to({state:[{t:this.shape_261}]},dur).to({state:[{t:this.shape_262}]},dur).to({state:[{t:this.shape_263}]},dur).to({state:[{t:this.shape_264}]},dur).to({state:[{t:this.shape_265}]},dur).to({state:[{t:this.shape_266}]},dur).to({state:[{t:this.shape_267}]},dur).to({state:[{t:this.shape_268}]},dur).wait(1));

	// anim
	this.instance_5 = new lib.Symbol2("synched",0,false);
	this.instance_5.setTransform(274.9,195.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(1000));

	animover = "over";
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176.7,12,194.7,370.7);


(lib.ScrollArrowUp_icon = function() {
	this.initialize();

	// icon
	this.instance_6 = new lib.arrowIcon();
	this.instance_6.setTransform(3.5,2,1,1,180,0,0,3.5,2);

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowUp_downSkin = function() {
	this.initialize();

	// icon
	this.instance_7 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_7.setTransform(4,4);

	// fill
	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_269.setTransform(7.6,4.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_270.setTransform(7.5,7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_271.setTransform(7.5,7);

	this.addChild(this.shape_271,this.shape_270,this.shape_269,this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_icon = function() {
	this.initialize();

	// icon
	this.instance_8 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowDown_downSkin = function() {
	this.initialize();

	// icon
	this.instance_9 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_9.setTransform(4,5);

	// fill
	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_272.setTransform(7.5,4.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3AhKBGICVAAIAAiLIiVAAIAACL").cp();
	this.shape_273.setTransform(7.5,7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_274.setTransform(7.5,7);

	this.addChild(this.shape_274,this.shape_273,this.shape_272,this.instance_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#9F5000","#FFCC66","#E49630","#EBA53F","#E3942E","#9C5003"],[0,0.431,0.667,0.78,0.882,1],-233.2,0,233.3,0).s().rr(-233.3,-39.05,466.6,78.1,5);
	this.shape_275.setTransform(-0.5,180.8,0.41,0.091);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#9F5000","#FFCC66","#E49630","#EBA53F","#E3942E","#9C5003"],[0,0.431,0.667,0.78,0.882,1],-233.2,0,233.3,0).s().rr(-233.3,-39.05,466.6,78.1,5);
	this.shape_276.setTransform(0,-180.7,0.412,0.091,0,0,180);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#753A00","#FFCC66","#A06D07","#E49630","#EBA53F","#E3942E","#9C5003"],[0,0.18,0.502,0.667,0.78,0.882,1],-233.2,0,233.3,0).s("#663300").ss(2,1,1).rr(-233.3,-39.05,466.6,78.1,5);
	this.shape_277.setTransform(0,169.1,0.417,0.416,0,180,0);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#CCCCCC","#FFFFFF","#A8A8A8","#343434","#E8E8E8","#000000"],[0,0.157,0.302,0.573,0.875,1],-205.8,0,206,0).s("#999999").ss(2,1,1).rr(-206,-23.25,412,46.5,15);
	this.shape_278.setTransform(0,155.6,0.416,0.416,180);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#9F5000","#FFCC66","#A06D07","#E49630","#EBA53F","#E3942E","#9C5003"],[0,0.18,0.502,0.667,0.78,0.882,1],-233.2,0,233.3,0).s("#663300").ss(2,1,0,3).rr(-233.3,-39.05,466.6,78.1,5);
	this.shape_279.setTransform(0,-169,0.417,0.416);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#CCCCCC","#FFFFFF","#A8A8A8","#343434","#E8E8E8","#000000"],[0,0.157,0.302,0.573,0.875,1],-205.8,0,206,0).s("#999999").ss(2,1,1).rr(-206,-23.25,412,46.5,15);
	this.shape_280.setTransform(0,-155.4,0.416,0.416);

	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(1.2,78.1,1,1,180);
	this.instance_10.alpha = 0.352;

	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(2.2,-77.8);
	this.instance_11.alpha = 0.371;

	this.instance_12 = new lib.Symbol3();
	this.instance_12.setTransform(0.9,1.2);

	this.instance_13 = new lib.Symbol2copy();
	this.instance_13.setTransform(0.7,43.4,1,1,0,0,0,-0.3,44.3);

	this.addChild(this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.2,-185.2,194.7,370.7);


(lib.startAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 1
	this.instance_14 = new lib.Symbol8("synched",0);
	this.instance_14.setTransform(275.4,197.3,1,1,0,0,0,1.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({startPosition:0},10).to({startPosition:0},1).to({rotation:180,x:275.3},8).wait(1));
	
	
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176.7,12,194.7,370.7);


(lib.hourglass = function() {
	this.initialize();

	// Mcs
	this.introAnim_mc = new lib.startAnim_mc();
	this.introAnim_mc.setTransform(180.8,164.9,0.523,0.889,0,0,0,1.2,-2.6);

	// Mcs
	this.playAnim_mc = new lib.hourAnim_mc();
	this.playAnim_mc.setTransform(181,193.8,0.523,0.889,0,0,0,0.7,29.9);

	this.addChild(this.playAnim_mc,this.introAnim_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0,231.1,400);


(lib.ScrollArrowUp_upSkin = function() {
	this.initialize();

	// icon
	this.instance_15 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_15.setTransform(4,4);

	// fill
	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_281.setTransform(7.5,4.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_282.setTransform(7.5,7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_283.setTransform(7.5,7);

	this.addChild(this.shape_283,this.shape_282,this.shape_281,this.instance_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowUp_overSkin = function() {
	this.initialize();

	// icon
	this.instance_16 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_16.setTransform(4,4);

	// fill
	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_284.setTransform(7.6,4.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_285.setTransform(7.5,7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_286.setTransform(7.5,7);

	this.addChild(this.shape_286,this.shape_285,this.shape_284,this.instance_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_upSkin = function() {
	this.initialize();

	// icon
	this.instance_17 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_17.setTransform(4,5);

	// fill
	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_287.setTransform(7.5,4.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_288.setTransform(7.5,7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_289.setTransform(7.5,7);

	this.addChild(this.shape_289,this.shape_288,this.shape_287,this.instance_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_overSkin = function() {
	this.initialize();

	// icon
	this.instance_18 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_18.setTransform(4,5);

	// fill
	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_290.setTransform(7.5,4.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_291.setTransform(7.5,7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_292.setTransform(7.5,7);

	this.addChild(this.shape_292,this.shape_291,this.shape_290,this.instance_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;