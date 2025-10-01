import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrl: './download-list.component.css'
})
export class DownloadListComponent implements OnInit {

  alldownloads: any = []
     p: number = 1;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getalldownloads()
  }

  getalldownloads() {

    this.api.getalldownloads().subscribe((res: any) => {
      console.log(res);
      this.alldownloads = res

    })
  }
}
