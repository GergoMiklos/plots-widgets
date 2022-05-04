import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput, {TextInputProps} from './text-input';

export default {
    title: "PlotoloWidgets/TextInput",
    component: TextInput,
} as ComponentMeta<typeof TextInput>;

const defaultArgs: TextInputProps = {
    label: 'This is a TextInput widget:',
    value: 'This is a TextInput widget!',
    onChange: (value: any) => console.log(value)
}

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput { ...args} />;

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Long = Template.bind({});
Long.args = {
    label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
};