'use client'

import React, { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Message {
  id: number
  sender: 'user' | 'support'
  text: string
  timestamp: Date
  avatar?: string
}

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'support',
      text: 'Hello! How can we help you today?',
      timestamp: new Date(Date.now() - 5000),
      avatar: '👤',
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')

    // Simulate support response
    timeoutRef.current = setTimeout(() => {
      const supportMessage: Message = {
        id: Date.now() + 1,
        sender: 'support',
        text: 'Thanks for your message! We\'ll get back to you shortly.',
        timestamp: new Date(),
        avatar: '👤',
      }
      setMessages((prev) => [...prev, supportMessage])
    }, 1000)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
        aria-label="Open chat support"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 bg-white rounded-lg shadow-xl border border-border overflow-hidden flex flex-col max-h-96">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Timbuktu Support</p>
              <p className="text-xs text-primary-foreground/80">We typically respond in minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary/80 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 bg-white flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend()
              }}
              className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              onClick={handleSend}
              className="bg-primary text-primary-foreground hover:bg-primary/90 p-2"
              size="sm"
              disabled={!input.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
