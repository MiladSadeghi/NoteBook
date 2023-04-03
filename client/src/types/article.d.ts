export type TArticle = {
  author: {
    data: {
      attributes: {
        name: string;
        slug: string;
        avatar: {
          data: {
            attributes: {
              alternativeText: string;
              url: string;
              previewUrl: null;
              name: string;
            };
          };
        };
      };
    };
  };
  category:
    | "Lifestyle"
    | "Travel"
    | "Food"
    | "Healthcare"
    | "Technology"
    | "Nature"
    | "سبک زندگی"
    | "سفر"
    | "غذا"
    | "سلامت"
    | "فن آوری"
    | "طبیعت";
  cover: {
    data: {
      attributes: { name: string; alternativeText: string; url: string };
    };
  };
  createdAt: Date;
  readTime: number;
  shortDescription: string;
  slug: string;
  title: string;
  blocks: [{ body: string }];
};
