import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from '@angular/core';
import { TestComponent } from 'src/app/childcomponents/test/test.component';
import { FormControl } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SlideInOutAnimation } from 'src/app/animations';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  animations: [
    SlideInOutAnimation
  ]
})
export class Page1Component implements OnInit {
  @ViewChild('messagecontainer', { read: ViewContainerRef , static: false }) entry: ViewContainerRef;
  tabs = ['First'];
  selected = new FormControl(0);
  showCardBody = false;
  constructor(private resolver: ComponentFactoryResolver) { 

  }

  ngOnInit() {
  }
  showDetails() {
    this.showCardBody = !this.showCardBody;
  }
  addTab(selectAfterAdding: boolean) {
    this.tabs.push('Ajay');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  createComponent(message) {
    console.log('testtttttt');
    
   //  this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(TestComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.message = message;
}
}
