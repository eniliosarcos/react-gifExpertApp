import PropTypes from "prop-types";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifImg from "../GifImg/GifImg";
import "./GifCollection.css";

const GifCollection = ({ collection }) => {

  const {data:gifs, loading} = useFetchGifs(collection);

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown animate__faster">{collection}</h3>
      { loading && <p className="animate__animated animate__flash animate__slow animate__infinite">Cargando...</p>}
      <div className="grid">
        {
            gifs.map(({ id, title, url }) => <GifImg key={id} title={title} url={url}></GifImg>)
        }
      </div>
    </>
  );
};

GifCollection.propTypes = {};

export default GifCollection;
