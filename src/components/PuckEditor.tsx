import { FontOptions } from "@/util/FontOptions";
import { Puck, type Config, type DefaultRootProps } from "@measured/puck";

type RootProps = {
    font: string; // this HAS to be "font?" for the config error to go.
} & DefaultRootProps;

type Components = {};

const config: Config<Components, RootProps> = {
    root: {
        fields: {
            font: FontOptions(), // Return type of FontOptions has to be Field<string | undefined> here. But this then will break for using in TextElement config.
        },
    },
    components: {},
};

export function PuckEditor() {
    return <Puck config={config} data={{}} onPublish={() => {}} />;
}
