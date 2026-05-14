import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = ({ method, Url,value }) => {
    console.log(method, Url,value);

    let [movie, setMovie] = useState([]);
    let [isloading, setisLoading] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchMovie = async () => {

            const response = await axios.get(Url);

            const { status, data } = response;

            setMovie(data);

       

            if (response) {
                setisLoading(false)
            }

            //     if (!response.ok) {

            //         alert("Fetch failed")
            //     }
            //     const data = await response.json();

            //     if (isMounted) {

            //        setMovie(data);
            //     }
            // } catch (err) {
            //      if (isMounted) {

            //       setError(err.message);
            //     }


            // } finally {
            //    if (isMounted) {

            //        setisLoading(false);
            //     }


            // };
        }
        fetchMovie();

        return () => {
            isMounted = false;
        }

    }, [value]);
    return {
        movie, error, isloading, setMovie
    }
}

export default useFetch;