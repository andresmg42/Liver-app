import ModelGeneralPage from './ModelGeneralPage'
import { LiverCancerFinal } from "../../../desease/cancer/LiverCancerFinal";
import CancerText3D from "../../texts/CancerText3D";
import StagingCancerLiver from "../../../desease/staging/cancer/StagingCancerLiver";
import StagingLiver from "../../../desease/staging/cancer/StagingLiver";
import HtmlInterfaz from "./HtmlInterfaz";
import cardscancer from "../../../../../pages/liver/desease/pageCancerLiverContent";
import cardsymptoms from "../../../../../pages/liver/symptoms/symptomsContent";
import { Fever } from '../../../simptoms/cancer/Fever';


const GenericPageE = (props) => {
    if(props.page=='cancer'){
        return <ModelGeneralPage
        htmlinterfaz={
            <HtmlInterfaz
           
            color="white"
            cards={cardscancer}
            position={[-2.5, -0.5, 0]}
          />
        }

        staging={<StagingCancerLiver />}

        text={<CancerText3D
            title={"LIVER CANCER"}
            position={[0, 1.5, 0]}
            color="black"
          />}

        model={<LiverCancerFinal scale={2} home={false} />}

        color={'white'}
        />
    }else if(props.page=='symptoms'){
        return <ModelGeneralPage
        htmlinterfaz={
            <HtmlInterfaz
           
            color="#56c937"
            cards={cardsymptoms}
            position={[-2.5, -0.5, 0]}
          />
        }

        staging={<StagingLiver />}

        text={<CancerText3D
            title={"FEVER"}
            position={[0, 1.5, 0]}
            color="green"
          />}

        model={<Fever scale={2} home={false} />}

        color={'#56c937'}
        />
    }

  return null;
}

export default GenericPageE