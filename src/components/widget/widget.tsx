import { default as Text } from '../text'
import { default as TextInput } from '../text-input'
import '/dist/index.css'

export interface WidgetProps {
    widget_type: string;
    props: any
}

export const WIDGET_TYPES = {
    TEXT: 'TEXT',
    TEXT_INPUT: 'TEXT_INPUT',
}

function Widget({ widget_type, ...props }: WidgetProps) {
    console.log("widget:", widget_type, props)
    return ({
        /*
        // @ts-ignore */
        'TEXT': <Text {...props} />,
        /*
        // @ts-ignore */
        'TEXT_INPUT': <TextInput {...props} />,
    }[widget_type])
}

export default Widget;