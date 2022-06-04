import React from 'react'
import { MlProduct } from '../interfaces/mlProduct'

type Props = {
    product:MlProduct
}

const ProductCard = ({product}: Props) => {
  return (
    <div className='flex-row'>
        <div className='grid grid-cols-5'>
            <div className='col-span-1'>
                <img src={product.thumbnail} className="max-h-20" alt="" />
            </div>
            <div>
                <div className='font-bold'>{product.title}</div>
                <div>${product.price}</div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard