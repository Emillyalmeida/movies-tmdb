import { useCallback, createContext, useState, ReactNode } from "react";
import api from "../../services/api";

const TmdbContext = createContext({});

interface TmdbProviderProps {
  children: ReactNode;
}

interface list {
  list_id: number;
  name: string;
  description: string;
}

const TmdbProvider = ({ children }: TmdbProviderProps) => {
  const [lists, setLists] = useState<list[]>([]);
  const [sessionId, setSectionId] = useState("");

  const SectionInital = () => {
    api
      .get(`authentication/token/new?api_key=${process.env.API_KEY!}`)
      .then((res) => {
        const section = { request_token: res.data.request_token };
        api
          .get(`authenticate/${section.request_token}`)
          .then((res) => {
            api
              .post(
                `authentication/session/new?api_key=${process.env.API_KEY!}`,
                section
              )
              .then((res) => {
                setSectionId(res.data.session_id);
              })
              .catch((err) => {
                console.log(err, "error stp 3");
              });
          })
          .catch((err) => {
            console.log(err, "error stp 2");
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
        `list?api_key=${process.env.API_KEY!}&session_id=${sessionId}`,
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
      .post(`list/${listId}/add_item?api_key=${process.env.API_KEY!}`, body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetList = (listId: number) => {
    api
      .get(`/list/${listId}?api_key=${process.env.API_KEY!}`)
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
      .post(`list/${listId}/remove_item?api_key=${process.env.API_KEY!}`, body)
      .then((res) => {
        console.log(res);
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
      }}
    >
      {children}
    </TmdbContext.Provider>
  );
};

export default TmdbProvider;
