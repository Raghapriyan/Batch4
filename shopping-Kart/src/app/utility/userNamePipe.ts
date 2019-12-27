import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatUserName' })

export class FormatUserNamePipe implements PipeTransform{

    transform(userName: string, msg?: string, greetings?: string){
        userName = userName.replace(/,/g, '');
        if(!msg){
            msg = "Hi"
        }    
        greetings = greetings ? greetings : "user";

        // return msg + " " + greetings + ", " + userName;
        return `${msg} ${greetings}, ${userName}`;
    }
}

