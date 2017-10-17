import { Component } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { User } from './user.model';
import { pwdValidator } from './pwd.validator';

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
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    jobs = JOB_LIST; // 作为<select>的<option>列表值
    userForm: FormGroup;

    // form controls
    username: FormControl;
    pwd: FormControl;
    email: FormControl;
    tel: FormControl;
    job: FormControl;

    constructor(private fb: FormBuilder) {
        // 创建表格
        this.createForm();
    }
    onSubmit() {
        // pass
    }
    private createForm() {
        this.username = new FormControl('', [
            Validators.compose([
                Validators.required,
                Validators.minLength(4), // 最少4个字符
            ])
        ]);
        this.pwd = new FormControl('', [
            Validators.compose([
                Validators.required,
                Validators.minLength(8),
                pwdValidator(), // 自定义校验器
            ])
        ]);
        this.email = new FormControl('', [
            Validators.compose([
                Validators.required,
                Validators.email,
            ])
        ]);
        this.tel = new FormControl('', [
            Validators.compose([
                Validators.required,
                Validators.pattern(/^1\d{10}$/), // 正则校验
            ])
        ]);
        this.job = new FormControl(JOB_LIST[0].id);
        // build the form
        this.userForm = this.fb.group({
            username: this.username,
            password: this.pwd,
            email: this.email,
            phone: this.tel,
            job: this.job
        });
    }
}
