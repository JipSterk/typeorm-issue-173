import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Inject } from "typedi";
import { User } from "../../entity/User";
import { UserService } from "../../services/user/service";

@Resolver(User)
export class UserResolver {
  @Inject(() => UserService)
  userService: UserService;

  @Query(() => User)
  user(@Arg("id", () => ID) id: string) {
    return this.userService.getWithId(id);
  }

  @Mutation(() => User)
  createUser(@Arg("name", () => String) name: string) {
    return this.userService.createUser(name);
  }
}
