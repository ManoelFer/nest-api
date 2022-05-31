import { InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ficar vazio' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Este campo não pode ficar vazio' })
  email: string;
}
