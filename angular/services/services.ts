import {DelayService} from "./delay.service";
import {ErrorHandlerService} from "./error-handler.service";
import {HashPasswordService} from "./hash-password.service";
import {LoginService} from "./server/login.service";
import {SignupService} from "./server/signup.service";
import {UserService} from "./server/user.service";

export const services = [
    LoginService,
    SignupService,
    UserService,
    DelayService,
    ErrorHandlerService,
    HashPasswordService,
];