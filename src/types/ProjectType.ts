
export type ProjectType = {
  name: string;
  techs: string[];
  images: string[];
  repo: string;
  deploy: string;
}

export type ProjectUrls = {
  repo: string;
  deploy: string;
}

export type ProjectInfo = {
  project: ProjectType;
}