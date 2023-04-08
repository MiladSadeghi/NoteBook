import { useSearchParams } from "react-router-dom";

export const useCustomSearchParams = (param: any = {}) => {
  const [search, setSearch] = useSearchParams();
  const searchAsObject: any = Object.fromEntries(new URLSearchParams(search));
  const transformedSearch: any = Object.keys(param).reduce(
    (acc: any, key: any) => ({
      ...acc,
      [key]: param[key](acc[key]),
    }),
    searchAsObject
  );

  return [transformedSearch, setSearch];
};
