// import React, { useEffect, useState, useCallback } from "react";

// import Products from "./components/Products/Products";
// import NewProduct from "./components/NewProduct/NewProduct";
// import useHttp from "./use-custum/use-http";

// function App() {
//   const [products, setProducts] = useState([]);

//  const manageData = useCallback((data) => {
//     const loadedProducts = [];
//     for (const productKey in data) {
//       loadedProducts.push({ id: productKey, text: data[productKey].text });
//     }
//     setProducts(loadedProducts);
//   }, []);
//     // const httpRequestData = useHttp( manageData)
//     const httpRequestData = useHttp({url: 'https://react-http-3af9b-default-rtdb.firebaseio.com/products.json'}, manageData)
//     const{isLoading, error, sendHttpRequest: fetchProducts} = httpRequestData
    
//   useEffect(() => {
//     // fetchProducts({url: 'https://react-http-3af9b-default-rtdb.firebaseio.com/products.json'});
//     fetchProducts();
//   }, [fetchProducts]);

//   const productAddHandler = (product) => {
//     setProducts((prevProducts) => prevProducts.concat(product));
//   };

//   return (
//     <React.Fragment>
//       <NewProduct onAddProduct={productAddHandler} />
//       <Products
//         items={products}
//         loading={isLoading}
//         error={error}
//         onFetch={fetchProducts}
//       />
//     </React.Fragment>
//   );
// }

// export default App;

import React, { useEffect, useState, useCallback } from "react";
import Products from "./components/Products/Products";
import NewProduct from "./components/NewProduct/NewProduct";
import useHttp from "./use-custum/use-http";

function App() {
  const [products, setProducts] = useState([]);

  const manageData = useCallback((data) => {
    const loadedProducts = [];
    for (const productKey in data) {
      loadedProducts.push({ id: productKey, text: data[productKey].text });
    }
    setProducts(loadedProducts);
  }, []);

  const generateGetRequestConfig = () => {
    return {
      url: 'https://react-http-3af9b-default-rtdb.firebaseio.com/products.json',
      method: "GET",
    };
  };

  const { isLoading, error, sendHttpRequest: fetchProducts } = useHttp(manageData);

  useEffect(() => {
    const httpRequestConfig = generateGetRequestConfig();
    fetchProducts(httpRequestConfig);
  }, [fetchProducts]);

  const productAddHandler = (product) => {
    setProducts((prevProducts) => prevProducts.concat(product));
  };

  return (
    <React.Fragment>
      <NewProduct onAddProduct={productAddHandler} />
      <Products
        items={products}
        loading={isLoading}
        error={error}
        onFetch={() => fetchProducts(generateGetRequestConfig())}
      />
    </React.Fragment>
  );
}

export default App;
