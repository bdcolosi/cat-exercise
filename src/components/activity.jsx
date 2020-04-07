import React from "react";
import { connect } from "react-redux";
import { eat, play, nap } from "../redux/actions";

const Activity = ({ activity, eat, play, nap }) => (
  <>
    <h1>What is the cat doing?</h1>
    <p>The cat is {activity}</p>
    <button onClick={() => eat()}>Eating</button>
    <button onClick={() => play()}>Play</button>
    <button onClick={() => nap()}>Nap</button>
  </>
);
const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};
export default connect(mapStateToProps, { eat, play, nap })(Activity);
