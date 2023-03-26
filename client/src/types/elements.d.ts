export type THeaderCard = {
  category: string;
  title: string;
  image: string;
  author: {
    name: string;
    avatar: any;
  };
  createdAt: string;
  readTime: 3;
  shortDescription: string;
  withImage: Boolean
};

export type TAccordion = {
  title: string;
  description: string;
};