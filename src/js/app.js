
let chartsNum = 5;


function initView(){
	 // [].slice.apply(document.querySelectorAll('.gv-graphic__item')).forEach(el => {
  //       let n = el.getAttribute('id').split('-')[1];

  //       if (n > chartsNum ){ el.classList.add("gv-graphic__hidden") }
  //       console.log(n)

  //   });

	addListeners(); 
}

function addListeners(){
	let showAllEl = document.getElementById("openView");
	let hideAllEl = document.getElementById("closedView");

	document.getElementById("gvShowButton").addEventListener('click', function(){ 
				hideAllEl.classList.add('no-height');
				showAllEl.classList.remove('no-height');

		  		window.resize()
		    });

	document.getElementById("gvHideButton").addEventListener('click', function(){ 
				hideAllEl.classList.remove('no-height');
				showAllEl.classList.add('no-height');

		  		window.resize()
		    });

}

initView();