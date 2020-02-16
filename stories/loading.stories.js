import React from "react";

import { storiesOf } from "@storybook/react";

import { Loading } from '../src/components/elements'

storiesOf("Elements/Loading", module)
  .add("Loading: Dark", () => (
    <div>
      <Loading dark />
    </div>
  ))
  .add("Loading: Light", () => (
    <div style={{ backgroundColor: '#111' }} >
      <Loading />
    </div>
  ))
  ;
