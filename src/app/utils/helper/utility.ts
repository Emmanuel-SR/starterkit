import { Injectable } from '@angular/core';

@Injectable()
export class Utility {

    extractProperty(obj: any, key: string) {
        return key.split(".").reduce((a, b) => {
            if (a instanceof Array)
                return a.reduce((c, v) => c.concat(v), []).map(o => o[b]);
            return a[b];
        }, obj);
    }
}
