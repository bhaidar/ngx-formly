import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
 import { FieldWrapper } from '@ngx-formly/core';
 
 @Component({
   selector: 'formly-wrapper-addons',
   template: `
    <ng-template #matPrefix>
      <span
        *ngIf="to.addonLeft"
        [ngStyle]="{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}"
        (click)="addonLeftClick($event)"
      >
        <i *ngIf="to.addonLeft.class" [ngClass]="to.addonLeft.class"></i>&nbsp;
        <span *ngIf="to.addonLeft.text">{{ to.addonLeft.text }}</span>&nbsp;
      </span>
    </ng-template>

      <ng-container #fieldComponent></ng-container>

    <ng-template #matSuffix>
      <span
        *ngIf="to.addonRight"
        [ngStyle]="{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}"
        (click)="addonRightClick($event)"
      >
        &nbsp;<i *ngIf="to.addonRight.class" [ngClass]="to.addonRight.class"></i>
        &nbsp;<span *ngIf="to.addonRight.text">{{ to.addonRight.text }}</span>
      </span>
    </ng-template>
   `,
 })
 export class FormlyWrapperAddons extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent!: ViewContainerRef;
  @ViewChild('matPrefix') matPrefix: TemplateRef<any>;
  @ViewChild('matSuffix') matSuffix: TemplateRef<any>;

  ngAfterViewInit() {
    if (this.matPrefix ) {
      setTimeout( () => {
        this.to.prefix = this.matPrefix;
      }, 0);
    }

    if (this.matSuffix ) {
      setTimeout( () => {
        this.to.suffix = this.matSuffix;
      }, 0);
    }
  }

   addonRightClick($event: any) {
     if (this.to.addonRight.onClick) {
       this.to.addonRight.onClick(this.to, this, $event);
     }
   }
 
   addonLeftClick($event: any) {
     if (this.to.addonLeft.onClick) {
       this.to.addonLeft.onClick(this.to, this, $event);
     }
   }
 }