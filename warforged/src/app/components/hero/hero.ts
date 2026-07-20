import { Navbar } from '../navbar/navbar';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [Navbar],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}