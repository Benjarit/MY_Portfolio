import { Component, OnInit } from '@angular/core';
import { WebInfoService } from '../web-info.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})


export class CareersComponent implements OnInit {

  githubResponse: any;
  youtubeResponse: any;

  aboutme: string;
  workflowDescription: string;
  workflowResponsibility: string[] = ["UI/UX Design", "Unit Testing", "Frontend/Backend Communication", "Database Structure", "Presentation"];
  argricultureResponsibility: string[] = ["Self-Supervision", "Project Planning/Design", "Frontend/Backend Communication", "SQL Query", "User Documentation"];
  scadaResponsibility: string[] = ["Project Planning/Design", "Network Communication", "Kernal/User Space Communication", "Final Report"];
  yaffleResponsibility: string[] = ["UI/UX Design", "Project Planning/Design", "Server Configuration", "Code Review"];

  argricultureDescription: string;
  scadaDescription: string;
  yaffleDescription: string;

  constructor(private webService: WebInfoService) {}

  ngOnInit() {
    this.aboutme = "Ben graduated from University of Missouri - Columbia (UMC) on May 2019 with B.S. Computer Engineering, Math and Computer Science degree. " +
          "Before graduation, he was working as a Part-time Student Software Developer at College of Engineering and School of Natural Resources, "+
          "and he was also a Peer Learning Assistant where he had an opportunity to help his fellows at school to perform well beyond the standards in computer science and math courses. During his time as a software developer at UMC, "+
          "he had contributed his work to many meaningful projects that make positive impacts on people lives like students, faculties, researchers, and farmers."+
          " People find Ben to be an upbeat, self-motivated team player with excellent communication skills. Ben enjoys reading, and the knowledge and perspective that his reading gives him have strengthened his logical thinking skills and presentation abilities.";
    
    this.workflowDescription = "A valuable system that is currently being used by the whole engineering department. The system"+
    " allows faculties and students to submit administrative work requests online. People can use it for submitting tickets for fiscal, HR and marketing/communications tasks, such as student orgs purchasing card requests,"+
    " website edits, and digital marketing requests, which reduce the requests processing time by 50%.";
    
    this.argricultureDescription = "Ben had developed an application that is meant to help farmers and extension agents to understand the trees growing nearby which maybe useful for agroforestry systems."+
    " The application will also provide some data on the soil and climate of farmers' farm.";

    this.scadaDescription = "A centralized systems which monitor and control entire sites, or complexes of systems spread out over large areas (anything from an industrial plant to a nation)."+
    " SCADA systems are crucial for industrial organizations since they help to maintain efficiency, process data for smarter decisions, and communicate system issues to help mitigate downtime.";

    this.yaffleDescription = "A meanningful system that helps connect researchers across the world with the people and places around it by providing a place for them to showcase expertise, research and publically engaged activities in an open and accessible way.";
    
    
    $(".bg").ready(() => {
      $("#fadeUpHeader").animate({ opacity: 1, top: "-50px" }, "slow","swing");
      $("#fadeUpContent").animate({ opacity: 1, top: "-70px" },"slow","linear");
    });
    
    this.getGithubRespo();
    this.getYoutubeInfo();
  }

  getGithubRespo(): void{
    this.webService.getGithubInfo()
    .subscribe(response =>{
      this.githubResponse = response;
    });
  }
  getYoutubeInfo(): void{
    this.webService.getYoutubeInfo()
    .subscribe(response =>{
      this.youtubeResponse = response;
    });
  }
}