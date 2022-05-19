import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Type from "../components/Type";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Type",
  component: Type,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Type>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Type> = (args) => (
  <div>
    <link
      rel="stylesheet"
      href="https://dnlklmn.github.io/ds-tokens/variables.css"
    />
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    </style>
    <Type {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  textStyle: "body1",
  text: "Lorem ipsum!",
};
