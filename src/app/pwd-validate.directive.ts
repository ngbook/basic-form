import { Directive } from '@angular/core';
import {
    NG_VALIDATORS,
    AbstractControl,
    Validator,
    ValidationErrors,
} from '@angular/forms';

@Directive({
    selector: '[pwdValidate]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PwdValidateDirective,
        multi: true
    }]
})
export class PwdValidateDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors {
        const value = control.value;
        // 特殊字符
        let count = this.regTest(/[!@#$%^&*.]+/, value);
        if (count > 0) {
            // 数字
            count += this.regTest(/\d+/, value);
            if (count > 1) {
                // 字母
                count += this.regTest(/[a-zA-Z]+/, value);
            }
        }
        console.log(count);
        if (count !== 3) {
            return {
                'errMsg': '密码必须包含字母、数字、符号'
            };
        } else {
            return null;
        }
    }

    private regTest(reg, value): number {
        return reg.test(value) ? 1 : 0;
    }
}
