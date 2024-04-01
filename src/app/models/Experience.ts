export interface Experience {
    experienceId: number;
    companyName: string;
    responsibilityList: Responsibility[];
    startDate: Date;
    endDate: Date;
    userId: number;
    resumeId: number;
    position: string;
}
export interface Responsibility {
    responsibilityId: number;
    responsibility: string;
}
