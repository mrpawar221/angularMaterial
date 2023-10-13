import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component,OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isScreenSmall: boolean |undefined;
  users:any;
  @ViewChild(MatSidenav) sidenav:MatSidenav | any;

  constructor(  
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router:Router){ }

  ngOnInit(){
    this.breakpointObserver
      // .observe([Breakpoints.XSmall])
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state:BreakpointState) =>{
        this.isScreenSmall = state.matches;
      });

    this.users = this.userService.users;
    this.userService.loadAll();

    /* used set router bydefault to 1st contact list //same implemented in mainNav comp
    // this.users.subscribe((data:any) => {
    //     if(data.length > 0){
    //       this.router.navigate(['/contactmanager', data[0].id]);
    //     }
    // })
      */
    //  close the side bar when we click on smaller device
    this.router.events.subscribe(() =>{
      if(this.isScreenSmall){
        this.sidenav.close();
      }
    });
  }

}
