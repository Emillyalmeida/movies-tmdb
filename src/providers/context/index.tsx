import { useCallback, createContext, useState, ReactNode } from "react";
import api from "../../services/api";

interface list {
  list_id: number;
  name: string;
  description: string;
}

interface PropsContext {
  load: boolean;
  lists: list[];
  SectionInital: () => void;
  CreateLists: (nameList: string, description: string) => void;
  GetList: (listId: number) => void;
  AddMovieList: (movieId: number, listId: number) => void;
  RemoveMovieList: (movieId: number, listId: number) => void;
  AllListsHome: () => void;
  trend: any[];
  movies: any[];
  tvSeries: any[];
  SearchItem: (query: string) => void;
  resultSearch: any[];
}

export const TmdbContext = createContext<PropsContext>({} as PropsContext);

interface TmdbProviderProps {
  children: ReactNode;
}

const TmdbProvider = ({ children }: TmdbProviderProps) => {
  const [lists, setLists] = useState<list[] | []>([]);
  const [sessionId, setSectionId] = useState("");

  const [load, setLoad] = useState(true);
  const [trend, setTrend] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [resultSearch, setResult] = useState([]);

  const SectionInital = () => {
    api
      .get(`authentication/token/new?api_key=${process.env.REACT_APP_API_KEY!}`)
      .then((res) => {
        const section = { request_token: res.data.request_token };
        console.log(section);
        api
          .post(
            `authentication/token/validate_with_login?api_key=${process.env
              .REACT_APP_API_KEY!}`,
            {
              username: `${process.env.REACT_APP_USER_NAME}`,
              password: `${process.env.REACT_APP_PASSWORD}`,
              request_token: `${section.request_token}`,
            }
          )
          .then((res) => {
            console.log(res.data);
            api
              .post(
                `authentication/session/new?api_key=${process.env
                  .REACT_APP_API_KEY!}`,
                section
              )
              .then((res) => {
                console.log(res.data);
                setSectionId(res.data.session_id);
              })
              .catch((err) => {
                console.log(err, "error stp 3");
              });
          })
          .catch((err) => {
            console.log(err.response, "error stp 2");
          });
      })
      .catch((err) => {
        console.log(err);
        console.log("erro no requestToken");
      });
  };

  const CreateLists = (nameList: string, description: string) => {
    const body = {
      name: nameList,
      description: description,
      language: "pt-br",
    };
    api
      .post(
        `list?api_key=${process.env
          .REACT_APP_API_KEY!}&session_id=${sessionId}`,
        body
      )
      .then((res) => {
        console.log(res);
        const InfoList = {
          list_id: res.data.list_id,
          name: nameList,
          description: description,
        };
        setLists([...lists, InfoList]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddMovieList = (movieId: number, listId: number) => {
    const body = {
      media_id: movieId,
    };

    api
      .post(
        `list/${listId}/add_item?api_key=${process.env.REACT_APP_API_KEY!}`,
        body
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetList = (listId: number) => {
    api
      .get(`list/${listId}?api_key=${process.env.REACT_APP_API_KEY!}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const RemoveMovieList = (movieId: number, listId: number) => {
    const body = {
      media_id: movieId,
    };

    api
      .post(
        `list/${listId}/remove_item?api_key=${process.env.REACT_APP_API_KEY!}`,
        body
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AllListsHome = () => {
    setLoad(true);
    GetTrending();
    PopularMovies();
    PopularTvSeries();
    setLoad(false);
  };

  const PopularMovies = () => {
    api
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env
          .REACT_APP_API_KEY!}&language=pt-BR&page=1`
      )
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const PopularTvSeries = () => {
    api
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env
          .REACT_APP_API_KEY!}&language=pt-BR&page=1`
      )
      .then((res) => {
        console.log(res.data);
        setTvSeries(res.data.results);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetTrending = () => {
    api
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env
          .REACT_APP_API_KEY!}&language=pt-BR`
      )
      .then((res) => {
        console.log(res.data);
        setTrend(res.data.results);
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SearchItem = (query: string) => {
    api
      .get(
        `search/multi?api_key=${process.env
          .REACT_APP_API_KEY!}&language=pt-BR&query=${query}&page=1&include_adult=false`
      )
      .then((res) => {
        console.log(res.data.results);
        const removePerson = res.data.results.filter(
          (item: { media_type: string }) => item.media_type !== "person"
        );
        setResult(removePerson);
        return res.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TmdbContext.Provider
      value={{
        SectionInital,
        CreateLists,
        lists,
        GetList,
        AddMovieList,
        RemoveMovieList,
        AllListsHome,
        load,
        trend,
        movies,
        tvSeries,
        SearchItem,
        resultSearch,
      }}
    >
      {children}
    </TmdbContext.Provider>
  );
};

export default TmdbProvider;
