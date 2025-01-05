'use client'

import { X } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'

interface CreditsModalProps {
  isOpen: boolean
  onClose: () => void
  credits: number
  totalCredits: number
}

export function CreditsModal({
  isOpen,
  onClose,
  credits,
  totalCredits,
}: CreditsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md'>
        <div className='relative'>
          {/* Close button */}
          <button
            onClick={onClose}
            className='absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
          >
            <X className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </button>

          {/* Content */}
          <div className='space-y-6 py-6'>
            <div className='space-y-2'>
              <h2 className='text-2xl font-bold tracking-tight'>
                Your credits
              </h2>

              <div className='flex items-center justify-center gap-2 text-4xl font-bold'>
                <span>{credits}</span>
                <span className='text-gray-400'>/</span>
                <span>{totalCredits}</span>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>What is a credit?</h3>

              <div className='space-y-3'>
                <div className='flex items-start gap-3'>
                  <div className='flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-400 text-lg font-bold'>
                    -
                  </div>
                  <p>Use 1 credit each time you apply to a campaign.</p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-400 text-lg font-bold'>
                    +
                  </div>
                  <p>Get your credit back when you publish your review.</p>
                </div>
              </div>
            </div>

            <p className='text-sm text-gray-500'>
              Everyone starts with 1 credit, get more by completing your profile
            </p>

            <button
              onClick={onClose}
              className='w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition-colors hover:bg-blue-600'
            >
              Got it!
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
