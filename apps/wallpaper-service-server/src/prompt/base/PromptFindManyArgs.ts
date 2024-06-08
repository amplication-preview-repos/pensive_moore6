/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromptWhereInput } from "./PromptWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PromptOrderByInput } from "./PromptOrderByInput";

@ArgsType()
class PromptFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PromptWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PromptWhereInput, { nullable: true })
  @Type(() => PromptWhereInput)
  where?: PromptWhereInput;

  @ApiProperty({
    required: false,
    type: [PromptOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PromptOrderByInput], { nullable: true })
  @Type(() => PromptOrderByInput)
  orderBy?: Array<PromptOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PromptFindManyArgs as PromptFindManyArgs };
