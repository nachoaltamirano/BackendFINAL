export default class UserDTO {
    constructor(user) {
      console.log(user)
        this.first_name = user.first_name,
        this.last_name = user.last_name,
        this.full_name = `${user.last_name}, ${user.first_name}`,
        this.email = user.email,
        this.age = user.age,
        this.rol = user.rol;
    }
  }