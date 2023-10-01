import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : 'SECRET#$NICE',
        });
    }
    async validate(payload:any){
        console.log("jwt strategy");
        return {
            id:payload.id,
            email:payload.email,
            name:payload.name
        }
    }
}