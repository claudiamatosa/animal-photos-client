import React, { Fragment } from "react";

export const newLinesToBreaks = text => (
  <Fragment>
    {text.split("\n").map((item, key) => (
      <Fragment key={key}>
        {item}
        <br />
      </Fragment>
    ))}
  </Fragment>
);
