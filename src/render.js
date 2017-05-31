import Mustache from 'mustache'
import rp from 'request-promise'
import {
    maxBy as _maxBy
} from 'lodash';

import mainTemplate from './src/templates/main.html!text';

let initListLength = 4;


export async function render() {

	let data = formatData(await rp({
        uri: 'https://interactive.guim.co.uk/docsdata-test/1nSam1U5K_lkqAnnXy0N_EdJgz5YQloDlIh9gS78IkAo.json',
        json: true
    }));

    let mainHTML = Mustache.render(mainTemplate, { "sections": data });

    return mainHTML;
}

function formatData(data) {
    let items = data.sheets.Sheet1;
    let count = 0;
	let maxObj =  _maxBy( items, function(o) { return o.socialInteractions * 1 });
	let maxVal = maxObj.socialInteractions


    items.map((item) => {
        item.id = "item-" + count;

        item.guNum = guNumFormat(item.socialInteractions);
        item.pcVal = ((item.socialInteractions * 1)/maxVal)*100;
        item.customClass = getCustomClass(item.publisherName);
        item.initShow = getInitShowVal(count);

        count++;
    })
// console.log(page, initListLength)
    return items;
}

function guNumFormat(n){
	let v = n;

	if(v > 999 && v <1000000){
		let r = n/1000;
		let s = r.toString();
		let t = s.split(".");
		v = t[0]+","+t[1];
	}

	return v;


}

function getInitShowVal(count){
	let v;
	count > initListLength ? v = false : v = true;
	return v
};


function getCustomClass(s){
	let t = "na";

		if(s == "Another Angry Voice"){ t="aav"}
		if(s == "The Guardian"){ t="gu"}
		if(s == "The Independent" || s == "indy100"){ t="indy"}
		if(s == "BBC"){ t="bbc"}


	return t;

}
