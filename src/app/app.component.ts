import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';

interface NavLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  showFiller = false;
  handPreference: 'start' | 'end' = 'start';
  mobileQuery: MediaQueryList;
  fillerNav: NavLink[] = [{ label: 'Accounts', url: '/account' }, { label: 'Settings', url: '/settings' }];
  private _mobileQueryListener: () => void;
  @ViewChild('snav') drawer?: MatSidenav;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.openDialog();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  async toggleHandPreference(): Promise<void> {
    if (this.drawer?.opened) {
      await this.drawer.close();
    }
    if (this.handPreference === 'start') {
      this.handPreference = 'end';
    } else {
      this.handPreference = 'start';
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-welcome-dialog',
  templateUrl: 'dialog-welcome-dialog.html',
})
export class DialogContentExampleDialog {}