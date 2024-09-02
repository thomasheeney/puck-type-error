import type { Field } from "@measured/puck";

export function FontOptions(allowInherit = false): Field<string> {
    return {
        type: "select",
        options: [
            ...(allowInherit ? [{ label: "Inherit", value: "inherit" }] : []),
            { label: "Font A", value: "A" },
        ],
    };
}
