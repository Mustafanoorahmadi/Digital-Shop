import React from 'react'
import { getProducts } from '../services'
import ProductTable from '../components/ProductTable'

async function ProductDashboardView() {
    const products = await getProducts()
  return (
      <div>
          <ProductTable products={products} />
    </div>
  )
}

export default ProductDashboardView