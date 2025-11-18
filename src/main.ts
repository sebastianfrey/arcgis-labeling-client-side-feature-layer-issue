import "@esri/calcite-components/dist/calcite/calcite.css";
import "@arcgis/core/assets/esri/themes/light/main.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
import WMSLayer from "@arcgis/core/layers/WMSLayer";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-radio-button";
import "@esri/calcite-components/dist/components/calcite-radio-button-group";

import "./style.css";
import { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-layer-list";
import Basemap from "@arcgis/core/Basemap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import esriConfig from "@arcgis/core/config";

setAssetPath("./assets");

esriConfig.assetsPath = './assets';
esriConfig.workers.workerPath = './assets/esri/core/workers/RemoteClient.js';

const viewElement = document.getElementById("viewDiv");
if (!(viewElement instanceof ArcgisMap)) {
  throw new Error("No view element found");
}
viewElement.addEventListener("arcgisViewReadyChange", () => {
  const map = viewElement.map;

  if (!map) {
    throw new Error("No map found");
  }

  const view = viewElement.view;
  view.padding = {
    left: 49,
  };

  map.basemap = new Basemap();

  const wmsLayer = new WMSLayer({
    url: "https://sgx.geodatenzentrum.de/wms_basemapde?REQUEST=GetCapabilities&Version=1.3.0&SERVICE=WMS",
    title: "basemap.de",
    sublayers: [
      {
        name: "de_basemapde_web_raster_farbe",
        title: "basemap.de Farbe",
      },
    ],
  });

  map.add(wmsLayer);

  const graphics = [
    new Graphic({
      geometry: new Point({
        x: 693974.509634854,
        y: 5324263.97189802,
        spatialReference: { wkid: 25832 },
      }),
      attributes: {
        INTERNAL_ID: 1,
        ID: 290,
        OBJIDRF: 2,
        GUID: "315a798c-e057-4fdb-8282-78a20a43f98f",
        AVIFNASDN: null,
        AVIATSDN: null,
        BATSDN: null,
        DESCRIPT: null,
        BASEINCR: null,
        WTGTYPE: 25,
        GLOBALID: "308-290",
        WTGNAME: "WEA 03",
      },
    }),
    new Graphic({
      geometry: new Point({
        x: 694394.405334283,
        y: 5324264.10090483,
        spatialReference: { wkid: 25832 },
      }),
      attributes: {
        INTERNAL_ID: 2,
        ID: 291,
        OBJIDRF: 2,
        GUID: "01d50786-917f-4c59-b036-64beb3b71607",
        AVIFNASDN: null,
        AVIATSDN: null,
        BATSDN: null,
        DESCRIPT: null,
        BASEINCR: null,
        WTGTYPE: 25,
        GLOBALID: "308-291",
        WTGNAME: "WEA 02",
      },
    }),
    new Graphic({
      geometry: new Point({
        x: 694189.652073667,
        y: 5323923.33297824,
        spatialReference: { wkid: 25832 },
      }),
      attributes: {
        INTERNAL_ID: 3,
        ID: 292,
        OBJIDRF: 2,
        GUID: "477ee117-a4a5-4ad2-bd2a-216042c87a04",
        AVIFNASDN: null,
        AVIATSDN: null,
        BATSDN: null,
        DESCRIPT: null,
        BASEINCR: null,
        WTGTYPE: 25,
        GLOBALID: "308-292",
        WTGNAME: "WEA 01",
      },
    }),
  ];

  const featureLayer = new FeatureLayer({
    title: "WEA-Positions",
    objectIdField: "INTERNAL_ID",
    renderer: {
      type: "simple",
      label: "",
      symbol: {
        type: "simple-marker",
        angle: 0,
        xoffset: 0,
        yoffset: 0,
        size: 16,
        style: "cross",
        outline: {
          type: "simple-line",
          color: [0, 0, 0, 255],
          width: 1,
          style: "solid",
        },
      },
    },
    labelingInfo: [
      {
        labelExpressionInfo: { expression: '$feature["WTGNAME"]', title: "" },
        maxScale: 0,
        minScale: 50000,
        symbol: {
          type: "text",
          color: [0, 0, 0, 255],
          backgroundColor: [0, 0, 0, 0],
          font: { family: "arial", size: 12 },
          horizontalAlignment: "center",
          kerning: false,
          rotated: false,
          text: "",
          verticalAlignment: "top",
          xoffset: 0,
          yoffset: 0,
          angle: 0,
          lineWidth: 192,
          lineHeight: 1,
        },
        useCodedValues: false,
      },
    ],
    fields: [
      {
        alias: "INTERNAL_ID",
        editable: true,
        name: "INTERNAL_ID",
        nullable: true,
        type: "oid",
      },
      {
        alias: "Id",
        editable: true,
        name: "ID",
        nullable: true,
        type: "integer",
      },
      {
        alias: "Windpark",
        editable: true,
        name: "OBJIDRF",
        nullable: true,
        type: "integer",
      },
      {
        alias: "Globale Unique Id",
        editable: true,
        name: "GUID",
        nullable: true,
        type: "guid",
      },
      {
        alias: "Avifaunaabschaltung",
        editable: true,
        name: "AVIFNASDN",
        nullable: true,
        type: "integer",
      },
      {
        alias: "Luftfahrtabschaltung",
        editable: true,
        name: "AVIATSDN",
        nullable: true,
        type: "integer",
      },
      {
        alias: "Fledermausabschaltung",
        editable: true,
        name: "BATSDN",
        nullable: true,
        type: "integer",
      },
      {
        alias: "Beschreibung",
        editable: true,
        length: 255,
        name: "DESCRIPT",
        nullable: true,
        type: "string",
      },
      {
        alias: "Fundamenterhöhung",
        editable: true,
        name: "BASEINCR",
        nullable: true,
        type: "single",
      },
      {
        alias: "Anlagentyp",
        editable: true,
        name: "WTGTYPE",
        nullable: false,
        type: "integer",
      },
      {
        alias: "Name",
        editable: true,
        length: 50,
        name: "WTGNAME",
        nullable: false,
        type: "string",
      },
    ],
    source: graphics,
    geometryType: "point",
    spatialReference: { wkid: 25832 },
  });

  map.add(featureLayer, 0);

  (window as any).map = map;
  (window as any).view = view;

  view.extent = {
    spatialReference: {
      wkid: 102100,
    },
    xmin: 1290955.5190065776,
    ymin: 6113083.77274738,
    xmax: 1292993.9625045906,
    ymax: 6114153.655972953,
  };
});
