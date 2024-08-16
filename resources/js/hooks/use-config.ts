import { Theme } from "@/types/themes";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect, useState } from "react";

type Config = {
    theme: Theme["name"];
    radius: number;
};

const configAtom = atomWithStorage<Config>("config", {
    theme: "zinc",
    radius: 0.5,
});

export function useConfig() {
    return useAtom(configAtom);
}

export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        });

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}
