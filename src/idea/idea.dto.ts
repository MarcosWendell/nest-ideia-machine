import { IsString } from 'class-validator';
import { UserRO } from 'src/user/user.dto';

export class IdeaDTO {
    @IsString()
    idea: string;

    @IsString()
    description: string;
}

// tslint:disable-next-line: max-classes-per-file
export class IdeaRO {
    id?: string;
    idea: string;
    description: string;
    created: Date;
    updated: Date;
    author: UserRO;
    upvotes?: number;
    downvotes?: number;
}