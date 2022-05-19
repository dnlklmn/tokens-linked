import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      name: "title",
      title: { name: "string", required: false },
      defaultValue: "Hello",
      description: "demo description",
      table: {
        title: { summary: "string" },
        defaultValue: { summary: "Hello" },
      },
      control: {
        title: "text",
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <link
      rel="stylesheet"
      href="https://dnlklmn.github.io/ds-tokens/variables.css"
    />
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    </style>
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
};
