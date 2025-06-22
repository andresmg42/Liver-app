import ModelGeneralPage from "./ModelGeneralPage";
import { LiverCancerFinal } from "../../../desease/cancer/LiverCancerFinal";
import CancerText3D from "../../texts/CancerText3D";
import StagingCancerLiver from "../../../desease/staging/cancer/StagingCancerLiver";
import StagingLiver from "../../../desease/staging/cancer/StagingLiver";
import HtmlInterfaz from "./HtmlInterfaz";
import cardscancer from "../../../../../pages/liver/desease/pageCancerLiverContent";
import cardsymptoms from "../../../../../pages/liver/symptoms/symptomsContent";
import cardtreatment from "../../../../../pages/liver/treatment/treatmentContent";
import cardsrecomendations from "../../../../../pages/liver/recomendations/recomendationsContent";
import { Fever } from "../../../simptoms/cancer/Fever";
import GenericAuxPage from "./GenericAuxPage";
import StagingSurgery from "../../../desease/staging/cancer/StagingSurgery";
import { Xrays } from "../../../treatment/Xrays";
import StagingCity from "../../../desease/staging/cancer/StagingCity";
import { Alcohol } from "../../../recomendations/Alcohol";
import { terminate } from "firebase/data-connect";

const GenericPageE = (props) => {
  const cancerTexturePath = "textures/floorsDesease/cancerfloor/brushed-metal_";
  const symptomsTexturePath = "textures/floorsDesease/symptomsfloor/Aluminum-Scuffed_";
  const treatmentTexturePath = "textures/floorsDesease/treatmentfloor/aluminum-vented-sheet_";
  const recommendationsTexturePath = "textures/floorsDesease/alcoholfloor/dark-wood-stain_";

  if (props.page == "cancer") {
    return (
      <GenericAuxPage
        color="white"
        color_title="black"
        color_description="black"
        cards={cardscancer}
        staging={<StagingLiver />}
        title="CANCER LIVER"
        model={<LiverCancerFinal home={false} position={[0, 0, 0]} />}
        // texture_path={'textures/floorsDesease/cancerfloor/brushed-metal_'}
        position_floor={[0, -0.3, 0]}
        position_title={[0, 1.5, 0]}
        texture={{
          map: `${cancerTexturePath}albedo.png`,
          normalMap: `${cancerTexturePath}normal-ogl.png`,
          roughnessMap: `${cancerTexturePath}roughness.png`,
          metalnessMap: `${cancerTexturePath}metallic.png`,
          aoMap: `${cancerTexturePath}ao.png`,
        }}
      />
    );
  } else if (props.page == "symptoms") {
    return (
      <GenericAuxPage
        color="white"
        color_title="red"
        color_description="#ff4629"
        cards={cardsymptoms}
        staging={<StagingCancerLiver />}
        title="FEVER"
        model={<Fever home={false} position={[0, 0, 0]} />}
        // texture_path={"textures/floorsDesease/cancerfloor/brushed-metal_"}
        position_floor={[0, -0.2, 0]}
        position_title={[0, 1.2, 0]}
        texture={{
          map: `${symptomsTexturePath}albedo.png`,
          normalMap: `${symptomsTexturePath}normal-ogl.png`,
          roughnessMap: `${symptomsTexturePath}roughness.png`,
          metalnessMap: `${symptomsTexturePath}metallic.png`,
        }}
      />
    );
  } else if (props.page == "treatment") {
    return (
      <GenericAuxPage
        color="white"
        color_title="blue"
        color_description="#7732fb"
        cards={cardtreatment}
        staging={<StagingSurgery />}
        title="X-RAYS"
        model={<Xrays scale={0.7} home={false} position={[0, 0.2, 0]} />}
        // texture_path={'textures/floorsDesease/symptomsfloor/Aluminum-Scuffed_'}
        position_floor={[0, -0.47, 0]}
        position_title={[0, 0.5, -1]}
        texture={{
          map: `${treatmentTexturePath}albedo.png`,
          normalMap: `${treatmentTexturePath}normal-ogl.png`,
          roughnessMap: `${treatmentTexturePath}roughness.png`,
          metalnessMap: `${treatmentTexturePath}metallic.png`,
          aoMap: `${treatmentTexturePath}ao.png`,
          // displacementMap: `${treatmentTexturePath}height.png`,
        }}
      />
    );
  } else if (props.page == "recomendations") {
    return (
      <GenericAuxPage
        color="white"
        color_title="#7f7f7f"
        color_description="#a6a3a2"
        cards={cardsrecomendations}
        staging={<StagingCity />}
        title="AVOID ALCOHOL"
        model={<Alcohol scale={0.6} home={false} postion={[0,0,0]} />}
        // texture_path={"textures/floorsDesease/alcoholfloor/dark-wood-stain_"}
        position_floor={[0, -0.87, 0]}
        position_title={[0, 1.5, -1]}
        texture={{
          map: `${recommendationsTexturePath}albedo.png`,
          normalMap: `${recommendationsTexturePath}normal-ogl.png`,
          roughnessMap: `${recommendationsTexturePath}roughness.png`,
          metalnessMap: `${recommendationsTexturePath}metallic.png`,
          aoMap: `${recommendationsTexturePath}ao.png`,
          displacementMap:`${recommendationsTexturePath}height.png`,
        }}
      />
    );
  }

  return null;
};

export default GenericPageE;
