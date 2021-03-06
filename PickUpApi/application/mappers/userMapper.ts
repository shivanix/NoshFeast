import { UserDto } from "../../domain/dtos/UserDto"
import {UserEntity} from "../../Infrastructure/db/models/user"


export const toEntity = (userDto: UserDto): UserEntity => {
    let userEntity = new UserEntity();
    userEntity.id = userDto.Id;
    userEntity.name = userDto.Name;
    userEntity.email = userDto.Email;
    userEntity.password = userDto.Password;
    userEntity.role = userDto.Role;
    userEntity.phone = userDto.Phone;
    userEntity.createdAt = userDto.CreatedAt;
    userEntity.updatedAt = userDto.UpdatedAt;
    return userEntity;
}