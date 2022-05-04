import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from './text';

export default {
    title: "PlotoloWidgets/Text",
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
    value: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    value: 'This is a text widget.',
};