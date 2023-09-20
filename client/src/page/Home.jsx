import axios from "axios";
import { useEffect, useState } from "react";
import Genre from "../component/genre/Genre";
import Pagination from "./../component/pagination/Pagination";
import Search from "../component/search/Search";
import Sort from "../component/sort/Sort";
import Table from "../component/table/table";

const Home = () => {
  const baseUrl = "http://localhost:5000/movies";

  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const url = `${baseUrl}?page=${page}&search=${search}&sort=${
          sort.sort
        },${sort.order}&filter=${filter.toString()}`;

        axios.get(url).then((res) => {
          console.log(res.data);
          setData(res?.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [page, sort, filter, search]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <img src="./images/logo.png" alt="logo" className="logo" />
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className="body">
          <div className="table_container">
            <Table movies={data.movies ? data.movies : []} />
            <Pagination
              page={page}
              limit={data.limit ? data.limit : 0}
              total={data.total ? data.total : 0}
              setPage={(page) => setPage(page)}
            />
          </div>
          <div className="filter_container">
            <Sort sort={sort} setSort={(sort) => setSort(sort)} />
            <Genre
              filterGenre={filter}
              genres={data.genres ? data.genres : []}
              setFilterGenre={(genre) => setFilter(genre)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
