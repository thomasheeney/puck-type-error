import { FontOptions } from "@/util/FontOptions";
import type { ComponentConfig } from "@measured/puck";

export type TextProps = {
    font: string;
};

export const TextElement: ComponentConfig<TextProps> = {
    fields: {
        font: FontOptions(true),
    },
    render: () => {
        return <p>...not important...</p>;
    },
};
