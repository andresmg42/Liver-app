import ModelGeneralPage from "./ModelGeneralPage";

import CancerText3D from "../../texts/CancerText3D";

import HtmlInterfaz from "./HtmlInterfaz";

import { useEventStore } from "../../../../../stores/use-auth-store";
const GenericAuxPage = (props) => {
  const { clickcancer } = useEventStore();
  return (
    <div>
      {clickcancer && (
        <HtmlInterfaz
          color={props.color}
          cards={props.cards}
          position={[-2.4, -0.3, 0]}
        />
      )}
      <ModelGeneralPage
        staging={props.staging}
        text={
          <CancerText3D
            title={props.title}
            position={props.position_title}
            color={props.color_title}
          />
        }
        model={props.model}
        color={props.color}
        color_description={props.color_description}
        // texture_path={props.texture_path}
        texture={props.texture}
        position_floor={props.position_floor}
      />
    </div>
  );
};

export default GenericAuxPage;
