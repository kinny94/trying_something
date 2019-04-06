export interface DsDesctiption {
  topic: string;
  desc: string;
}

export interface Files {
  name: string;
}

export interface Complexities {
  complexity_avg: string;
  type_avg: string;
  type_worst: string;
  complexity_worst: string;
}

export interface ProblemData {
  complexity: string;
  description: string;
  likes: number;
  name: string;
  stars: number;
  raters: number;
  storageUrl: string;
  tags: Array<string>;
  topic: string;
}

export interface TopicProblems {
  [key: string]: ProblemData;
}

export interface UserData {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  likedProblems: ProblemData[];
  ratedProblems: ProblemData[];
}

export interface Username {
  email: string;
}


export interface RatedProblems {
  [problemId: string]: {
    rating: number;
  };
}

export interface ProblemKeyValue {
  key: string;
  value: {
    [problem: string]: ProblemData;
  };
}