import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest} from "@angular/common/http";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (sessionStorage.getItem("username") && sessionStorage.getItem("token")) {
            request = request.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem("token"),
                },
            });
        }
        return next.handle(request);
    }
}
