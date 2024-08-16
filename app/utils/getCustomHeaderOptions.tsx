import React from "react";
import HeaderCustom from "../layout/header/HeaderCustom";

export const getCustomHeaderOptions = (title: string) => ({
  header: () => (
    <HeaderCustom
      title={title}
    />
  ),
});
