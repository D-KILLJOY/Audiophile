import { clsx } from "clsx";

type InputProps = {
    variant?: "text" | "number";
    name: string;
    value: string;
    error: boolean;
    placeholder: string;
};

type RadioProps = {
    name: string;
    value: string;
    label: string;
};

export function Input({
    variant = "text",
    placeholder,
    error,
    name,
    value,
}: InputProps) {
    return (
        <input
            type={variant}
            name={name}
            value={value}
            placeholder={placeholder}
            className={clsx(
                "text-[0.875rem] font-bold h-14 rounded-lg px-6 caret-orange placeholder:text-black placeholder:opacity-40 focus:border-orange focus:border focus:outline-0",
                error ? "border-[#cd2c2c] border-2" : "border border-[#cfcfcf]",
            )}
        ></input>
    );
}

export function Radio({ name, value, label }: RadioProps) {
    return (
        <label className="border border-[#cfcfcf] text-[0.875rem] font-bold h-14 rounded-lg px-6 focus:border-orange hover:border-orange flex items-center gap-4 cursor-pointer">
            <input
                type="radio"
                name={name}
                value={value}
                className={"w-5 h-5 checked:bg-orange"}
            />{" "}
            {label}
        </label>
    );
}
