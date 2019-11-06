class Token{

    isValid(token){
        
        return true; 
        const payload = this.payload(token)

        let host1 = "http://vl.test/api/auth/signup"
        let host2 = "http://vl.test/api/auth/login"

        if(payload){
            
            if(payload.iss==host1) { return true; }
            if(payload.iss==host2) { return true; }

            return false
        }

        return false
    }

    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }
}

export default Token = new Token()