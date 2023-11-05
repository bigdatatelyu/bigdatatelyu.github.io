export type Member = {
  year: number;
  images: string[];
  personnels: Personnel[];
};

export type Personnel = {
  image: string;
  name: string;
  major: string;
  description: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  positions: string[];
};