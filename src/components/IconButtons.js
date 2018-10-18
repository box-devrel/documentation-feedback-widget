import { createElement } from "react";

import IconButton from "./IconButton";

let IconButtons = ({ submitted, className, loading, response, onClick }) => (
  <div>
    {submitted !== true && (
      <div className={className}>
        <IconButton
          positive={true}
          loading={loading}
          response={response}
          onClick={onClick(true)}
        />

        <IconButton
          positive={false}
          loading={loading}
          response={response}
          onClick={onClick(false)}
        />
      </div>
    )}
  </div>
);

export default IconButtons;