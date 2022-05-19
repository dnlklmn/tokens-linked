import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../components/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
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
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <div>
    <link
      rel="stylesheet"
      href="https://dnlklmn.github.io/ds-tokens/variables.css"
    />
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    </style>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  gap: "medium",
};
