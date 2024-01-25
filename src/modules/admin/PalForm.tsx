"use client";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputForm } from "@/components/ui/input-form";
import { addPal } from "./actions/PalAction";
import { formSchema } from "./PalForm_schema";

export const PalForm = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      no: "",
      name: "",
      picture: "",
      worksuitability: [
        {
          worksuitabilityName: "kindling",
          worksuitabilityLevel: 1,
        },
      ],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      await addPal(values);

      form.reset();

      toast({
        title: "Success",
        description: "Pal added successfully",
      });
    });
  }

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "worksuitability",
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg space-y-8"
      >
        <FormField
          control={form.control}
          name="no"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No.</FormLabel>
              <FormControl>
                <Input placeholder="001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Lamball" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Picture</FormLabel>
              <FormControl>
                <Input placeholder="https://picture.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col space-y-4">
          <Label>Work Suitability</Label>
          <FormField
            control={form.control}
            name="worksuitability"
            render={({ field }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex items-end space-x-4">
                    <InputForm
                      control={form.control}
                      name={`worksuitability.${index}.worksuitabilityName`}
                      placeholder="Kindling"
                    />
                    <InputForm
                      control={form.control}
                      name={`worksuitability.${index}.worksuitabilityLevel`}
                      placeholder="1"
                    />
                    <Button type="button" onClick={() => remove(index)}>
                      Remove
                    </Button>
                  </div>
                ))}
              </>
            )}
          />

          <Button
            type="button"
            onClick={() =>
              append({
                worksuitabilityName: "kindling",
                worksuitabilityLevel: 1,
              })
            }
          >
            Add
          </Button>
        </div>

        <div className="flex space-x-4"></div>
        <Button type="submit">{isPending ? "Adding..." : "Add"}</Button>
      </form>
    </Form>
  );
};
