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
export function TicketCard({ className, ...props }) {
  const { ticket,setOpenTicket,setCurrentOpenTicket } = props;

  const handleOpenButton = () => {
    setOpenTicket(true)
    setCurrentOpenTicket(ticket)
  }
  return (
    <Card
      className={cn("w-[380px] flex flex-col justify-between", className)}
      {...props}
    >
      <CardHeader>
        <p>TK-200</p>
        <CardTitle>{ticket.title}</CardTitle>
        <CardDescription>{ticket.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span
              className={cn(
                "flex h-3 w-3 translate-y-1 rounded-full ",
                ticket.status == "New"
                  ? "bg-green-500"
                  : ticket.status == "Open"
                  ? "bg-sky-500"
                  : "bg-gray-500"
              )}
            />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-600 leading-none">
                Status
              </p>
              <p className="text-sm text-muted-foreground">{ticket.status}</p>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full " />
            {ticket.assignee && (
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-600 leading-none">
                  Assigne
                </p>
                <p className="text-sm text-muted-foreground">
                  {ticket.assignee.fullname}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleOpenButton}>
           Open
        </Button>
      </CardFooter>
    </Card>
  );
}
