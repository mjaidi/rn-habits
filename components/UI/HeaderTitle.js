import React from "react";
import { Text } from "@ui-kitten/components";
import colors from "../../constants/colors";

export default HeaderTitle = (props) => (
  <Text
    {...props}
    style={{
      fontSize: props.large ? 28 : 18,
      fontWeight: "bold",
      color: colors.dark,
    }}
  >
    {props.title}
  </Text>
);
