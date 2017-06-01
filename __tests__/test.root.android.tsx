import "react-native";
import * as React from "react";
// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";
import ParkingLotTrackerMobileApp from "../src/root.android";


it("renders correctly", () => {
  const tree = renderer.create(
    <ParkingLotTrackerMobileApp />
  );
  expect(tree).toBeDefined();
});