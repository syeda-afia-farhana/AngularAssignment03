import { Component, OnInit } from '@angular/core';
import {DistrictService} from '../../common/services';
import {DistrictInfo} from '../../shared/interfaces';
import {DistrictListRes} from '../../shared/interfaces';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  public districtList: DistrictInfo[] = [];
  constructor(private districtService: DistrictService) {
    this.setDistrictList();
  }

  ngOnInit(): void {
  }

  private setDistrictList(): void{

    this.districtService.getDistrictList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.districtList = res.data;
        for (const d of this.districtList)
        {
          console.log(d.name);
        }
      }
      else {
        console.log('Error', res);
      }
    });
  }

}
