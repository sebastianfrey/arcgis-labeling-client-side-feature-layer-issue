# ArcGIS Maps SDK for JavaScript with Vite and TypeScript

This sample app show cases an issue with client side feature layer labeling.
The problem is, that the labels are shown above the wms layer, even
though the feature layer is below the wms layer in the layer stack.

The image below shows the issue clearly, as the labels are obviously not
part of the wms layer. They should be hidden behind the wms layer, as the
feature layer is below the wms layer in the layer stack.

![image shows map with labels above wms layer](./assets/image.png)