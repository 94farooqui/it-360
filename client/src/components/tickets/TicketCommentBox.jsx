import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import { addTicketComment } from '@/services/api'
import { RootContext } from '@/context/RootContext'

const initalComment = {
    content: ""
}

const TicketCommentBox = ({ticketId,setShowCommentBox}) => {
    const [newComment,setNewComment] = useState(initalComment)
    const {currentTicket,setCurrentTicket} = useContext(RootContext)
    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        setCurrentTicket({...currentTicket,comments: [...currentTicket.comments, newComment]})
        const response = await addTicketComment(newComment,ticketId)
        console.log(response)
        if(response){
            setNewComment(initalComment)
            setShowCommentBox(false)
        }
    }
  return (
    <div>
        <form onSubmit={handleCommentSubmit}>
            <textarea name='content' defaultValue={newComment.content} onChange={(e)=>setNewComment({...newComment, content:e.target.value})} className='resize-none w-full rounded-lg p-4 border text-sm overflow-auto focus:outline-none focus:border-slate-400 focus:bg-slate-200' rows="3"  />
            <div className='w-full flex justify-end gap-2 mt-2'>
                <Button variant="outline" onClick={()=>setShowCommentBox(false)}>Cancel</Button>
                <Button >Save</Button>

            </div>
        </form>
    </div>
  )
}

export default TicketCommentBox