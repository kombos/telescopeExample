# Telescope Generated Modules (Example)

Generating the modules for Assetmantle chain to create the ts/js endpoints for its API

To get the proto definitions of AssetMantle, run the yarn command:

    yarn run generateassetmantle

we are currently testing with the telescope command based generation:

    telescope transpile

also, 'proto' folder currently contains the proto files of assetmantle and the rest of the required modules. All these modules are imported when the generateassetmantle yarn command is run. the generation is currently throwing error when generated using the transpile command.

The 'proto2' folder currently contains a working example of the usual cosmos modules, and modules of gravitybridge chain, and ibc. This is generating successfully when using the transpile command.

the 'backup' folder contains the backup of all relevant modules.
