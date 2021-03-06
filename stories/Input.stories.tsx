import React from "react";
import { Input } from "../components/ui/Input";

export default {
  title: "Input",
  component: Input,
};

const Template: React.VFC<{}> = (args) => <Input {...args}></Input>;

export const Default = Template.bind({});
