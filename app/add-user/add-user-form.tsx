"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import addUserAction from "./user-action";
import { useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function AddUserForm() {
  const [state, formAction] = useFormState(addUserAction, {});
  const [alertOpen, setAlertOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  useEffect(() => {
    if (state && "status" in state && state.status === "no") {
      setAlertOpen(true);
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="w-full max-w-sm flex flex-col space-y-4"
    >
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Error</AlertDialogTitle>
            <AlertDialogDescription>
              E-mail already exists. Please enter a different e-mail.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>OK</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Add user</CardTitle>
          <CardDescription>
            Enter an email and password below to add a new user.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              autoComplete="off"
              id="email"
              name="user-email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Add user</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
