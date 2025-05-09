const Recipient = () => {
  return (
    <mesh
      rotation-x={-Math.PI / 2}
      receiveShadow={true}
      position-y={-1.2}
    >
      <circleGeometry args={[2, 32]} />
      <meshStandardMaterial roughness={0.8} metalness={1} />
    </mesh>
  );
};

export default Recipient;
  
  