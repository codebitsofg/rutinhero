import { ChevronRight, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import ProductModal from './ProductModal'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'

interface ShopProductWithDetailsProps {}

const ShopProductWithDetails = ({}: ShopProductWithDetailsProps) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size={'lg'}
            className='flex items-center rounded-full bg-blue-600 py-[23px] text-lg text-white hover:bg-blue-500'
          >
            Buy Now
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Shop</DialogTitle>
          </DialogHeader>
          <ProductModal />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ShopProductWithDetails
