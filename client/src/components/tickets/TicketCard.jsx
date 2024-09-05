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
import { useContext, useEffect } from "react";
import { RootContext } from "@/context/RootContext";
import { useNavigate } from "react-router-dom";

export function TicketCard({ className, ...props }) {
  const { ticket } = props;
  const {currentTicket,setCurrentTicket} = useContext(RootContext)
  const navigate = useNavigate()
 

  const handleOpenButton = () => {
    setCurrentTicket(ticket)
    navigate(`${ticket._id}`)
    
  }

  useEffect(()=>{
    
  },[])
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
