export type TAuthor = {
  avatar: {
    data: {
      attributes: {
        alternativeText: String;
        height: Number;
        width: Number;
        name: String;
        previewUrl: null | String;
        size: Number;
        url: String;
      };
    };
  };
  description: String;
  email: String;
  name: String;
  quote: String;
  quoteDescription: String;
  slug: String;
  articles: any;
};

export type TAuthors = {
  attributes: {
    avatar: {
      data: {
        attributes: {
          alternativeText: String;
          height: Number;
          width: Number;
          name: String;
          previewUrl: null | String;
          size: Number;
          url: String;
        };
      };
    };
    description: String;
    email: String;
    name: String;
    quote: String;
    quoteDescription: String;
    slug: String;
    articles: any;
  };
};
