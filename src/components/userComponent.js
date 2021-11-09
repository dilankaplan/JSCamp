import User from "../modals/user.js"
import { UserService } from "../services/userService.js"

console.log("user component loaded")

let UserService = new UserService()
let user1= new User()
UserService.add()
UserService.getById()
