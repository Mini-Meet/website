import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";
import { Video } from '../src/components/elements'

storiesOf("Elements/Video", module)
  .add("Video", () => (
    <Video
      id="Strategy"
      header="Intro to Strategy:"
      videoId="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  ))
  ;
