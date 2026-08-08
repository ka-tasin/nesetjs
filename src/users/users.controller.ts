import { Controller, Get, Query, Param } from '@nestjs/common';
import usersJson  from '../../metadata/users.json';


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
console.log(id, idNum)
       return user
    }
}
