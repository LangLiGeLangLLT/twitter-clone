import React from 'react'
import CommentItem from './CommentItem'

interface CommentFeedProps {
  comments?: Record<string, any>[]
}

export default function CommentFeed({ comments = [] }: CommentFeedProps) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  )
}
