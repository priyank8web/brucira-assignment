import Database from "@/Icons/Database";
import LineChart from "@/Icons/LineChart";
import Trophy from "@/Icons/Trophy";
import { FunctionComponent, ReactNode } from "react";
import { FeatureContainer, FeatureListContainer, FeatureText } from "./styled";

const features = [
  {
    key: "feature-LineChart",
    Icon: <LineChart />,
    text: "Turn systems of records into systems of insight",
  },
  {
    key: "feature-Trophy",
    Icon: <Trophy />,
    text: "Drive targeted interventions, improve outcomes",
  },
  {
    key: "feature-Database",
    Icon: <Database />,
    text: "Leverage data across the customer lifecycle",
  },
];
const Feature: FunctionComponent<{ Icon: ReactNode; text: string }> = ({
  Icon,
  text,
}) => {
  return (
    <FeatureContainer>
      {Icon}
      <FeatureText>{text}</FeatureText>
    </FeatureContainer>
  );
};
function FeatureList() {
  return (
    <FeatureListContainer>
      {features.map((f) => (
        <Feature {...f} />
      ))}
    </FeatureListContainer>
  );
}

export default FeatureList;
