import { clsx } from "clsx";

type ButtonProps = {
    variant?: "primary" | "outline" | "black";
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
    variant = "primary",
    children,
    className,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-orange text-white hover:bg-light-orange",
        black: "bg-black text-white hover:bg-[#4c4c4c]",
        outline:
            "border border-black text-black hover:bg-black hover:text-white",
        outlineless: "flex gap items-center gap-2 h-4.5 w-14.5",
    };

    return (
        <button
            className={clsx(
                "uppercase w-40 h-12 font-bold text-[0.8125rem] cursor-pointer",
                variants[variant],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}
