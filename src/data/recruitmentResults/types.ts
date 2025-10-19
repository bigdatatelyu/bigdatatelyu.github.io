export type RecruitmentStatus = "accepted" | "rejected";

export interface RecruitmentData {
  name: string;
  status: RecruitmentStatus;
}

export type RecruitmentResults = Record<string, RecruitmentData>;