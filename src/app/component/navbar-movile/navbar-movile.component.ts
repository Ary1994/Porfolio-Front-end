import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
@Component({
  selector: 'app-navbar-movile',
  templateUrl: './navbar-movile.component.html',
  styleUrls: ['./navbar-movile.component.css']
})
export class NavbarMovileComponent implements OnInit {
constructor( private router:Router){}
ngOnInit() {};
login(){
  this.router.navigate(['/login']);
}
}
