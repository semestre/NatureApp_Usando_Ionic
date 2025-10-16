import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-side-bar',
  imports: [NzMenuModule, NzIconModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
