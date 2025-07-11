import React from 'react';
const ReactContext = React.createContext({
    products: [],
    setProduct: () => {},
    productLoading: false,
    setProductLoading: () => {},
    productError: null,
    setProductError: () => {}
})
export default ReactContext;