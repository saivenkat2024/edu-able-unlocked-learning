
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CourseRegistrationForm } from "./CourseRegistrationForm";
import { useState } from "react";

interface CourseRegistrationDialogProps {
  courseId: number;
  courseName: string;
}

export function CourseRegistrationDialog({ courseId, courseName }: CourseRegistrationDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full md:w-auto">Register Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Course Registration</DialogTitle>
          <DialogDescription>
            Fill out the form below to register for {courseName}.
          </DialogDescription>
        </DialogHeader>
        <CourseRegistrationForm 
          courseId={courseId} 
          courseName={courseName} 
          onSuccess={handleSuccess} 
        />
      </DialogContent>
    </Dialog>
  );
}
