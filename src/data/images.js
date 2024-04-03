//projects
import shortFilmNormanAlchy from "./imageData/film/shortFilmNormanAlchy.png";
import beautifulButDeadly from "./imageData/extras/h-iceq3.jpg";
import cyclops from "./imageData/cyclops/cyclops.jpeg";
import tapesOfBedlam from "./imageData/film/tapesOfBedlam.jpeg";

//sfx
import glasgowSmile from "./imageData/sfx/glasgowSmile.png";
import baldCap from "./imageData/sfx/baldW.JPG";
import lifeCasting from "./imageData/bts/lifeCasting.JPG";
import bruising from "./imageData/bts/bruising.JPG";

//Beauty
import glam from "./imageData/beauty/beautyH.png";
import redLipEditorial2 from "./imageData/beauty/redLipEditorial2.png";
import eraInspiredEditorial from "./imageData/beauty/eraInspiredEditorial.jpeg";

//projectData
import {
  projectCODA,
  projectGlasgowSmile,
  projectBeautifulButDeadly,
  projectLifeCasting,
  projectInjury,
  projectGlam,
  projectEraEditorial,
  projectRedLipEditorial,
  projectCyclops,
  projectBedlam,
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
  {
    id: 3,
    title: "cyclops",
    source: cyclops,
    projectTitle: "Cyclops",
    project: projectCyclops,
  },
  {
    id: 4,
    title: "Tapes of Bedlam",
    source: tapesOfBedlam,
    projectTitle: "Tapes of Bedlam - a short film",
    project: projectBedlam,
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
    id: 3,
    title: "lifeCasting",
    source: lifeCasting,
    projectTitle: "Life Casting",
    project: projectLifeCasting,
  },
  {
    id: 4,
    title: "injury",
    source: bruising,
    projectTitle: "Injury",
    project: projectInjury,
  },
  {
    id: 5,
    title: "baldCap",
    source: baldCap,
    projectTitle: "Bald Cap",
    disabled: true,
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
    projectTitle: "Red Lip Editorial",
    project: projectRedLipEditorial,
  },
  {
    id: 3,
    title: "eraInspiredEditorial",
    source: eraInspiredEditorial,
    projectTitle: "Era Inspired Editorial",
    project: projectEraEditorial,
  },
];
