import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];
export function TicketCardSmall({ className, ...props }) {
  const { ticket,setOpenTicket,setCurrentOpenTicket } = props;

  const handleOpenButton = () => {
    setOpenTicket(true)
    setCurrentOpenTicket(ticket)
  }
  return (
    <Card
      className={cn("w-full flex flex-col justify-between", className)}
      {...props}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
        <p>TK-200</p>
        <p className={cn(
                "flex rounded-full text-xs px-2 py-0.5 text-white",
                ticket.status == "New"
                  ? "bg-green-500"
                  : ticket.status == "Open"
                  ? "bg-sky-500"
                  : "bg-gray-500"
              )}>{ticket.status}</p>
        </div>
        <CardTitle className="text-lg">{ticket.title}</CardTitle>
        <CardDescription className="text-sm">{ticket.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onClick={handleOpenButton}>
           Open
        </Button>
      </CardFooter>
    </Card>
  );
}
