import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../structs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('shown', style({
        overflow: 'hidden',
        height: '*',
      })),
      state('hidden', style({
        overflow: 'hidden',
        height: '0px',
      })),
      transition('shown => hidden', animate('0.5s ease-in-out')),
      transition('hidden => shown', animate('0.5s ease-in-out'))
    ])
  ]
})
export class CompanyComponent implements OnInit {
  @Input() company: Company = <Company>{};
  @Input() projectsState: string = 'hidden';

  toggleExpanded(): void {
    this.projectsState = this.projectsState === 'hidden' ? 'shown' : 'hidden';
  }

  ngOnInit(): void {
    if (this.company.endDate.toLowerCase() === 'current') {
      this.projectsState = 'shown';
    }
  }
}
