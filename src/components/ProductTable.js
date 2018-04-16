import React from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

const ProductRow = ({ product }) => {
  const name = product.stocked ? product.name: <span style={{color: 'red'}}>{product.name}</span>
  const price = product.stocked ? product.price: <span style={{color: 'red'}}>{product.price}</span>
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

const ProductTable = ({ products }) => {
  // console.log(products); // retorna el array de objetos
  // Aquí se tendrá las categorias y los productos
  // 2do paso: Rows ahora tiene ProductCategoryRow
  const rows = [];
  // 2do paso: Ahora LastCategory vale Sportings Goods
  let lastCategory = null;
  products.map(product => {
    // console.log(product)// cada objeto dentro del array
    // Al mostrarse el primer objeto del array, el product.category es Sportings Goods, y después de 3 veces, es Electronics
    // Al ser True, ya que LastCategory es null, entrará la condición
    // 2do paso: al 2do objeto, como product.category SI es igual a Sportgins goods, entonces pasa a la otra condicion
    if (product.category !== lastCategory) {

      // Añado a Rows el product Category con la primera categoría.
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }

    // Ahora Last Category es Sportings good.
    lastCategory = product.category;
    // 2do paso: añadir los productos que pertenecen a sportings good que esta en ProductRow
    rows.push(<ProductRow key={product.name} product={product}/>)
  })

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default ProductTable;