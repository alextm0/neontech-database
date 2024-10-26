// page.tsx

"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
}); 

const AddPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
    } catch (error) {
      console.error("Error adding page", error);
      
    }
  };

  return (
    <div className="flex items-center justify-center pt-40">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course title</FormLabel>
                <FormControl className="relative  ">
                  <Input
                    placeholder="e.g. 'Advanced web development'"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className=" rounded p-2">
            Add Page
          </button>
        </form>
      </Form>
    </div>
  );
};

export default AddPage;
