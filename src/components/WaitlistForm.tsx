import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"

const waitlistSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email." }),
})

type WaitlistFormValues = z.infer<typeof waitlistSchema>

export default function WaitlistForm() {
    const form = useForm<WaitlistFormValues>({
        resolver: zodResolver(waitlistSchema),
        defaultValues: { email: "" },
    })

    const onSubmit = async (values: WaitlistFormValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        toast("You're in!",{
            description: `Thanks for joining our waitlist, ${values.email}`,
        })
        form.reset()
    }

    return (
        <div className="mx-auto max-w-md p-6">


            {/* ✅ Form provider wraps here */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex gap-2"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem className="flex-1">
                                <FormControl className={"p-6"}>
                                    <Input placeholder="you@example.com" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className={"p-6"}>Join</Button>
                </form>
            </Form>
        </div>
    )
}
