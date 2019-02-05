import { Component, OnInit, Input } from '@angular/core';
import { ServiceCallToFbService } from '../../services/service-call-to-fb.service';
import { Skills } from 'src/app/models/skills.model';
@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html',
  styleUrls: ['./skills-detail.component.scss']
})
export class SkillsDetailComponent implements OnInit {
  @Input() skill: Skills;

  constructor(private serviceCallToFbService: ServiceCallToFbService ) { }

  ngOnInit() {
  }
  updateActive(isActive: boolean) {
    this.serviceCallToFbService.updateSkill(this.skill.key, { active: isActive });
  }

  deleteSkill() {
    this.serviceCallToFbService.deleteSkill(this.skill.key);
  }
}
