	var params = new function(){
		return this.title, this.text, this.type, this.OpenAnimation, this.CloseAnimation, this.htmlCode, this.inputString, this.buttonConferme, this.backgroundImage_, this.console, this.colorText, this.colorTitle;
	}

	Paff = function () {

		var castomiz = arguments[0];

		if (castomiz == undefined) {
			console.log('Paff missing attribute!');
			return false;
		}

		//console.log(typeof castomiz);

		switch(typeof castomiz){
			case 'string':
				params.title = castomiz;
				params.text = arguments[1] || '';
				params.type = arguments[2] || '';
				params.htmlCode = arguments[3] || '';

				startingString(params);
				break;
			case 'object':
				params.title = castomiz.title;
				params.text = castomiz.text;
				params.type = castomiz.type;
				params.OpenAnimation = castomiz.OpenAnimation;
				params.CloseAnimation = castomiz.CloseAnimation;
				params.htmlCode = castomiz.htmlCode;
				params.inputString = castomiz.inputString;
				params.buttonConferme = castomiz.buttonConferme;
				params.backgroundImage_ = castomiz.backgroundImage_;
				params.image = castomiz.image;
				params.imageSizeWidth = castomiz.imageSizeWidth;
				params.imageSizeHeight = castomiz.imageSizeHeight; 
				params.console = castomiz.console;
				params.colorText = castomiz.colorText;
				params.colorTitle = castomiz.colorTitle
				
				startingObject(params);
				break;
			default:
				params.title = castomiz;
				params.text = arguments[1] || '';
				params.type = arguments[2] || '';

				startingString(params);
				return false;
		}
	}


	var startingString = function startingString(params){
		if(params.type == ""){
			params.type = "prompt";
		}
		switch(params.type){	//Paff(Title: 'Hello Words', Text: 'Hello Words', Type: 'success');
			case 'success':
				var paff_total = document.createElement("div");
				paff_total.setAttribute("class", "paff-total");
				paff_total.setAttribute("id", "paff-total");
				document.body.appendChild(paff_total);
				var paff_alert = document.createElement("div");
				paff_alert.setAttribute("class", "paff-alert show");
				paff_alert.setAttribute("id", "paff-alert");
				paff_alert.innerHTML = "<div class='successIcon'><span class='su-line'></span><span class='su-line-2'></span></div>"+
					"<h2>"+params.title+"</h2>"	 		+
					"<p>"+ params.text +"</p>"								+
					"<div class='paff-bottom'>"								+
						"<button class='buttonClose'>Cancel</button>"		+
					"</div>";
				document.body.appendChild(paff_alert);
				$(".buttonClose").on('click', function(){
					Paff.close();
				});
				$("body").addClass('hideScrolling');
				break;
			case 'error':
				var paff_total = document.createElement("div");
				paff_total.setAttribute("class", "paff-total");
				paff_total.setAttribute("id", "paff-total");
				document.body.appendChild(paff_total);
				var paff_alert = document.createElement("div");
				paff_alert.setAttribute("class", "paff-alert show");
				paff_alert.setAttribute("id", "paff-alert");
				paff_alert.innerHTML = "<div class='errorIcon'><span class='su-line'></span><span class='su-line-2'></span></div>"+
					"<h2>"+params.title+"</h2>"	 		+
					"<p>"+ params.text +"</p>"								+
					"<div class='paff-bottom'>"								+
						"<button class='buttonClose'>Cancel</button>"		+
					"</div>";
				document.body.appendChild(paff_alert);
				$(".buttonClose").on('click', function(){
					Paff.close();
				});
				$("body").addClass('hideScrolling');
				break;
			case 'warning':

				break;
			case 'input':

				break;
			case 'prompt':
				var paff_total = document.createElement("div");
				paff_total.setAttribute("class", "paff-total");
				paff_total.setAttribute("id", "paff-total");
				document.body.appendChild(paff_total);
				var paff_alert = document.createElement("div");
				paff_alert.setAttribute("class", "paff-alert show");
				paff_alert.setAttribute("id", "paff-alert");
				paff_alert.setAttribute('data-open-animation', params.OpenAnimation);
				paff_alert.innerHTML = "<h2>"+params.title+"</h2>"	 		+
					"<p>"+ params.text +"</p>"								+
					"<div class='paff-bottom'>"								+
						"<button class='buttonClose'>Cancel</button>"		+
					"</div>";
				document.body.appendChild(paff_alert);
				$(".buttonClose").on('click', function(){
					Paff.close();
				});
				$("body").addClass('hideScrolling');
				break;
			//default:
		}
	}

	function startingObject(params){
		if(params.type == "" || params.type == undefined){
			params.type = "prompt";
		}
		if(params.text == "" || params.text == undefined){
			params.text = "";
		}
		switch(params.type){	//Paff(Title: 'Hello Words', Text: 'Hello Words', Type: 'success');
			case 'success':
				var paff_total = document.createElement("div");
				paff_total.setAttribute("class", "paff-total");
				paff_total.setAttribute("id", "paff-total");
				document.body.appendChild(paff_total);
				var paff_alert = document.createElement("div");
				paff_alert.setAttribute("class", "paff-alert show");
				paff_alert.setAttribute("id", "paff-alert");
				paff_alert.setAttribute('data-open-animation', params.OpenAnimation);
				paff_alert.innerHTML = "<h2>"+params.title+"</h2>"	 		+
					"<p>"+ params.text +"</p>"								+
					"<div class='paff-bottom'>"								+
						"<button class='buttonClose'>Cancel</button>"		+
					"</div>";
				document.body.appendChild(paff_alert);
				$(".buttonClose").on('click', function(){
					Paff.close();
				});
				$("body").addClass('hideScrolling');
				break;
			case 'error':

				break;
			case 'warning':

				break;
			case 'input':

				break;
			case 'prompt':
				var paff_total = document.createElement("div");
				paff_total.setAttribute("class", "paff-total");
				paff_total.setAttribute("id", "paff-total");
				document.body.appendChild(paff_total);
				var paff_alert = document.createElement("div");
				paff_alert.setAttribute("class", "paff-alert show");
				paff_alert.setAttribute("id", "paff-alert");
				paff_alert.setAttribute('data-open-animation', params.OpenAnimation);

				if(params.inputString != undefined){
					var inputText = "<input type='text' class='stringText' value='"+params.inputString+"'/>";
				}else{
					var inputText = "";
				}
				if(params.htmlCode != undefined){
					var htmlCode = params.htmlCode;
				}else{
					var htmlCode = "";
				}
				
				if(params.text != undefined){
					var text = params.text;
				}else{
					var text = "";
				}
				
				if(params.buttonConferme == true){
					var buttonConferme = "<button class='buttonClose copyText'>Copy</button>";
				}else{
					var buttonConferme = "";
				}
				
				if(params.image != undefined){
					var parImage = "<br><img src='"+params.image+"' width='"+params.imageSizeWidth+"' height='"+params.imageSizeHeight+"' class=imageParams />";
				}else{
					var parImage = ""
				}
				
				if(params.backgroundImage_ != undefined || params.backgroundImage_ != false ){ //console.log(params.backgroundImage_);
					var background = "<style>.paff-alert:before{ background: url("+params.backgroundImage_+") no-repeat 100% 0; }</style>";
				}else{
					var background = "";
				}
				if(params.colorText != undefined || params.colorText != false ){ //console.log(params.backgroundImage_);
					paff_alert.setAttribute('style', 'color:' + params.colorText);
				}
				if(params.colorTitle != undefined || params.colorTitle != false ){ //console.log(params.backgroundImage_);
					var colorTitle = "color: "+params.colorTitle+";";
				}
				
				
				paff_alert.innerHTML = background+"<h2 style='"+colorTitle+"'>"+params.title+"</h2>"	 		+
					"<p>"+ text +"</p>"								+
					"<div class='htmlCode' id='htmlCode'>"+ htmlCode + parImage +"</div>"+
						inputText +
					"<div class='paff-bottom'>"								+
						buttonConferme +
						"<button class='buttonClose hiddenBlock'>Cancel</button>"		+
					"</div>";
				document.body.appendChild(paff_alert);
				$(".hiddenBlock").on('click', function(){
					Paff.close();
				});
				$(".copyText").on('click', function(){
					$('.stringText').select();
					document.execCommand('copy');
					Paff.close();
				});
				$("body").addClass('hideScrolling');
				
				if(params.console == true && params.console != undefined){
					console.log(
						'Title: ' + params.title + 
						'\nText: ' + params.text +
						'\nType: ' + params.type +
						'\nOpenAnimation: ' + params.OpenAnimation +
						'\nCloseAnimation: ' + params.CloseAnimation +
						'\nhtmlCode: ' + params.htmlCode + 
						'\ninputString: ' + params.inputString +
						'\nbuttonConferme: ' + params.buttonConferme +
						'\nbackgroundImage_: ' + params.backgroundImage_ + " [html " + background + "]" +
						'\nimage: ' + params.image +
						'\nimageSizeWidth: ' + params.imageSizeWidth +
						'\nimageSizeHeight: ' + params.imageSizeHeight +
						'\ncolorText: ' + params.colorText +
						'\nconsole: ' + params.console 
					);
					
				}
				
				break;
			//default:
		}
	}

	Paff.close = function () {
		$('.paff-total').fadeOut("slow");
		var paff_alert = document.getElementById("paff-alert");
		paff_alert.setAttribute('data-close-animation', params.CloseAnimation);
		$(".paff-alert").css('opacity','0');
		$("body").removeClass('hideScrolling');
		setTimeout(function () {

			var box = document.getElementById("paff-total");
			box.parentNode.removeChild(box);
			var boxalert = document.getElementById("paff-alert");
			boxalert.parentNode.removeChild(boxalert);
		}, 200);
	}
