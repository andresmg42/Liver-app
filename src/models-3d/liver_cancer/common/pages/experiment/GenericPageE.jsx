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
import StagingSurgery from '../../../desease/staging/cancer/StagingSurgery';
import { Xrays } from '../../../treatment/Xrays';
import StagingCity from '../../../desease/staging/cancer/StagingCity';
import { Alcohol } from '../../../recomendations/Alcohol';

const GenericPageE = (props) => {
    if(props.page=='cancer'){
        
      return (<GenericAuxPage
      color='white'
      color_title='black'
      color_description='black'
      cards={cardscancer}
      staging={<StagingLiver/>}
      title='CANCER LIVER'
      model={<LiverCancerFinal home={false}/>}
      />);

    }
    else if(props.page=='symptoms'){
      return (<GenericAuxPage
      color='white'
      color_title='red'
      color_description='#ff4629'
      cards={cardsymptoms}
      staging={<StagingCancerLiver/>}
      title='FEVER'
      model={<Fever home={false}/>}
      />);
    }

    else if(props.page=='treatment'){
      return (<GenericAuxPage
      color='white'
      color_title='blue'
      color_description='#7732fb'
      cards={cardsymptoms}
      staging={<StagingSurgery/>}
      title='X-RAYS'
      model={<Xrays scale={0.7} home={false}/>}
      />);

    }
     else if(props.page=='recomendations'){
      return (<GenericAuxPage
      color='white'
      color_title='#7f7f7f'
      color_description='#a6a3a2'
      cards={cardsymptoms}
      staging={<StagingCity/>}
      title='ALCOHOL'
    model={<Alcohol scale={0.6} home={false}/>}
      />);

    }
    
    

  return null;
}

export default GenericPageE