import{de as p,s,ay as i}from"./index-CV1RNnVc.js";import{l as n}from"./MeshVertexAttributes-CXPgiFTd.js";import{M as a}from"./vertexSpaceConversion-OKGikXUN.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-BpvmCGY0.js";import"./computeTranslationToOriginAndRotation-BJtQIG25.js";import"./meshVertexSpaceUtils-BXF5qQVB.js";import"./MeshLocalVertexSpace-CpkcMWA2.js";import"./vec3-0PbEKFus.js";import"./projection-C2CVHATe.js";import"./DoubleArray-uLYMoiXD.js";import"./BufferView-B8PF2IPS.js";import"./vec4-DGPIHlvH.js";async function S(t,r,m){await Promise.resolve(),p(m);const o=a(t,r);if(!o)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=t.cloneAndModifyVertexAttributes(new n({...o,uv:i(t.vertexAttributes.uv),color:i(t.vertexAttributes.color)}),r);return e.transform=null,e}export{S as convertMeshVertexSpace};
