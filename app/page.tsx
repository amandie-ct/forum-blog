import Header from "@/components/ui/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LoginButton from "@/components/ui/loginButton"

export default function Home() {
  return (
    <Dialog>
      <main className="flex min-h-screen items-center justify-center bg-gray-100 w-full">
        <Header
          cta={
            <DialogTrigger asChild>
              <Button
                variant="default"
                size="sm"
                className="bg-mainPink hover:bg-darkPink rounded-xl py-4 px-4 text-sm"
              >
                Get Started
              </Button>
            </DialogTrigger>
          }
        />
        <section className="flex justify-between items-center relative w-full">
          <div className="absolute z-10 mr-200 pl-32">
            <h1 className="font-mono font-bold text-8xl">Human</h1>
            <h1 className="font-mono font-bold text-8xl">stories & ideas</h1>
            <p className="font-sans text-xl mt-10">
              A place to read, write, and deepen your understanding
            </p>
            <DialogTrigger asChild>
              <Button
                variant="default"
                size="lg"
                className="bg-mainPink hover:bg-darkPink rounded-3xl py-6 px-10 text-lg mt-8"
              >
                Start reading
              </Button>
            </DialogTrigger>
          </div>
          <img
            src="/typewriter_transparent.png"
            alt="Typewriter illustration"
            className="relative ml-[60%]"
          />
        </section>
        <DialogContent className="sm:max-w-md rounded-sm p-10">
          <DialogHeader>
            <DialogTitle className="text-center pb-10 text-bold text-2xl font-mono">Join Forum.</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col gap-4 mb-6 my-4">
                <LoginButton type="google" />
                <LoginButton type="facebook" />
                <LoginButton type="email" />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div><p className="text-black text-sm text-center py-4">Already have an account? <Link href="/posts/new" className="underline">Sign in</Link></p>
              <p className="text-gray-600 text-xs text-center pb-4">By clicking "Sign up", you accept Forum's <Link href="/posts/new" className="underline">Terms of service</Link> and <Link href="/posts/new" className="underline">Privacy policy</Link>.</p></div>
          </DialogFooter>
        </DialogContent>
      </main>
    </Dialog>
  )
}
