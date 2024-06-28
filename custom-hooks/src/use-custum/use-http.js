// import { useState, useCallback} from "react";

// function useHttp( httpRequest, manageData){

//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
   

//     // const sendHttpRequest = useCallback (async (httpRequest) => {
//     const sendHttpRequest = useCallback (async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//             const response = await fetch(
//                 // "https://react-http-3af9b-default-rtdb.firebaseio.com/products.json"
//                 httpRequest.url, {
//                     method: httpRequest.method ? httpRequest.method : 'GET',
//                     headers: httpRequest.headers ? httpRequest.headers : {},
//                     body: httpRequest.body ? JSON.stringify( httpRequest.body ) : null
//                 }
//               );
        
//               if (!response.ok) {
//                 throw new Error("Ошибка запроса.");
//               }
//               const data = await response.json();
//               manageData(data);
//             }catch (err) {
//               setError(err.message || "Что-то пошло не так...");
//             }
//             setIsLoading(false);
//           }, [manageData]);
//           return {isLoading, error, sendHttpRequest}
//         };

// export default useHttp

import { useState, useCallback } from "react";

function useHttp(manageData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendHttpRequest = useCallback(
    async (httpRequestConfig, productText = null) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(httpRequestConfig.url, {
          method: httpRequestConfig.method ? httpRequestConfig.method : 'GET',
          headers: httpRequestConfig.headers ? httpRequestConfig.headers : {},
          body: httpRequestConfig.body ? JSON.stringify(httpRequestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error("Ошибка запроса.");
        }

        const data = await response.json();
        if (productText) {
          manageData(productText, data);
        } else {
          manageData(data);
        }
      } catch (err) {
        setError(err.message || "Что-то пошло не так...");
      }
      setIsLoading(false);
    },
    [manageData]
  );

  return { isLoading, error, sendHttpRequest };
}

export default useHttp;