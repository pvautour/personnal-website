class GeoView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML =
      `
    <div
  id="mapOne"
  class="geoview-map"
  style="height: 100vh;"
  data-lang="en"
  data-config="{
      'map': {
        'interaction': 'dynamic',
        'viewSettings': {
          'projection': 3978
        },
        'basemapOptions': {
          'basemapId': 'transport',
          'shaded': true,
          'labeled': true
        },
        'listOfGeoviewLayerConfig': [
          {
            'geoviewLayerId': 'esriDynamicLYR2',
            'geoviewLayerName': 'Energy',
            'metadataAccessPath': 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
            'geoviewLayerType': 'esriDynamic',
            'listOfLayerEntryConfig': [{ 'layerId': '0' }, { 'layerId': '6' }]
          }
        ]
      },
      'theme': 'geo.ca',
      'components': ['north-arrow', 'overview-map'],
      'corePackages': []
    }"
></div>
    <script src="https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js"></script>
    `;
  }
}

customElements.define('geoview', GeoView);
