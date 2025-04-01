// import Footer from "@/components/footer";
// import Header from "@/components/header";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// export function ProfileForm() {
//   const formSchema = z.object({
//     username: z
//       .string()
//       .min(2, "Username is required")
//       .max(50, "Username cannot exceed 50 characters"),
//   });

//   // Utilisation de useForm sans TypeScript, pas besoin de définir un type
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   function onSubmit(values) {
//     // Faites quelque chose avec les valeurs du formulaire
//     // ✅ Celles-ci seront validées et de type sûr
//     console.log(values);
//   }

//   return (
//     <>
//       <Header />
//       <main className="max-w-[1120px] m-auto">
//         <h1 className="text-[27px] text-center text-[#333] pt-20 pb-5 sm:text-[37px]">
//           Get in touch
//         </h1>
//         <p className="text-[19px] text-center sm:text-[30px]">
//           The creative web & mobile studio and focused on brand identity, web
//           development, and social marketing.
//         </p>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//               control={form.control}
//               name="username"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Username</FormLabel>
//                   <FormControl>
//                     <Input placeholder="shadcn" {...field} />
//                   </FormControl>
//                   <FormDescription>
//                     This is your public display name.
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit">Submit</Button>
//           </form>
//         </Form>
//       </main>
//       <Footer />
//     </>
//   );
// }
