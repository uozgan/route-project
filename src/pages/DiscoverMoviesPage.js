import React, { useState } from "react";
import axios from "axios";

export default function DiscoverMobiesPage() {
  const [searchText, set_searchText] = useState("");
  const [status, set_status] = useState("Start Searching");
  const [movies, set_Movies] = useState([]);

  const search = async () => {
    console.log("Start searching for:", searchText);
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    //  Option A: use the browser-native fetch function
    // const data = await fetch(
    //   `https://omdbapi.com/?apikey=dd151cb2&s=${queryParam}`
    // ).then(r => r.json());
    set_status("Searching...");
    // Option B: use the `axios` library like we did on Tuesday
    const response = await axios.get(
      `https://omdbapi.com/?apikey=dd151cb2&s=${queryParam}`
    );
    console.log("Success!", response);
    set_searchText("");

    const listMovie = response.data.Search;
    set_Movies(listMovie);
    console.log("WHAT IS DATA SEARCH", listMovie);

    //   return (
    //     <div>
    //       <h4>
    //         Title: {Title} Year: {Year}
    //       </h4>
    //     </div>
    //   );
    // });
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <h3>{status}</h3>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>
        <div>
          {movies.map(movie => {
            const { Title, Year } = movie;
            return (
              <div>
                <h4>
                  Title: {Title} Year: {Year}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
