export interface list {
  list_id: number;
  name: string;
  description: string;
}

export interface ItemI {
  poster_path: string;
  id: number;
  title?: string;
  original_name: string;
  vote_average: number;
}

export interface ListDetails {
  description: string;
  id: string;
  items: ItemI[];
  name: string;
  item_count: number;
}

export interface PropsContext {
  load: boolean;
  lists: list[];
  SectionInital: () => void;
  CreateLists: (nameList: string, description: string) => void;
  GetList: (listId: number) => void;
  AddMovieList: (movieId: number, listId: number) => void;
  RemoveMovieList: (movieId: number, listId: number) => void;
  AllListsHome: () => void;
  trend: ItemI[];
  movies: ItemI[];
  tvSeries: ItemI[];
  SearchItem: (query: string) => void;
  resultSearch: ItemI[];
  getSession: boolean;
  infoList: ListDetails;
}
