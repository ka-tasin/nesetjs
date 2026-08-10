import { CreateProfileDto } from './dto/createProfile.dto';
import { updateProfileDto } from './dto/updateProfile.dto';
export declare class UsersController {
    findAll(location: string): {
        location: string;
    }[];
    findOne(id: string): any[];
    create(createProfile: CreateProfileDto): {
        name: string;
        age: number;
        address: string;
    };
    update(id: string, updateProfile: updateProfileDto): {
        name: string;
        age: number;
        address: string;
        id: string;
    };
}
