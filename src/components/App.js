import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { useState, useEffect } from "react";
import { fetchImages } from "./api";
import { Loader } from "./Loader";
import toast, {Toaster} from "react-hot-toast";

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchImageData () {
      try{
        setLoading(true);
        const imageData = await fetchImages(query, page);
  
        if(page === 1){
          setImages(imageData)
        } else if(imageData.length > 0){
          setImages(prevImages => [...prevImages, ...imageData])
        } else{
          toast.error('there are no more images')
          
        }
      }
      catch(error){
        toast.error("Failed to fetch images. Please try again.");
      }
      finally{
        setLoading(false);
      }
    }

    fetchImageData();
  }, [query, page])

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

    return (
      <div className="App">
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery items={images}/>
        {images.length > 0 && !isLoading && <Button onClick={loadMore}/>}
        {isLoading && <Loader/>}
        <Toaster/>
      </div>
    );
  }