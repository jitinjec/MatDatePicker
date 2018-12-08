import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Moment } from 'moment';
import * as moment from 'moment';

export class CustomeDateAdapter extends MomentDateAdapter {
    parse(value: any, parseFormat: string | string[]): Moment | null {

        return moment(value, parseFormat);
    }
    format(date: Moment, displayFormat: string): string {
        console.log(displayFormat);
        return moment(date).format(displayFormat);
    }
}
