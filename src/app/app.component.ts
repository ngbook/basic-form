import { Component } from '@angular/core';
// import { Validators } from '@angular/forms';
import { User } from './user.model';

const JOB_LIST = [
    {id: 1001, name: '学生'},
    {id: 1002, name: '教师'},
    {id: 1003, name: '白领'},
    {id: 1004, name: '领导'},
    {id: 1005, name: '老板'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    user = new User();
    jobs = JOB_LIST;

    constructor() {
        // 初始化
        this.user.job = JOB_LIST[0].id;
    }
    // 调试输出
    get diagnostic() {
        return JSON.stringify(this.user);
    }
    onSubmit() {
        
    }
}
