import { User } from '../model/user'

export const getUser = async () => await User.findAll()
