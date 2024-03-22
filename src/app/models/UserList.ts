import { Resume } from './Resume';
import { Education } from './Education';
import { Experience } from './Experience';
import { Social } from './Social';
import { Skill } from './Skill';

export interface UserList {
    resumeList: Resume[];
    educationList: Education[];
    experienceList: Experience[];
    socialList: Social[];
    skillList: Skill[];
}
