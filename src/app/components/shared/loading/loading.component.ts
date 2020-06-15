import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/components/shared/loading/loading.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

    isLoading: Subject<boolean> = this.loadingService.isLoading;
    loading: boolean;

    constructor(
        private loadingService: LoadingService,
    ) { }

    ngOnInit() {
        this.isLoading.subscribe((loading: boolean) => {
            this.loading = loading;
        });
    }

}
