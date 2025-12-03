import type { ReactNode } from "react"
import { Mail } from "lucide-react"

import { Button } from "./button"

interface ILoginButton {
    onClick?: () => void
    type: "facebook" | "google" | "email"
}

const loginTypesMap: Record<
    ILoginButton["type"],
    { label: string; icon: ReactNode }
> = {
    facebook: {
        label: "Continue with Facebook",
        icon: (
            <img
                src="/facebook.svg"
                alt="Facebook"
                className="size-5"
                aria-hidden="true"
            />
        ),
    },
    google: {
        label: "Continue with Google",
        icon: (
            <img
                src="/google.svg"
                alt="Google"
                className="size-5"
                aria-hidden="true"
            />
        ),
    },
    email: {
        label: "Continue with email",
        icon: <Mail className="size-5" aria-hidden="true" />,
    },
}

const LoginButton = ({ onClick, type }: ILoginButton) => {
    const { label, icon } = loginTypesMap[type]

    return (
        <Button
            variant="outline"
            className="rounded-3xl py-6 px-10 border-black text-black"
            onClick={onClick}
        >
            <span className="flex items-center justify-start gap-3">
                {icon}
                {label}
            </span>
        </Button>
    )
}

export default LoginButton
