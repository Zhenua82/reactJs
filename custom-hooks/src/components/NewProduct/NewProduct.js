// import { useState } from "react";

// import Section from "../UI/Section";
// import ProductForm from "./ProductForm";
// import useHttp from "../../use-custum/use-http";

// const NewProduct = (props) => {


//   function manageData(productText, data){
//     const generatedId = data.name;
//       const createdProduct = { id: generatedId, text: productText };

//       props.onAddProduct(createdProduct);
//       return productText
//   }

//   const generateRequestConfig = (productText) => {
//     return {
//       url: 'https://react-http-3af9b-default-rtdb.firebaseio.com/products.json',
//       method: "POST",
//       body: { text: productText },
//       headers: {
//         "Content-Type": "application/json",
//       }
//     };
//   };

//     const httpRequestData = useHttp(generateRequestConfig, manageData )

//     // const httpRequestData = useHttp
//     // ({
//     //   url: 'https://react-http-3af9b-default-rtdb.firebaseio.com/products.json',
//     //   method: "POST",
//     //   body: { text: productText },
//     //   // body: { text: 'rrrr' },
//     //   headers: {
//     //         "Content-Type": "application/json",
//     //       }
//     // }, manageData )

//     const{isLoading, error, sendHttpRequest: enterProduct} = httpRequestData

//      const enterProductHandler = async (productText) => {
//       enterProduct({
//         url: 'https://react-http-3af9b-default-rtdb.firebaseio.com/products.json',
//         method: "POST",
//         body: { text: productText },
//         headers: {
//               "Content-Type": "application/json",
//             }
//       }, manageData.bind(null, productText))}



//   // const enterProductHandler = async (productText) => {
//   //   setIsLoading(true);
//   //   setError(null);
//   //   try {
//   //     const response = await fetch(
//   //       "https://react-http-3af9b-default-rtdb.firebaseio.com/products.json",
//   //       {
//   //         method: "POST",
//   //         body: JSON.stringify({ text: productText }),
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //       }
//   //     );

//   //     if (!response.ok) {
//   //       throw new Error("Ошибка запроса.");
//   //     }

//   //     const data = await response.json();

//   //     const generatedId = data.name;
//   //     const createdProduct = { id: generatedId, text: productText };

//   //     props.onAddProduct(createdProduct);
//   //   } catch (e) {
//   //     setError(e.message || "Что-то пошло не так...");
//   //   }
//   //   setIsLoading(false);
//   // };

//   return (
//     <Section>
//       <ProductForm onEnterProduct={enterProductHandler} loading={isLoading}/>
//       {error && <p>{error}</p>}
//     </Section>
//   );
// };

// export default NewProduct;


import Section from "../UI/Section";
import ProductForm from "./ProductForm";
import useHttp from "../../use-custum/use-http";

const NewProduct = (props) => {
  function manageData(productText, data) {
    const generatedId = data.name;
    const createdProduct = { id: generatedId, text: productText };

    props.onAddProduct(createdProduct);
    return productText;
  }

  const generateRequestConfig = (productText) => {
    return {
      url: 'https://react-http-3af9b-default-rtdb.firebaseio.com/products.json',
      method: "POST",
      body: { text: productText },
      headers: {
        "Content-Type": "application/json",
      }
    };
  };

  const { isLoading, error, sendHttpRequest: enterProduct } = useHttp(manageData);

  const enterProductHandler = async (productText) => {
    const httpRequestConfig = generateRequestConfig(productText);
    enterProduct(httpRequestConfig, productText);
  };

  return (
    <Section>
      <ProductForm onEnterProduct={enterProductHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewProduct;
