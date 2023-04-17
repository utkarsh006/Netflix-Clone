import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";
import MovieModal from "./Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Row = ({ title, id, fetchUrl, isLargeRow }) => {
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  const handleClick = (item) => {
    setModalOpen(true);
    setMovieSelected(item);
  };

  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  return (
    <>
      <section>
        <h2>{title}</h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          breakpoints={{
            1378: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            998: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            625: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}>
          <div className="slider">
            <div className="slider__arrow-left">
              <span
                className="arrow"
                onClick={() => {
                  document.getElementById(id).scrollLeft -=
                    window.innerWidth - 80;
                }}>
                {"<"}
              </span>
            </div>
            <div id={id} className="row__posters">
              {movies.map((item) => (
                <SwiperSlide>
                  <img
                    key={item.id}
                    className={`row__poster ${
                      isLargeRow && "row__posterLarge"
                    }`}
                    src={`https://image.tmdb.org/t/p/original/${
                      isLargeRow ? item.poster_path : item.backdrop_path
                    }`}
                    alt={item.name}
                    onClick={() => handleClick(item)}
                  />
                </SwiperSlide>
              ))}
            </div>
            <div className="slider__arrow-right">
              <span
                className="arrow"
                onClick={() => {
                  document.getElementById(id).scrollLeft +=
                    window.innerWidth - 80;
                }}>
                {">"}
              </span>
            </div>
          </div>
        </Swiper>
        {modalOpen && (
          <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
        )}
      </section>
    </>
  );
};

export default Row;
