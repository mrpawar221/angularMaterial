import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit{

  user:User |any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(!id) id = 1;
      this.user = null;
      this.userService.users.subscribe(userData =>{
        if(userData.length == 0) return;

        setTimeout(()=>{
          this.user = this.userService.userById(id);
        },400)
      })
    })
  }
}
