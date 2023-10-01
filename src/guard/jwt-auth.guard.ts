import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest().headers.cookie
        console.log("jwt authentication token after login");
        return request;
    }
}