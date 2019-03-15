import { Component, OnInit, Input } from '@angular/core';
import { ServiceCallToFbService } from '../../services/service-call-to-fb.service';
import { Portfolio } from 'src/app/models/portfolio.model';
@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  @Input() exp: Portfolio;

  constructor(private serviceCallToFbService: ServiceCallToFbService ) { }

  ngOnInit() {
  }
  updateActive(isActive: boolean) {
    this.serviceCallToFbService.updateSkill(this.exp.key, { active: isActive });
  }

  deleteExperience() {
    this.serviceCallToFbService.deleteSkill(this.exp.key);
  }
}
