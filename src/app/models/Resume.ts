import { Education } from './Education';
import { Experience } from './Experience';
import { Social } from './Social';
import { Skill } from './Skill';

export interface Resume {
    userId: number;
    resumeId: number;
    resumeList: Resume[];
    educationList: Education[];
    experienceList: Experience[];
    socialList: Social[];
    skillList: Skill[];
    firstName: string;
    lastName: string;
    middleName: string;
    city: string;
    email: string;
    profession: string;
}
