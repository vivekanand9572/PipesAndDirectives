import { Pipe ,PipeTransform } from "@angular/core";
@Pipe({
    name:'percentage'
})
export class PercentagePipe implements PipeTransform{
    transform(sentence:string) {
        if(sentence.length>20){
            return sentence.slice(0,20)+"...";
        }else{
            return sentence;
        }
    }
} 
