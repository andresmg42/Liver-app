import React from "react";
import ModelGeneralPage from "./ModelGeneralPage";
import { LiverCancerFinal } from "../../../desease/cancer/LiverCancerFinal";
import CancerText3D from "../../texts/CancerText3D";
import StagingCancerLiver from "../../../desease/staging/cancer/StagingCancerLiver";
import StagingLiver from "../../../desease/staging/cancer/StagingLiver";
import HtmlInterfaz from "./HtmlInterfaz";
import cardscancer from "../../../../../pages/liver/desease/pageCancerLiverContent";
import cardsymptoms from "../../../../../pages/liver/symptoms/symptomsContent";
import { Fever } from "../../../simptoms/cancer/Fever";
import { useEventStore } from "../../../../../stores/use-auth-store";
const CancerPage = (props) => {
  const { clickcancer } = useEventStore();
  return (
    <div>
      {clickcancer && (
        <HtmlInterfaz
          color="white"
          cards={cardscancer}
          position={[-2.4, -0.3, 0]}
        />
      )}
      <ModelGeneralPage
        staging={<StagingCancerLiver />}
        text={
          <CancerText3D
            title={"LIVER CANCER"}
            position={[0, 1.5, 0]}
            color="black"
          />
        }
        model={<LiverCancerFinal home={false} />}
        color={"white"}
      />
    </div>
  );
};

export default CancerPage;
