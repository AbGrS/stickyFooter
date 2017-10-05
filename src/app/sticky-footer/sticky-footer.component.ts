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
  }
  showMore(elementId){
  	this.showExtra[elementId]= true;
  	this.liOfExpandedIds.push(elementId);
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
          elSticky.style.zIndex="1";

  			}else{
  				elSticky.style.position='static';
  				elSticky.style.width="100%";
  			}
  		})

  		
  		
  	}
		if((document.documentElement.scrollTop+ window.innerHeight)> (document.body.clientHeight)-100){
  			this.fetchMoreItems();
  		}

	
  }

	fetchMoreItems(){
			this.allData.push({
        data:'loaded 1',
        extraData:'Extra'
      })
  	}
}
