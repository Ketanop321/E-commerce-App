import React from 'react'
import { FaPlus } from 'react-icons/fa'

// Replace this with your actual server endpoint
const server = 'hasdfasfdsfa'

type ProductsProps = {
  productId: string
  price: number
  photo: string
  stock: number
  handler?: (productId: string) => void
}

const ProductCard = ({
  productId,
  price,
  photo,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="productcard">
      <img src={`${server}/${photo}`} alt="product" />
      <p>{productId}</p>
      <span>{price}</span>

      <div>
        <button onClick={() => handler?.(productId)}>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
