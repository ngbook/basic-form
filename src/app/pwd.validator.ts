import { Directive } from '@angular/core';
import {
    ValidatorFn,
    AbstractControl,
    Validator,
    ValidationErrors,
} from '@angular/forms';

function regTest(reg, value): number {
    return reg.test(value) ? 1 : 0;
}

export function pwdValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
        const value = control.value;
        // 特殊字符
        let count = regTest(/[!@#$%^&*.]+/, value);
        if (count > 0) {
            // 数字
            count += regTest(/\d+/, value);
            if (count > 1) {
                // 字母
                count += regTest(/[a-zA-Z]+/, value);
            }
        }
        console.log(count);
        if (count !== 3) {
            return {
                'pwdValidate': {
                    value: control.value
                }
            };
        } else {
            return null;
        }
    };
}
