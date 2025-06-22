import { Text3D } from "@react-three/drei";
const OptionsText = (props) => {
  return (
    <Text3D
      //  ref={textRef}
      font="fonts/Bebas Neue_Regular.json"
      bevelEnabled
      bevelThickness={0.02}
      height={0.01}
      lineHeight={0.8}
      letterSpacing={0.02}
    //   size={7}
      {...props}
    //   position={[0, 20, -20]}
    >
      {props.text}
      <meshStandardMaterial color={props.color} />
    </Text3D>
  );
};

export default OptionsText;
