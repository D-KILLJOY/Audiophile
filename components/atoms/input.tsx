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
        <label className="border border-[#cfcfcf] text-[0.875rem] font-bold h-14 rounded-lg px-4 focus:border-orange hover:border-orange flex items-center gap-4 cursor-pointer">
            <input
                type="radio"
                name={name}
                value={value}
                className={"w-5 h-5 peer hidden"}
            />{" "}
            <div className="w-5 h-5 rounded-full border border-[#cfcfcf] flex items-center justify-center peer-checked:[&>div]:opacity-100 ">
                <div className="w-2.5 h-2.5 rounded-full bg-orange opacity-0 "></div>
            </div>
            {label}
        </label>
    );
}

export function Counter() {
    return (
        <div className="bg-ash flex w-30 h-12">
            <button className="w-10 opacity-25 font-bold text-[0.8125] cursor-pointer hover:text-orange hover:opacity-100">
                -
            </button>
            <input
                className="w-10 font-bold text-[0.8125] text-center"
                type="number"
                value={1}
            />
            <button className="w-10 opacity-25 font-bold text-[0.8125] cursor-pointer hover:text-orange hover:opacity-100">
                +
            </button>
        </div>
    );
}
