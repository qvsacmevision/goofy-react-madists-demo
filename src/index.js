import "./styles.css";
import Plotly from "plotly.js-dist";
import { mockData } from "./mockData.js";
import { madisData } from "./madisData.js";
// Configuration API
// https://plot.ly/javascript/configuration-options/
const layout = {};
const config = {
  displayModeBar: true
};

/* H E L P E R S */
// factory d'options par défaut pour les futurs courbes
/*function getDefaultTraceOption(color = "", fill = true) {
  return {
    // type de courbe basic
    type: "bar",
    // modifie le mode d'affichage du scatter, "lines", "markers", "text", "lines+markers", "lines+markers+text", "none"
    // /!\ se répercute sur la légende
    // mode: "lines",

    // ajoute du text à l'info-bulle au survol
    // text: "text",
    // ajoute un text à l'info-bulle au survol, suplante la valeur "text"
    // hovertext: "hovertext",
    // ajoute un text à l'info-bulle au survol, suplante tout !
    // ? documentation : https://github.com/d3/d3-format/blob/master/README.md#locale_format
    // hovertemplate: "%{y} par hovertemplate <extra>%{fullData.name}</extra>",

    // paramétrage de la ligne
    line: {
      // la couleur de la ligne, supplante le schéma de couleur du graph, layout.colorway
      color: color,
      // épaisseur de la ligne
      // /!\ se répercute sur la légende
      width: 2,

      // modifie le mode d'interpolation
      shape: "spline",
      // si le mode "spline" est actif on peut modifie la valeur, de 0 à 1.3
      smoothing: 1,
      // change de mode ("solid", "dot", "dash", "longdash", "dashdot", or "longdashdot") or a dash length list in px (eg "5px,10px,2px,2px").
      dash: "solid"
    },

    // permet d'ajouter une couleur de remplissage de la courbe
    fill: fill === true ? "tozeroy" : "none",
    // et de définir la couleur, sinon par défaut c'est la même que la ligne mais avec une opacité
    fillcolor: color,

    // gestion des markers, là il y a du choix
    // ? documentation : https://plot.ly/javascript/reference/#scatter-marker
    marker: {
      color: color
    },

    // permet de choisir le mode d'affichage des hover label info bulle tooltips,
    // dans notre cas ne les affiche pas, mais renvois quand même les données à l'event hover
    // combinaisons possibles : "x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip"
    hoverinfo: "none"
  };
}
// factory d'un seuil (shape + annotation)
function setNewLimit(yPos = 0, text, color) {
  return {
    annotation: {
      // visible ou pas ?
      visible: true,
      // opacité
      opacity: 1,

      // texte à afficher
      text: text,
      // angle à utiliser
      // textangle: 45,
      // définition du texte, couleur, police etc ...
      font: { ...commonConfig.font, color: "#ffffff", size: 13 },

      // largeur fixe
      // width: 200,
      // hauteur fixe
      // height: 2

      // alignement "left" | "center" | "right", seulement si le texte à plusieurs lignes ou une width fixe
      // align :'center',
      // alignement vertical "top" | "middle" | "bottom", uniquement si on a une height fixe
      // valign: 'top',

      // un fond de couleur pour la box
      bgcolor: color,
      // une couleur pour la bordure
      bordercolor: color,
      // épaisseur de la bordure, influence la flèche
      borderwidth: 4,

      // cache/affiche la flèche
      showarrow: false,

      // position en x
      xref: "paper",
      x: 0.5,
      xanchor: "center",

      // position en
      // yref: "paper",
      y: yPos,
      yanchor: "center"
    },

    shape: {
      // visible ou pas ?
      visible: true,

      // le type de shape, "circle" | "rect" | "path" | "line"
      type: "line",

      // par dessus ou par dessous les traces ? "below" | "above"
      layer: "above",

      // se positionne par rapport au graphique entier
      xref: "paper",
      // peur s'adapter à une taille dynamique
      xsizemode: "scaled",
      // démarre à 0 du graphique (infini)
      x0: "0",
      // continue à l'infini ...
      x1: "1",

      // se positionne par rapport au graphique entier
      // yref: 'paper',
      // peur s'adapter à une taille dynamique
      ysizemode: "scaled",
      // démarre à 0 du graphique (infini)
      y0: yPos,
      // continue à l'infini ...
      y1: yPos,

      // gérer une opacité
      opacity: 1,

      // définir la ligne
      line: {
        // sa couleur
        color: color,
        // son épaisseur
        width: 1,
        // son style
        dash: "solid"
      }
    }
  };
}
*/

// Convert times in MS into javascript date objects
/*const data = mockData.map(series => {
  return {
    ...series,
    x: series.x.map(dateInMs => new Date(dateInMs))
  };
});*/

const mdata = madisData.map((series) => {
  return {
    ...series,
    x: series.id,
    y: series.bad_flag,
    type: "bar"
  };
});

Plotly.newPlot("App", mdata, layout, config);
