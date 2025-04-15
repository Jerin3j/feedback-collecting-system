import React, { useEffect, useState } from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { StarRatings } from '@/components/StarRatings'

interface FeedbackType {
  name: string
  email: string
  phone: string
  rating: number
  feedback: string
}

export const Admin = () => {
  const [feedbacks, getFeedbacks] = useState<FeedbackType[]>([])

  useEffect(() => {
    const getForms = async () => {
      const res = await fetch('http://localhost:3001/admin', {
        method: 'GET',
      })
      const data = await res.json()
      console.log(data)
      getFeedbacks(data)
    }
    getForms()
  }, [])

  return (
    <Table>
      <TableCaption>Only Admin can view</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Ratings</TableHead>
          <TableHead>Feedback</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {feedbacks.map((feedback: FeedbackType) => (
          <TableRow key={feedback.name}>
            <TableCell>{feedback.name}</TableCell>
            <TableCell>{feedback.phone}</TableCell>
            <TableCell>{feedback.email}</TableCell>
            <TableCell>
              <StarRatings key={feedback.name} rating={feedback.rating} />
            </TableCell>
            <TableCell>{feedback.feedback}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
