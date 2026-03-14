import { Button } from "@/components/atoms/button";
import { Input, Radio } from "@/components/atoms/input";
import arrowRight from "@/public/assets/shared/icon-arrow-right.svg";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Input
                variant="text"
                placeholder="Insert your name"
                name="btn"
                value="nnna"
                error={false}
            ></Input>
            <Input
                variant="number"
                placeholder="Insert your number"
                name="btn"
                value="nnna"
                error={false}
            ></Input>

            <Radio name="tansfer" label="e-Money" value="e-Money" />
        </>
    );
}
