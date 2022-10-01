import { Component } from "react";
import { Buttons } from "./Buttons/Buttons";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
export class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  goodPlus = () => {
    this.setState({ good: this.state.good + 1 });
  };
  neutralPlus = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  badPlus = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  countTotalFeedback = () => {
    const sumValues = Object.values(this.state).reduce((a, b) => a + b);
    return sumValues;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalStats = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const stateNames = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <Buttons
            options={stateNames}
            onLeaveFeedback={this.onLeaveFeedback}
          ></Buttons>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalStats}
            positivePercentage={percent}
          />
        </Section>
      </>
    );
  }
}
