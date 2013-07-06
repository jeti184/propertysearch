/*
var data = { "places":[
	{
		"thumbnail":"../progu/img/house-1-thumb.jpg",
		"address":"123 Lorem ipsum",
		"type":"Apartment",
		"price": 123,
		"bedroom":2,
		"size":20
	},
	{
		"thumbnail":"../progu/img/house-2-thumb.jpg",
		"address":"345 Lorem ipsum",
		"type":"Apartment",
		"price": 345,
		"bedroom":3,
		"size":22,
	}


]

};

*/


window.onload = function(){
	var searchBtn = document.getElementById('searchBtn'),
			fav = document.getElementById('fav'),
			navBtn = document.getElementById('navBtn'),
			searchFilter = document.getElementById('searchFilter'),
			searchfield = document.getElementById('searchfield'),
			go = document.getElementById('go'),
			back = document.getElementById('back'),
			filterbtn = document.getElementById('filterbtn'),
			navMenu = document.getElementById('navMenu'),
			reset = document.getElementById('reset'),
			page = document.getElementById('wrapper'),
			detailpage = document.getElementById('detailpage'),
			content = document.getElementById('content');

	/*	
	var output = "";

	
	for (var i in data.places){
		output +="<li class='item' class='clearfix'>" +
								"<div class-'thumbnail' id=item"+i +" style='background:url('"+data.places[i].thumbnail+"'') no-repeat'></div>" +
								"<div class='descrip'>" +
									"<h5 class='result-address'>" +  data.places[i].address + "</h5>" +
								"</div>"
							"</li>";
		
	}

	document.getElementById('result').innerHTML = output;
	*/

	searchBtn.onclick = function() {
		classie.toggle(this,'active');
		classie.toggle(searchFilter,'open');
		classie.toggle(content,'pushdown');
		classie.remove(content, 'pushdown-2');

	};

	searchfield.onclick = function(){
		classie.toggle(this,'selected');

	};

	$(searchfield).on('input',function(){
		if($(this).val()!== ""){
			classie.add(reset, 'active');	
		}

		else {
			classie.remove(reset, 'active');	
		}
	}); 


	filterbtn.onclick = function(){
		classie.toggle(this,'active');
		classie.toggle(content, 'pushdown-2');
	};

	go.onclick = function(){
		classie.remove(filterbtn, 'active');
		classie.remove(content, 'pushdown-2');
		loading();

	};

	navBtn.onclick = function() {
		classie.toggle(this,'active');
		classie.toggle(navMenu,'menu-push-toright');
		classie.toggle(page, 'push-toright');

	};

	$('.navMenu li').on ('click', function(){
		$('.navMenu .selected').removeClass('selected');
		classie.toggle(this, 'selected');
		classie.toggle(navBtn,'active');
		classie.toggle(navMenu,'menu-push-toright');
		classie.toggle(page, 'push-toright');

		classie.remove(searchFilter,'open');
		classie.remove(searchBtn,'active');
		classie.remove(content,'pushdown');
		classie.remove(content, 'pushdown-2');

		loading();
	});

	
	
	$('.item').on('click', function(){
		classie.toggle(content, 'invisible');

		classie.add(navBtn, 'invisible');

		classie.add(back, 'visible');

		classie.add(searchBtn, 'invisible');

		classie.add(fav, 'visible');

		loading();
		$(window).scrollTop(0);

		classie.toggle(detailpage, 'visible');
	});

	back.onclick = function(){
		classie.remove(content, 'invisible');
		loading();
		classie.remove(detailpage, 'visible');
		classie.remove(navBtn, 'invisible');
		classie.remove(back, 'visible');
		classie.remove(searchBtn, 'invisible');
		classie.remove(fav, 'visible');

	};

	fav.onclick = function() {
		classie.add(this, 'active');
	}

	var loading = function() {
		$('.loading').show(0).delay(300).hide(0);
	}
};


//PRELOAD IMAGE
/*
function preloader() {
	if (document.getElementById) {
		document.getElementById("preload-01").style.background = "url(https://dl.dropboxusercontent.com/u/39346333/progu/img/arrow-up.png) no-repeat -9999px -9999px";
		document.getElementById("preload-02").style.background = "url(https://dl.dropboxusercontent.com/u/39346333/progu/img/check.png) no-repeat -9999px -9999px";
		document.getElementById("preload-03").style.background = "url(https://dl.dropboxusercontent.com/u/39346333/progu/img/menubtn-active.png) no-repeat -9999px -9999px";
		document.getElementById("preload-04").style.background = "url(https://dl.dropboxusercontent.com/u/39346333/progu/img/reset-2.jpg) no-repeat -9999px -9999px";
	}
	
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
*/