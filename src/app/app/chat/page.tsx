import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// Dummy data for conversations
const conversations = [
  {
    id: 1,
    name: 'Lucius Vituperata',
    lastMessage: 'Soluta eipiut partiondo ex est...',
    time: '1 hour',
    avatar: '/dashboard/avatar.svg',
    online: true,
  },
  {
    id: 2,
    name: 'Saepe Dissentiet',
    lastMessage: 'Est animal audire te, vis laoreet...',
    time: '5 hours',
    avatar: '/dashboard/avatar.svg',
    online: true,
  },
  {
    id: 3,
    name: 'Novum Eruditi',
    lastMessage: 'Aliquid vituperata persequeris ad...',
    time: '5 hours',
    avatar: '/dashboard/avatar.svg',
    online: true,
  },
]

// Dummy data for messages
const messages = [
  {
    id: 1,
    sender: 'Novum Eruditi',
    content: 'Cu nec quas voluptaria, mea elit dicta cu, eu possim.',
    timestamp: 'Yesterday',
    avatar: '/dashboard/avatar.svg',
    isMe: false,
  },
  {
    id: 2,
    sender: 'Me',
    content: 'Quem laoreet ne qui, mei et alii dissentiet et?',
    timestamp: 'Yesterday',
    avatar: '/dashboard/avatar.svg',
    isMe: true,
  },
  {
    id: 3,
    sender: 'Novum Eruditi',
    content: 'Te eius dolor mea, te nostro sit no?',
    timestamp: 'Yesterday',
    avatar: '/dashboard/avatar.svg',
    isMe: false,
  },
  {
    id: 4,
    sender: 'Me',
    content:
      'Saepe dissentiet consectetuer eam ne, novum te eum, ex vim malis graeci fastidii. Id ridens urbanitas.',
    timestamp: 'Yesterday',
    avatar: '/dashboard/avatar.svg',
    isMe: true,
  },
]

const ChatPage = () => {
  return (
    <div className='flex h-[calc(100vh-80px)] bg-white'>
      {/* Sidebar */}
      <div className='flex w-80 flex-col border-r'>
        <div className='border-b p-4'>
          <Input type='search' placeholder='Search' className='bg-gray-100' />
        </div>
        <div className='flex-1 overflow-y-auto'>
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className='relative flex cursor-pointer items-center gap-3 p-4 hover:bg-gray-50'
            >
              <div className='relative'>
                <Image
                  src={conversation.avatar}
                  alt={conversation.name}
                  width={40}
                  height={40}
                  className='aspect-square rounded-full bg-blue-50'
                />
                {conversation.online && (
                  <div className='absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500'></div>
                )}
              </div>
              <div className='min-w-0 flex-1'>
                <div className='flex items-baseline justify-between'>
                  <h3 className='truncate font-medium'>{conversation.name}</h3>
                  <span className='text-xs text-gray-500'>
                    {conversation.time}
                  </span>
                </div>
                <p className='truncate text-sm text-gray-500'>
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className='flex flex-1 flex-col'>
        {/* Chat Header */}
        <div className='flex items-center gap-3 border-b p-4'>
          <Image
            src='/dashboard/avatar.svg'
            alt='Current chat'
            width={40}
            height={40}
            className='aspect-square rounded-full bg-blue-50'
          />
          <div>
            <h2 className='font-medium'>Novum Eruditi</h2>
            <p className='text-sm text-green-500'>Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className='flex-1 space-y-4 overflow-y-auto p-4'>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.isMe ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <Image
                src={message.avatar}
                alt={message.sender}
                width={40}
                height={40}
              />
              <div
                className={`max-w-[70%] ${
                  message.isMe
                    ? 'rounded-l-xl rounded-br-xl bg-blue-500 text-white'
                    : 'rounded-r-xl rounded-bl-xl bg-gray-100'
                } p-3`}
              >
                <p>{message.content}</p>
                <span className='mt-1 block text-xs opacity-70'>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className='flex w-full gap-2 border-t bg-white p-4'>
          <Input
            type='text'
            placeholder='Bir şeyler yaz...'
            className='h-14 flex-1'
          />
          <Button className='h-full'>Gönder</Button>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
