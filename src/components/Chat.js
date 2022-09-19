import React, {useState, useEffect} from 'react'
import { db } from '../firebase.js'
import SendMessage from './SendMessage.js'

function Chat() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
      db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
      })
  }, [] )
  return (
    <div>
        {messages.map(({ id, text, photoURL, createdAt}) => (
          <div key={id} class="p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow">
            <div class="flex">
                <img class="w-8 h-8 rounded-full shadow-lg" src={photoURL}/>
                <div class="ml-3 text-sm font-normal">
                    <div class="mb-2 text-sm text-black  font-normal">{text}</div>
                    
                </div>
            </div>
          </div>
        ))}
      <SendMessage/>
    </div>
  )
}

export default Chat