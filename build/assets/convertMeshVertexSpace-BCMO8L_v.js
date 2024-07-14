import{de as p,s,ay as i}from"./index-BQYPq7Rf.js";import{l as n}from"./MeshVertexAttributes-CqaE02ra.js";import{M as a}from"./vertexSpaceConversion-Cvj3mExP.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-B7nGQtOR.js";import"./computeTranslationToOriginAndRotation-By8L1udD.js";import"./meshVertexSpaceUtils-dGf18D6M.js";import"./MeshLocalVertexSpace-VwR5AhX3.js";import"./vec3-BRKkHxOW.js";import"./projection-DYYNs8OW.js";import"./DoubleArray-JK_gK8iP.js";import"./BufferView-B5xDg0dr.js";import"./vec4-5nzg1q-1.js";async function S(t,r,m){await Promise.resolve(),p(m);const o=a(t,r);if(!o)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=t.cloneAndModifyVertexAttributes(new n({...o,uv:i(t.vertexAttributes.uv),color:i(t.vertexAttributes.color)}),r);return e.transform=null,e}export{S as convertMeshVertexSpace};
