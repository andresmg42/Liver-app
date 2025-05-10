import ModelGeneralPage from './ModelGeneralPage'
import { LiverCancerFinal } from "../../../desease/cancer/LiverCancerFinal";
import CancerText3D from "../../texts/CancerText3D";
import StagingCancerLiver from "../../../desease/staging/cancer/StagingCancerLiver";
import StagingLiver from "../../../desease/staging/cancer/StagingLiver";
import HtmlInterfaz from "./HtmlInterfaz";
import cardscancer from "../../../../../pages/liver/desease/pageCancerLiverContent";
import cardsymptoms from "../../../../../pages/liver/symptoms/symptomsContent";
import { Fever } from '../../../simptoms/cancer/Fever';
import GenericAuxPage from './GenericAuxPage';

const GenericPageE = (props) => {
    if(props.page=='cancer'){
        
      return (<GenericAuxPage
      color='white'
      color_title='black'
      cards={cardscancer}
      staging={<StagingCancerLiver/>}
      title='CANCER LIVER'
      model={<LiverCancerFinal home={false}/>}
      />);

    }
    
    

  return null;
}

export default GenericPageE