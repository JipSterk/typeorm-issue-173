import { Service } from "typedi";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { User } from "../../entity/User";

@Service()
export class UserService {
  @InjectRepository(User)
  userRepository: Repository<User>;

  createUser(name: string) {
    return this.userRepository.save({ name });
  }

  getWithId(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }
}
