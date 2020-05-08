import { Injectable } from '@angular/core';

@Injectable()
export class Utility {

    getDynamicProp(obj: any, key: string) {
        return key.split(".").reduce((a, b) => a[b], obj);
    }

}
