import Token from '~/Helpers/Token'
import AppStorage from '~/Helpers/AppStorage'

class User {
    login({ $axios, form}){

        return $axios.$post('auth/login', form)
            .then(res => this.responseAfterLogin(res))
            .catch(error => console.log(JSON.stringify(error)))
    }

    responseAfterLogin(res){

        const access_token = res.access_token
        const username = res.username
        
        if(Token.isValid(access_token)){
            AppStorage.store(username,access_token)
            console.log("token is valid " + access_token);
        }else{
            console.log("token not valid");
        }

    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        
        if(storedToken){
            return Token.isValid(storedToken) ? true : false
        }
        return false
    }

    loggedIn(){
        return this.hasToken()
    }

    logout(){
        console.log("logout")
        AppStorage.clear()
        window.location = '/forum'
    }

    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            console.log("TOKEN:::: " + JSON.stringify(payload))
            return payload.sub
        }
    }

    own(id){
        return this.id() == id
    }

    admin(){
        return this.id() == 81
    }
}

export default User = new User();