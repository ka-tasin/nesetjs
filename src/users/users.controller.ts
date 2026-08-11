import { Controller, Get, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';
import usersJson  from '../../metadata/users.json';
import { CreateProfileDto } from './dto/createProfile.dto';
import { updateProfileDto } from './dto/updateProfile.dto';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Query("location") location: string) {
        return [{location}]
    }

    @Get(":id")
    findOne(@Param("id") id : string) {
       const idNum = Number(id)
       
       const user = (usersJson as any[]).filter(u => u.id === idNum);
       return user
    }

    @Post()
    create(@Body() createProfile: CreateProfileDto) {
        return {
            name: createProfile.name,
            age: createProfile.age,
            address: createProfile.address
        }
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateProfile: updateProfileDto) {
        return {
            id,
            ...updateProfile
        }
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return {
            id
        }
    }
}
