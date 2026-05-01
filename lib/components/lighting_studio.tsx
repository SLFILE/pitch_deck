import * as THREE from 'three'
import { useRef } from 'react'
import { useControls,folder } from 'leva'
import { useHelper } from '@react-three/drei'

const LightingStudio = () => {
  const keyRef = useRef<THREE.DirectionalLight>(null!)
  const fillRef = useRef<THREE.DirectionalLight>(null!)
  const backRef = useRef<THREE.DirectionalLight>(null!)

  const {
    keyPos, keyInt, keyCol,
    fillPos, fillInt, fillCol,
    backPos, backInt, backCol,
    showHelpers
  } = useControls('Lighting Studio', {
    'Key Light': folder({
      keyPos: { value: [5, 5, 5], step: 0.5 },
      keyInt: { value: 1.5, min: 0, max: 10 },
      keyCol: '#ffffff',
    }),
    'Fill Light': folder({
      fillPos: { value: [-5, 2, 5], step: 0.5 },
      fillInt: { value: 0.8, min: 0, max: 10 },
      fillCol: '#b1e1ff',
    }),
    'Back Light': folder({
      backPos: { value: [0, 5, -8], step: 0.5 },
      backInt: { value: 1.0, min: 0, max: 10 },
      backCol: '#ffffff',
    }),
    showHelpers: true,
  })


  useHelper(
    (showHelpers ? keyRef : { current: null }) as React.MutableRefObject<THREE.DirectionalLight>,
    THREE.DirectionalLightHelper, 1, 'yellow'
  )
  useHelper(
    (showHelpers ? fillRef : { current: null }) as React.MutableRefObject<THREE.DirectionalLight>,
    THREE.DirectionalLightHelper, 1, 'cyan'
  )
  useHelper(
    (showHelpers ? backRef : { current: null }) as React.MutableRefObject<THREE.DirectionalLight>,
    THREE.DirectionalLightHelper, 1, 'white'
  )

  return (
    <>
      <directionalLight ref={keyRef} position={keyPos} intensity={keyInt} color={keyCol} />
      <directionalLight ref={fillRef} position={fillPos} intensity={fillInt} color={fillCol} />
      <directionalLight ref={backRef} position={backPos} intensity={backInt} color={backCol} />
      <ambientLight intensity={0.3} />
    </>
  )
}

export default LightingStudio