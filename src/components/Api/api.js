export function getResponse() { 
    const fetchPromise =
        fetch(
        "https://painassasin.online/catalog/track/all/",
        {
          method: "GET",
        }
      );
      fetchPromise.then((response) => {
        const jsonPromise = response.json();

        jsonPromise.then((responseData) => {           
         allTrack.push(responseData.map((track) => {
            return {
              author: track.author,
              titleTrack: track.name,
              album: track.album,
              time: track.duration_in_seconds
              };           
          }));                       
        });        
      })
      const allTrack = [];   
      return allTrack    
    }    
  

 
      function AddLogin() {
        fetch(
          "https://painassasin.online/user/login/",
          {
            method: "POST",
            body: JSON.stringify({
              "password": "",
              "email": ""
            }),
          }
        ).then((response) => {
          response.json().then((responseData) => {
            commentJSON = responseData.result;           
          });
          0;
        });
      }
        
    