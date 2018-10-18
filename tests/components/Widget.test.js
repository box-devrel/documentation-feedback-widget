import "../setupTests";
import { createElement } from "react";
import { shallow } from "enzyme";

import Widget from "../../src/components/Widget";

let className = "className";

let onClick = jest.fn();

let component = shallow(
  <Widget 
    submitted={false}
    submittingShortResponse={false}
    submittingLongResponse={false}
    response={false}
    showForm={false}
    showFormPrompt={false}
    onSubmitShortResponse={onClick}
    onSubmitLongResponse={onClick}
    setShowForm={false} />
);

test("it contain all the items as expected", () => {
  expect(component.text()).toContain("<Header /><IconButtons /><Loader /><Loader /><Loader />");
});

