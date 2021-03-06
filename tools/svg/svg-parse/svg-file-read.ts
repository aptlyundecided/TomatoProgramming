import { readFile, writeFile } from 'fs';
import { xml2js } from 'xml-js';
import { DataPaths } from 'tomato-util';
/**
 * Retrieve Relevant Level Elements
 * ---
 * The SVG will contain many sets of data.  Many of these data sets
 * contain properties named 'elements'.  This function retrieves the
 * first level of relevant elements.
 * @param data utf-8 data direct from the fs
 * @returns top level elements data
 */
const RetrieveRelevantLevelElements = (data: any) => {
    const propName = 'elements';

    try {
        return xml2js(data)[propName].filter((d: any) => { return d.name === 'svg'})[0].elements;
    } catch {
        return {
            msg: 'failed during RetrieveTopLevelElements',
            err: 'probably failed to parse or find SVG',
            filename: __filename
        }
    }
}
/**
 * Retrieve Layer One Elements
 * ---
 * All of the track is drawn in the first layer.  We should
 * ignore other layers of the SVG for the purpose of generating
 * meaningful track data.
 * 
 */
const RetrieveLayerOneElements = (d: any): any => {
    return d.filter((item: any) => {
        return item.attributes.id === 'layer1';
    })[0].elements;
};
/**
 * Scrape Path Attributes
 * ---
 * retrieve the relevant path attributes for drawing the path in the
 * UI and associated shuttles with it.
 * @param e path element pulled from SVG
 * @returns path data set
 */
const ScrapePathAttributes = (e: any) => {
    console.log(e.attributes.id);

    return {
        id: parseInt(e.attributes.id.replace('edge-', ''), 10),
        d: e.attributes.d
    };
};
/**
 * Do the whole business
 */
readFile(DataPaths.svg.svgTargetFile, "utf8", (err, data) => {
    const SVGData = [];
    /**
     * Extract meaningful elements.
     */
    const elements = RetrieveRelevantLevelElements(data);
    const layerOneElements = RetrieveLayerOneElements(elements);
    /**
     * iterate meaningful elements, and scrape data from them.
     */
    layerOneElements.forEach((element: any) => {
        const n = ScrapePathAttributes(element);
        SVGData.push(n);
    });
    /**
     * convert svg data object into JSON.
     */
    const JSONData = JSON.stringify(SVGData);
    /**
     * Write the new JSON data to file.
     */
    writeFile(DataPaths.svg.svgDataDump, JSONData, (err) => {
        if (err) { console.error('You done goofed.'); }
        else { console.log('New Data File Created'); }
    });
});
