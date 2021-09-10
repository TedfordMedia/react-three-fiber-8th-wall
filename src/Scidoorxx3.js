/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scidoorxx3.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group name="Rig_SciFi_Door_Small" rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <group name="Armature">
              <primitive object={nodes._rootJoint} />
              <skinnedMesh
                geometry={nodes.Scifi_Door_5_info_decals_0.geometry}
                material={materials.info_decals}
                skeleton={nodes.Scifi_Door_5_info_decals_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Scifi_Door_5_MAT_Scifi_Door_5_0.geometry}
                material={materials.MAT_Scifi_Door_5}
                skeleton={nodes.Scifi_Door_5_MAT_Scifi_Door_5_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scidoorxx3.glb')