import { Component, OnInit, HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-sticky-footer',
  templateUrl: './sticky-footer.component.html',
  styleUrls: ['./sticky-footer.component.css']
})
export class StickyFooterComponent implements OnInit {

showExtra= {};
showStrickyFooter= {};
expandedStickyHeaderId;
fixedOffset={};
liOfExpandedIds=[];
topPositions={};

allData
 constructor(@Inject(DOCUMENT) private document: Document,
 private appService: AppServiceService) { }

  ngOnInit() {

  	this.allData= this.appService.allData;
  	 //window.addEventListener('scroll', this.onScroll, true); //third parameter
  	 // 	var el1= document.getElementById('extraSection1');
  		// this.topPositions['extraSection1']= el1.getBoundingClientRect()['y'];

  		// var el1= document.getElementById('extraSection2');
  		// this.topPositions['extraSection1']= el1.getBoundingClientRect()['y'];
  }
  showMore(elementId){
  	this.showExtra[elementId]= true;
  	//this.expandedStickyHeaderId= elementId;
  	this.liOfExpandedIds.push(elementId);

  	// var el1= document.getElementById(elementId);
  	// this.topPositions[elementId]= el1.getBoundingClientRect()['y'];
  }
 @HostListener("window:scroll", [])

  onWindowScroll(event) {

  	if(this.liOfExpandedIds.length>0){
  		this.liOfExpandedIds.map(item=>{
  			var el= document.getElementById(item);
  			var params= el.getBoundingClientRect();

  			var elSticky= document.getElementById(item+'Sticky');

  			if(params['top']< window.innerHeight/2 && params['bottom']>window.innerHeight){
  				elSticky.style.position='fixed';
  				elSticky.style.width="67%";

  			}else{
  				elSticky.style.position='static';
  				elSticky.style.width="100%";
  			}
  			// if(this.topPositions['extraSection1']){
  			// 	console.log(item +' - '+ params['top'])
  			// 	console.log(window.scrollY)
  			// 	console.log(window.innerHeight)
  			// 	el.style.position= 'fixed';
  			// 	el.style.width= '67%';
  			// 	el.style.zIndex='1'
  			// }else{
  			// 	console.log(item+' -'+params['top'])
  			// 	console.log(window.scrollY)
  			// 	console.log(window.innerHeight )
  			// 	el.style.position= 'static';
  			// 	el.style.width= '100%';
  			// }
  		})

  		
  		
  	}
		if((document.documentElement.scrollTop+ window.innerHeight)> (document.body.clientHeight)-100){
  			this.fetchMoreItems();
  		}
  
  // 	this.expandedStickyHeaderId= Math.min()
  // 	let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	 // var el= document.getElementById(this.expandedStickyHeaderId);
	 // var params;
	 // if(el){
	 // 	params= el.getBoundingClientRect();
	 // 	var abc= params.toJSON()
	 // 	this.fixedOffset= Object.assign({}, abc);
	 // 	if(this.fixedOffset && this.fixedOffset['y']){
	 // 		if(number-(params.y+this.fixedOffset['y']) <400 && number-(params.y+this.fixedOffset['y'])>-250){
		//  	this.showStrickyFooter[this.expandedStickyHeaderId]= true
		//  }else{
		//  	this.showStrickyFooter[this.expandedStickyHeaderId]= false
		//  }
	 // 	}
	 	 
	 // }

	
	
	 // console.log(number);
	 //  console.log(params);
	
  }

	fetchMoreItems(){
			console.log('fecthed');
  	}

  	showExtraTrue(param){
  		if(this.showExtra[param]===true){
  			return true;
  		}else{
  			return false;
  		}
  	}
}
