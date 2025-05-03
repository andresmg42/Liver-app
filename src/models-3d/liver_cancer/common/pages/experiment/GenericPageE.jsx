import ModelGeneralPage from './ModelGeneralPage'
import { LiverCancerFinal } from "../../../desease/cancer/LiverCancerFinal";
import CancerText3D from "../../texts/CancerText3D";
import StagingCancerLiver from "../../../desease/staging/cancer/StagingCancerLiver";
import HtmlInterfaz from "./HtmlInterfaz";
import ModelCancerInPage from "../../ModelCancerInPage";
import cardscancer from "../../../../../pages/liver/desease/pageCancerLiverContent";

const GenericPageE = (props) => {
    if(props.page=='cancer'){
        return <ModelGeneralPage
        htmlinterfaz={
            <HtmlInterfaz
            modelpage={
              <ModelCancerInPage
                text={
                  <CancerText3D
                    title={"LIVER CANCER"}
                    position={[0, 1.5, 0]}
                    color="red"
                  />
                }
                model={<LiverCancerFinal scale={2} home={false} />}
                color="#ff6035"
              />
            }
            color="#ff6035"
            cards={cardscancer}
            title="Cancer Liver Information"
            position={[-2.5, -0.5, 0]}
          />
        }

        staging={<StagingCancerLiver />}

        text={<CancerText3D
            title={"LIVER CANCER"}
            position={[0, 1.5, 0]}
            color="red"
          />}

        model={<LiverCancerFinal scale={2} home={false} />}

        color={'#ff6035'}
        />
    }else if(props.page=='symptoms'){
        return null;
    }

  return null;
}

export default GenericPageE