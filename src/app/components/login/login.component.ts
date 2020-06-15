import { Component, OnInit } from "@angular/core";
import { ILogin } from "src/app/models/login.model";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { IErrorModel } from "src/app/models/error-response.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  user: ILogin = {} as ILogin;

  invalidLogin = false;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn())
      this.router.navigate(["ng-app"]);
  }

  login() {
    this.authService.authenticate(this.user).subscribe(
      (token) => {
        this.loadSession(this.user);
        this.invalidLogin = false;
      },
      (error: IErrorModel) => {
        this.invalidLogin = true;
        console.log(error);
      }
    );
  }

  loadSession(user: ILogin) {
    this.userService.getByUserName(user.username).subscribe((profile) => {
      this.router.navigate(["ng-app"]);
    });
  }

}
