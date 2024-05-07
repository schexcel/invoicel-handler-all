import {defineRule,configure} from "vee-validate";
import * as AllRules from '@vee-validate/rules'
//Adott nyelvu hibauzanatek
import {localize,setLocale} from "@vee-validate/i18n";
// Magyar nyelv lekerese
import  hu from "@vee-validate/i18n/dist/locale/hu.json"
// Laravel Validation
Object.keys(AllRules).forEach(rule=>defineRule(rule,AllRules[rule]))
// A magyar nyelv bovitese az angol mezo nevek csereje magyara
const fildesMixin={
    names:{
        email: 'email cím',
        password: 'jelszó',
        name: "név",
    }
}
Object.assign(hu,fildesMixin)

configure({
    generateMessage:localize({hu}),
})
setLocale('hu')









/*defineRule('required',(value)=>{
    if(!value || value ===''){
        return "A mező kitöltése kötelező!";
    }
    return true;
})
defineRule('min',(value,[length])=>{
    if(value.length<length){
        return "A mezőnek legalább 8 karakter hosszúnak kell lennie!"
    }
    return true;
})*/