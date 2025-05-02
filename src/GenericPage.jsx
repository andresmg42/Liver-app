import React from 'react'
import ModelCancerInPage from './models-3d/liver_cancer/common/ModelCancerInPage'
import CancerText3D from './models-3d/liver_cancer/common/texts/CancerText3D'
import { LiverCancerFinal } from './models-3d/liver_cancer/desease/cancer/LiverCancerFinal'
import PageModel from './models-3d/liver_cancer/common/pages/PageModel'
import { Fever } from './models-3d/liver_cancer/simptoms/cancer/Fever'
const GenericPage = (props) => {
    if(props.page=='cancer'){
        return <PageModel
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
      />
    }else if(props.page=='symptoms'){
        return <PageModel
        modelpage={
          <ModelCancerInPage
            text={
              <CancerText3D
                title={"FEVER"}
                position={[0, 1.5, 0]}
                color="green"
              />
            }
            model={<Fever scale={2} home={false} />}
            color="green"
          />
        }
        color="green"
      />
    }

  return null;
}

export default GenericPage