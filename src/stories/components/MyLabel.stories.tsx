import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: {
      control: "select",
    },
    fontColor: {
      color: "color",
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "text-secondary",
};
export const Terciary = Template.bind({});
Terciary.args = {
  size: "normal",
  color: "text-tertiary",
};

export const CustomfondColor = Template.bind({});
CustomfondColor.args = {
  size: "normal",
  fontColor: "black",
};
