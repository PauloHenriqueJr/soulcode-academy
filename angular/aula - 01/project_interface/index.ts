interface UserProps {
    fistname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    cpf: number;
    contact: number;
    isAdmin: boolean;
    
}

class User implements UserProps { 
    fistname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    cpf: number;
    contact: number;
    isAdmin: boolean;

    constructor(fistname: string, lastname: string, username: string, email: string, password:string, cpf: number, contact: number,isAdmin:boolean) 
    
    { 
        this.fistname = fistname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contact = contact;
        this.isAdmin = isAdmin;
    }

    getFistname(){
        return this.fistname
      }
    
      getLastname(){
        return this.lastname
      }

      getUsername(){
        return this.username
      }

      getEmail(){
        return this.email
      }

      getPassword(){
        return this.password
      }

      getCpf(){
        return this.cpf
      }

      getContact(){
        return this.contact
      }

      getIsAdmin(){
        return this.isAdmin
      }

      setFistname(fistname:string){
        this.fistname = fistname
      }

      setLastname(lastname:string){
        this.lastname = lastname
      }

      setUsername(username:string){
        this.username = username
      }

      setEmail(email:string){
        this.email = email
      }

      setPassword(password:string){
        this.password = password
      }

      setCpf(cpf:number){
        this.cpf = cpf
      }

      setContact(contact:number){
        this.contact = contact
      }

      setIsAdmin(isAdmin:boolean){
        this.isAdmin = isAdmin
      }
}

let pessoa = new User ("Paulo","Henrique","mineiro","elmineirodev@gmail.com","6646346hdhd",353626363662,428764573527,true);

console.log(pessoa)