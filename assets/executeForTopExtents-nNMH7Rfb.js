import{az as r,eu as e,b7 as s}from"./index-D53vMPd9.js";import{d as u}from"./queryTopFeatures-Dqcn0_cG.js";import"./query-Cobf7Qwt.js";import"./pbfQueryUtils-DGuoUNP-.js";import"./pbf-BbsZMhS8.js";import"./OptimizedFeature-DUj7o6ET.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";async function l(o,i,n){const m=r(o),a=await u(m,e.from(i),{...n}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:s.fromJSON(t)}}export{l as executeForTopExtents};
