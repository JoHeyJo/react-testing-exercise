import { render, fireEvent } from "@testing-library/react";
import photos from "./photos.js";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {

    render(
      <div>
        <Carousel photos={TEST_IMAGES} title="Testing caption"/>
      </div>
      )

});

it("matches snapshot", function () {

    const { container } = render(
      <div>
        <Carousel photos={TEST_IMAGES} title="Testing caption" />
      </div>
      );
    expect(container).toMatchSnapshot();

})