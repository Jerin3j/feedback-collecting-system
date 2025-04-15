import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StarRatings } from "@/components/StarRatings";
import { Button } from "@/components/ui/button";

interface FeedbackType {
  id: string,
  name: string;
  email: string;
  phone: string;
  rating: number;
  feedback: string;
}

export const Admin = () => {
  const [page, setPage] = useState(1);
  const [feedbacks, getFeedbacks] = useState<FeedbackType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc"); 

  const limit = 5;

  useEffect(() => {
    const getForms = async () => {
      const res = await fetch(
        `http://localhost:3001/admin?page=${page}&limit=${limit}&order=${sortOrder}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(data);
      getFeedbacks(data.feedbacks);
      setTotalPages(Math.ceil(data.totalCount / limit));
    };
    getForms();
  }, [page, sortOrder]);

  return (
    <div>
      <Table>
        <TableCaption>Only Admin can view</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Ratings</TableHead>
            <TableHead className="flex justify-between items-center my-3">
              Feedback

              <Button
                className="cursor-pointer"
                variant={"outline"}
                onClick={() =>
                  setSortOrder(sortOrder === "desc" ? "asc" : "desc")
                }
              >
                Sort by: {sortOrder === "desc" ? "Newest" : "Oldest"}
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {feedbacks.map((feedback: FeedbackType) => (
            <TableRow key={feedback.id}>
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

      <Pagination className="mt-8 flex items-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => page > 1 && setPage(page - 1)} />
          </PaginationItem>
          <PaginationItem>
            Page {page} of {totalPages}
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => page < totalPages && setPage(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
