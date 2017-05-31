
let windowWidth;

if(!window){
    windowWidth = 970;
}else{
    windowWidth = window.innerWidth;
}
var isMobile = windowWidth < 600 ? true : false;


let listLen;


!isMobile ? listLen = 5 : listLen = 4;


console.log(isMobile, windowWidth);

function initView(){
	 [].slice.apply(document.querySelectorAll('.gv-graphic__item')).forEach(el => {
        let n = el.getAttribute('id').split('-')[1];

        if (n > listLen ){ el.classList.add('gv-graphic__hidden') }

        console.log(n)

    });

	addListeners();

	window.resize();
}

function addListeners(){
	let showAllEl = document.getElementById("openView");
	let hideAllEl = document.getElementById("closedView");

	document.getElementById("gvShowButton").addEventListener('click', function(){
				[].slice.apply(document.querySelectorAll('.gv-graphic__item')).forEach(el => {
				        let n = el.getAttribute('id').split('-')[1];
				        if (n > listLen ){ el.classList.remove('gv-graphic__hidden') }

				    });
				this.classList.add('gv-graphic__hidden');
				document.getElementById("gvHideButton").classList.remove('gv-graphic__hidden');

		  		window.resize()
		    });

	document.getElementById("gvHideButton").addEventListener('click', function(){
				[].slice.apply(document.querySelectorAll('.gv-graphic__item')).forEach(el => {
				        let n = el.getAttribute('id').split('-')[1];
				        if (n > listLen ){ el.classList.add('gv-graphic__hidden') }

				    });
				this.classList.add('gv-graphic__hidden');
				document.getElementById("gvShowButton").classList.remove('gv-graphic__hidden');

		  		window.resize()
		    });

}

initView();
