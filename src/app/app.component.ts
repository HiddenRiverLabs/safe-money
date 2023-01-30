import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  showFiller = false;
  handPreference: 'start' | 'end' = 'start';
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;
  @ViewChild('snav') drawer?: MatSidenav;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleHandPreference() {
    if (this.handPreference === 'start') {
      this.handPreference = 'end';
    } else {
      this.handPreference = 'start';
    }
    this.drawer?.close().then((toggleResult: MatDrawerToggleResult) => {
      console.log(toggleResult);
      // if (this.handPreference === 'start') {
      //   this.handPreference = 'end';
      // } else {
      //   this.handPreference = 'start';
      // }
    }, (rejectedMsg: any) => {
      console.log(rejectedMsg);
    });
  }
}
