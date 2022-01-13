

 export const getGifs = async (collection) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${collection}&limit=10&api_key=qSEajn2uQtYUmIKbKqLo0U22uLE2PX1S`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      };
    });

    return gifs;
  };