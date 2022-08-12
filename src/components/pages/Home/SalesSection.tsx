import Button from "@/ui/Button";
import Image from "next/image";
import {
  SalesContainer,
  SalesTextContainer,
  SalesText,
  SalesHeading,
  SalesImageContainer,
} from "./styled";

function SalesSection() {
  return (
    <SalesContainer>
      <SalesTextContainer>
        <SalesHeading>
          Download Sales Insights from USA’s Top Insurance Leaders{" "}
        </SalesHeading>
        <SalesText>
          We reached out to USA’s top insurance leaders for a 360 degree view on
          the industry, what every leader’s top priorities should be, and
          opportunities for improvement.
        </SalesText>
        <Button>Check it out here</Button>
      </SalesTextContainer>
      <SalesImageContainer>
        <Image
          src="/images/hand.svg"
          width="918px"
          height="413px"
          layout="fill"
        />
      </SalesImageContainer>
    </SalesContainer>
  );
}

export default SalesSection;
