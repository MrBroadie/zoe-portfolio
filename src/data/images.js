//Beauty
import glam from "./imageData/beauty/beautyH.png";
import redLipEditorial2 from "./imageData/beauty/redLipEditorial2.png";

//projects
import shortFilmNormanAlchy from "./imageData/film/shortFilmNormanAlchy.png";
import beautifulButDeadly from "./imageData/extras/h-iceq3.jpg";

//sfx
import glasgowSmile from "./imageData/sfx/glasgowSmile.png";
import baldCap from "./imageData/sfx/baldW.JPG";
import lifeCasting from "./imageData/bts/lifeCasting.JPG";
import beaten2 from "./imageData/extras/w-beaten2.jpg";

//projectData
import {
  projectCODA,
  projectGlasgowSmile,
  projectBeautifulButDeadly,
  projectLifeCasting,
  projectInjury,
  projectGlam,
  projectEditorial,
} from "./projects";

export const projectImages = [
  {
    id: 1,
    title: "iceQueen",
    source: beautifulButDeadly,
    projectTitle: "Beautiful but deadly",
    project: projectBeautifulButDeadly,
  },
  {
    id: 2,
    title: "shortFilmNormanAlchy",
    source: shortFilmNormanAlchy,
    projectTitle: "CODA - a short student film",
    project: projectCODA,
  },
];

export const sfxImages = [
  {
    id: 1,
    title: "glasgowSmile",
    source: glasgowSmile,
    projectTitle: "Glasgow Smile",
    project: projectGlasgowSmile,
  },
  {
    id: 2,
    title: "baldCap",
    source: baldCap,
    projectTitle: "Bald Cap",
    disabled: true,
  },
  {
    id: 3,
    title: "lifeCasting",
    source: lifeCasting,
    projectTitle: "Life Casting",
    project: projectLifeCasting,
  },
  {
    id: 4,
    title: "injury",
    source: beaten2,
    projectTitle: "Injury",
    project: projectInjury,
  },
];

export const beautyImages = [
  {
    id: 1,
    title: "beautyHelen",
    source: glam,
    projectTitle: "Glam",
    project: projectGlam,
  },
  {
    id: 2,
    title: "redLipEditorial",
    source: redLipEditorial2,
    projectTitle: "Editorial's",
    project: projectEditorial,
  },
];
